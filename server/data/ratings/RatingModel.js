const mongoose = require('mongoose');
const Product = require('../products/ProductModel');

const RatingSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    allergen: { type: String },
    light: { type: Number, default: 0 },
    moderate: { type: Number, default: 0 },
    sampleSize: { type: Number, default: 1 }
});

RatingSchema.pre('save', async function () {
    const product = await Product.findById(this.productId);
    await product.update({
        $push: {
            ratings: this._id,
        }
    });
});


RatingSchema.methods.average = function (level) {
    mongoose.model('Report')
        .find({ level, allergen: this.allergen, productId: this.productId.toString() }) //TODO: DEBUG THIS (NOT FINDING ANYTHING);
        .then(reports => {
            const sampleSize = reports.length;
            const average = reports.reduce((a, b) => a.reactionLevel + b.reactionLevel) / sampleSize;
            this.update({
                [level]: average,
                sampleSize,
            })
                .then(updatedRating => updatedRating)
                .catch(updateErr => updateErr);
        })
        .catch(err => err);
};



module.exports = mongoose.model('Rating', RatingSchema);