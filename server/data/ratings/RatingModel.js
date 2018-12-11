const mongoose = require('mongoose');
const Product = require('../products/ProductModel');

const RatingSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    allergen: { type: String },
    light: {
        reportIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }],
        reactionLevels: [{ type: Number, max: 5 }],
        sum: { type: Number, defult: 0 },
        sampleSize: { type: Number, default: 0 },
        average: { type: Number, max: 5, default: 0 },
    },
    moderate: {
        reportIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }],
        reactionLevels: [{ type: Number, max: 5 }],
        sum: { type: Number, defult: 0 },
        sampleSize: { type: Number, default: 0 },
        average: { type: Number, max: 5, default: 0 },
    },
});

RatingSchema.pre('save', async function () {
    const product = await Product.findById(this.productId);
    await product.update({
        $push: {
            ratings: this._id,
        }
    });
});


RatingSchema.methods.updateData = function (reportId = null, reactionLevel, sensitivityLevel ) {
    let { reactionLevels, sum, sampleSize, average, reportIds } = this[sensitivityLevel];
    if (!sum) {
        sum = 0;
        sampleSize = 0;
    }
    console.log("pre-calculation: ", { reactionLevels, sum, sampleSize, average, reportIds });
    if (reportId && reportIds.indexOf(reportId) !== -1) {
        return;
    }
    reportIds.push(reportId);
    reactionLevels.push(reactionLevel);
    sum += reactionLevel;
    sampleSize += 1;
    average = sum / sampleSize;
    console.log("post-calculation: ", { reactionLevels, sum, sampleSize, average, reportIds });
    return this.update({
        [sensitivityLevel]: {
            reactionLevels,
            sum,
            sampleSize,
            average
        }
    })
    .then(updatedRating => updatedRating)
    .catch(err => err);
};



module.exports = mongoose.model('Rating', RatingSchema);