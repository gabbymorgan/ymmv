const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 128 },
    description: { type: String, required: true, maxlength: 256 },
    email: { type: String },
    url: {
        type: String,
        validate: {
            validator: function(url) {
                return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url);
            },
            message: props => `${props.value} is not a valid url!`
        },
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

module.exports = mongoose.model('Company', CompanySchema);