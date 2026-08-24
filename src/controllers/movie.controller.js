const Movie = require('../models/movie.model');

// GET /movies para ver todos los cines
const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.json({ ok: true, data: movies });
  } catch (error) { next(error); }
};
// GET /movies/:id para obtener un cine por id
const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ ok: false, error: 'Película no encontrada' });
    res.json({ ok: true, data: movie });
  } catch (error) { next(error); }
};

// POST /movies para crear un nuevo cine
const createMovie = async (req, res, next) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json({ ok: true, data: newMovie });
  } catch (error) { next(error); }
};

// PUT /movies/:id para modificar un cine
const updateMovie = async (req, res, next) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedMovie) return res.status(404).json({ ok: false, error: 'Película no encontrada' });
    res.json({ ok: true, data: updatedMovie });
  } catch (error) { next(error); }
};

// DELETE /movies/:id para eliminar una pelicula
const deleteMovie = async (req, res, next) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) return res.status(404).json({ ok: false, error: 'Película no encontrada' });
    res.json({ ok: true, message: 'Película eliminada correctamente' });
  } catch (error) { next(error); }
};

module.exports = { getMovies, getMovieById, createMovie, updateMovie, deleteMovie };
