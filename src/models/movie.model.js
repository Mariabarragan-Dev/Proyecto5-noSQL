const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'El título es obligatorio'], trim: true },
    year: { type: Number, required: [true, 'El año es obligatorio'] },
    genre: { type: [String], default: [] },
    director: { type: String, trim: true },
    plot: { type: String, trim: true },
    rated: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', movieSchema);
