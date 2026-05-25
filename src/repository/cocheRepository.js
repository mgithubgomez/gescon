const pool = require('../config/db');

async function obtenerCochesPorMarca(marca) {
    const [rows] = await pool.query(
        'SELECT * FROM T_COCHE WHERE marca = ?',
        [marca]
    );

    return rows;
}

async function crearCoche(coche) {
    const [resultado] = await pool.query(
        'INSERT INTO T_COCHE (identificador, marca, modelo, cilindrada) VALUES (?, ?, ?, ?)',
        [
            coche.identificador,
            coche.marca,
            coche.modelo,
            coche.cilindrada
        ]
    );

    return resultado;
}

module.exports = {
    obtenerCochesPorMarca,
    crearCoche
};