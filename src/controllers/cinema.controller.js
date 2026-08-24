const Cinema = require('../models/cinema.model');

// GET /cinemas para ver todos los cines
const getCinemas = async (req, res, next) => {
  try {
    const cinemas = await Cinema.find().populate('movies');
    res.json({ ok: true, data: cinemas });
  } catch (error) { next(error); }
};
// GET /cinemas/:id para obtener un cine por id
const getCinemaById = async (req, res, next) => {
  try {
    const cinema = await Cinema.findById(req.params.id).populate('movies');
    if (!cinema) return res.status(404).json({ ok: false, error: 'Cine no encontrado' });
    res.json({ ok: true, data: cinema });
  } catch (error) { next(error); }
};

// POST /cinemas para crear un nuevo cine
const createCinema = async (req, res, next) => {
  try {
    const newCinema = await Cinema.create(req.body);
    res.status(201).json({ ok: true, data: newCinema });
  } catch (error) { next(error); }
};

// PUT /cinemas/:id para modificar un cine
const updateCinema = async (req, res, next) => {
  try {
    const updatedCinema = await Cinema.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedCinema) return res.status(404).json({ ok: false, error: 'Cine no encontrado' });
    res.json({ ok: true, data: updatedCinema });
  } catch (error) { next(error); }
};

// DELETE /cinemas/:id para eliminar un cine
const deleteCinema = async (req, res, next) => {
  try {
    const deletedCinema = await Cinema.findByIdAndDelete(req.params.id);
    if (!deletedCinema) return res.status(404).json({ ok: false, error: 'Cine no encontrado' });
    res.json({ ok: true, message: 'Cine eliminado correctamente' });
  } catch (error) { next(error); }
};

module.exports = { getCinemas, getCinemaById, createCinema, updateCinema, deleteCinema };
