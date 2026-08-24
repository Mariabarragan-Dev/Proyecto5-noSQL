const Movie = require('../models/movie.model');

// GET /movies para ver todas las películas
const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.json({ ok: true, data: movies });
  } catch (error) {
    next(error);
  }
};

// GET /movies/:id para obtener una película por id
const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ ok: false, error: 'Película no encontrada' });
    }
    res.json({ ok: true, data: movie });
  } catch (error) {
    next(error);
  }
};

// POST /movies para crear una nueva película
const createMovie = async (req, res, next) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json({ ok: true, data: newMovie });
  } catch (error) {
    next(error);
  }
};

// PUT /movies/:id para modificar una película
const updateMovie = async (req, res, next) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // devuelve el documento actualizado, no el antiguo
      runValidators: true, 
    });
    if (!updatedMovie) {
      return res.status(404).json({ ok: false, error: 'Película no encontrada' });
    }
    res.json({ ok: true, data: updatedMovie });
  } catch (error) {
    next(error);
  }
};

// DELETE /movies/:id para eliminar una película
const deleteMovie = async (req, res, next) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) {
      return res.status(404).json({ ok: false, error: 'Película no encontrada' });
    }
    res.json({ ok: true, message: 'Película eliminada correctamente' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};