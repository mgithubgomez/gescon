const cocheService = require('../service/cocheService');

async function obtenerCoches(req, res) {

    try {

        const marca = req.query.marca;

        const coches = await cocheService.consultarCochesPorMarca(marca);

        res.json(coches);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
}
async function crearCoche(req, res) {
    try {
        const coche = req.body;

        const cocheCreado = await cocheService.crearNuevoCoche(coche);

        res.status(201).json({
            mensaje: 'Coche creado correctamente',
            coche: cocheCreado
        });

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

module.exports = {
    obtenerCoches,
    crearCoche
};