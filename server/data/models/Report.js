const mongoose = require('mongoose');
const Sensitivity = require('./Sensitivity');
const Rating = require('./Rating');
const ReportContract = require('../contracts/Report');

const ReportSchema = new mongoose.Schema(ReportContract);

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