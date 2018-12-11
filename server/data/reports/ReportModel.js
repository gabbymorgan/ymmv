const mongoose = require('mongoose');
const Sensitivity = require('../sensitivities/SensitivityModel');
const Rating = require('../ratings/RatingModel');

const ReportSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    sensitivityIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sensitivity', required: true }],
    sensitivities: { type: Object },
    details: { type: String, maxlength: 256 },
    reactionLevel: { type: Number, max: 5, required: true },
});

ReportSchema.pre('save', async function() {
    const foundSensitivities = await Sensitivity.find({ _id: { $in: this.sensitivityIds } });
    this.sensitivities = foundSensitivities;
    await this.updateAssociatedRatings();
});

ReportSchema.methods.updateAssociatedRatings = async function() {
    // update the associated ratings for that product
    const updateRatings = this.sensitivities.map(async (sensitivity) => {
        const { allergen, sensitivityLevel } = sensitivity;
        const { productId, reactionLevel } = this;
        let rating = await Rating.findOne({ productId, allergen });
        if (!rating) {
            newRating = new Rating({ productId, allergen });
            rating = await newRating.save();
        }
        await rating.updateData(sensitivityLevel, reactionLevel, this._id);
    });
    await Promise.all(updateRatings);
}

module.exports = mongoose.model('Report', ReportSchema);