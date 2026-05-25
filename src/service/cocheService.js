const cocheRepository = require('../repository/cocheRepository');

async function consultarCochesPorMarca(marca) {
    if (!marca) {
        return [];
    }

    return await cocheRepository.obtenerCochesPorMarca(marca);
}

async function crearNuevoCoche(coche) {
    if (!coche) {
        throw new Error('El coche es obligatorio');
    }

    if (!coche.identificador) {
        throw new Error('El identificador es obligatorio');
    }

    if (!coche.marca || !coche.modelo) {
        throw new Error('La marca y el modelo son obligatorios');
    }

    if (coche.cilindrada == null || coche.cilindrada <= 0) {
        throw new Error('La cilindrada debe ser mayor que 0');
    }

    await cocheRepository.crearCoche(coche);

    return coche;
}

module.exports = {
    consultarCochesPorMarca,
    crearNuevoCoche
};