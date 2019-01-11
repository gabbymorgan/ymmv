const mongoose = require('mongoose');

module.exports = {
  name: { type: String, required: true, maxLength: 128, index: true, inputType: 'text' },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  companyName: { type: String, maxLength: 128, required: true, inputType: 'text', search: { collection: 'Company', subField: 'name' } },
  description: { type: String, required: true, maxlength: 256, inputType: 'textarea' },
  ingredients: [{ type: String, maxlength: 64, inputType: 'text' }],
  ratingIds: { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' },
  imageUrl: {
      type: String,
      validate: {
          validator: function(url) {
              return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,15}(:[0-9]{1,5})?(\/.*)?$/.test(url);
          }
      },
      inputType: 'url'
  }
};