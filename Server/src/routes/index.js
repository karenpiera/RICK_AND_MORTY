const express = require('express');
const router = express.Router();
const { getCharById } = require('../controllers/getCharById');
const  login  = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

// Ruta para obtener un personaje por su ID
router.get('/character/:id',  getCharById);

// Ruta para el inicio de sesión
router.get('/login', login);

// Ruta para agregar un favorito
router.post('/fav', postFav);

// Ruta para eliminar un favorito
router.delete('/fav/:id', deleteFav);

module.exports = router;