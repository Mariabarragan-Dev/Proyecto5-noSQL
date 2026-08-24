const express = require('express');
const router = express.Router();
const { getCinemas, getCinemaById, createCinema, updateCinema, deleteCinema } = require('../controllers/cinema.controller');

router.get('/', getCinemas);
router.get('/:id', getCinemaById);
router.post('/', createCinema);
router.put('/:id', updateCinema);
router.delete('/:id', deleteCinema);

module.exports = router;
