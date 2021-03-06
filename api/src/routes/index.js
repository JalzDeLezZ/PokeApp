const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokeroute = require('./pokemons')
const typeroute = require('./types')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/types', typeroute)
router.use('/pokemons', pokeroute)
router.use('/:id', pokeroute)


module.exports = router;
