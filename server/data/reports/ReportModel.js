const mongoose = require('mongoose');
const Sensitivity = require('../sensitivities/SensitivityModel');
const Rating = require('../ratings/RatingModel');

const ReportSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    sensitivityIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sensitivity', required: true }],
    details: { type: String, maxlength: 256 },
    reactionLevel: { type: Number, max: 5, required: true },
});

ReportSchema.pre('save', async function() {
    const sensitivities = await Sensitivity.find({ _id: { $in: this.sensitivityIds } });
    for (let i = 0; i < sensitivities.length; i++) {
        const sensitivity = sensitivities[i];
        const { level, allergen } = sensitivity;
        const rating = await Rating.findOne({ productId: this.productId, allergen });
        if (!rating) {
            newRating = new Rating({
                productId: this.productId,
                allergen: sensitivity.allergen,
            });
            await newRating.save();
        }
        else {
            const { average, sampleSize } = await rating.average(level);
            await rating.update({
                [level]: average,
                sampleSize,
            });
        }
    }
});


module.exports = mongoose.model('Report', ReportSchema);