const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre del cine es obligatorio'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'La ciudad es obligatoria'],
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Cinema', cinemaSchema);