const mongoose = require('mongoose');

module.exports = {
  name: { type: String, maxLength: 128, inputType: 'text' },
  description: { type: String, maxLength: 256, inputType: 'textarea' },
  email: { type: String, inputType: 'email' },
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
};

