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

ReportSchema.statics.createRatings = async (report) => {
    // update the associated ratings for that product
    const foundSensitivities = await Sensitivity.find({ _id: { $in: report.sensitivityIds } });
    const updateRatings = foundSensitivities.map(async (foundSensitivity) => {
        const { level, allergen } = foundSensitivity;
        const { productId } = report;
        const rating = await Rating.findOne({ productId, allergen });
        if (!rating) {
            newRating = new Rating({ productId, allergen });
            await newRating.save();
        }
        else {
            await rating.average(level);
        }
    });
    await Promise.all(updateRatings);
}

module.exports = mongoose.model('Report', ReportSchema);