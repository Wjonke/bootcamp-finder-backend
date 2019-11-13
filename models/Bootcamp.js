const mongoose = require('mongoose');

//defining data structure as well as validating fields

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a Bootcamp Name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },

  slug: String,

  description: {
    type: String,
    required: [true, 'Please add a Bootcamp Name'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },

  website: {
    type: String,
    /////setting regex to validate for a URL/////
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS'
    ]
  },

  phone: {
    type: String,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },

  email: {
    type: String,
    /////setting regex to validate for an email/////
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please use a valid email address'
    ]
  },

  address: {
    type: String,
    required: [true, 'Please add an address']
  },

  location: {
    //GeoJSON Point
    type: {
      type: String,
      enum: ['Point'] // 'location.type' must be 'Point'
      // required: true
    },
    coordinates: {
      type: [Number],
      // required: true,
      index: '2dsphere'
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },

  careers: {
    type: [String],
    required: true,
    enum: [
      'Web Development',
      'Mobile Development',
      'UI/UX',
      'Data Science',
      'Business',
      'Other'
    ]
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating must be at below 10']
  },

  averageCost: Number,

  photo: {
    type: String,
    default: 'no-photo.jpg'
  },

  housing: {
    type: Boolean,
    default: false
  },

  jobAssistance: {
    type: Boolean,
    default: false
  },

  jobGuarantee: {
    type: Boolean,
    default: false
  },

  acceptGi: {
    type: Boolean,
    default: false
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
