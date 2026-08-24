const errorHandler = (err, req, res, next) => {
  console.error(err);//para ver el error completo

  //error de validación de Mongoose (campos requeridos, tipos incorrectos, etc.
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ ok: false, error: errors.join(', ') });
  }
// error de id con formato inválido
  if (err.name === 'CastError') {
    return res.status(400).json({ ok: false, error: 'Id no válido' });
  }
// error de duplicado
  if (err.code === 11000) {
    return res.status(409).json({ ok: false, error: 'Recurso duplicado' });
  }
// cualquier otro error no controlado
  res.status(err.status || 500).json({ ok: false, error: err.message || 'Error interno del servidor' });
};

module.exports = errorHandler;
