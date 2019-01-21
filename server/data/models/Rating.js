const mongoose = require('mongoose');
const Product = require('./Product');

const RatingContract = require('../contracts/Rating');

const RatingSchema = new mongoose.Schema(RatingContract);

RatingSchema.pre('save', async function () {
    const product = await Product.findById(this.productId);
    await product.update({
        $push: {
            ratingIds: this._id,
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