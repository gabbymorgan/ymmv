const mongoose = require('mongoose');
const Report = require('../reports/ReportModel');
const Product = require('../products/ProductModel');

const RatingSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    allergen: { type: String },
    light: { type: Number, default: 0 },
    moderate: { type: Number, default: 0 },
    sampleSize: { type: Number, default: 0 }
});

RatingSchema.pre('save', async function() {
    const product = await Product.findById(this.productId);
    if (product.ratings.indexOf(this._id) === -1){
        await product.update({
            $push: {
                ratings: this._id,
            }
        });
    }
});

RatingSchema.method('average', async function(level) {
    const reportList = await Report.find({ level, allergen: this.allergen, productId: this.productId });
    const sampleSize = reportList.length
    const average = reportList.reduce((a, b) => a.reactionLevel + b.reactionLevel) / sampleSize;
    return { sampleSize, average };
});


module.exports = mongoose.model('Rating', RatingSchema);