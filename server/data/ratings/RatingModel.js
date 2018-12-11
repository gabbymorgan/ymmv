const mongoose = require('mongoose');
const Product = require('../products/ProductModel');

const RatingSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    allergen: { type: String },
    light: {
        sum: { type: Number, defult: 0 },
        sampleSize: { type: Number, default: 0 },
        average: { type: Number, max: 5, default: 0 },
    },
    moderate: {
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


RatingSchema.methods.updateData = function (sensitivityLevel, reactionLevel, reportId) {
    let { sum, sampleSize, average } = this[sensitivityLevel];
    if (!reportId) {
        return;
    }
    if (!sum) {
        sum = 0;
        sampleSize = 0;
    }
    sum += reactionLevel;
    sampleSize += 1;
    average = sum / sampleSize;
    return this.update({
        [sensitivityLevel]: {
            sum,
            sampleSize,
            average
        }
    })
    .then(updatedRating => updatedRating)
    .catch(err => err);
};



module.exports = mongoose.model('Rating', RatingSchema);