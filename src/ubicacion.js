function tiempoDeLlegada(ubicacionDeLaParada, colectivo) {
    return colectivo.ubicacion - ubicacionDeLaParada;
}

function colectivoMasCercano(detalleDeLaLinea, ubicacionDeLaParada) {
    const { linea, colectivos } = detalleDeLaLinea;
    const tiemposDeLlegada = colectivos.map(colectivo => (tiempoDeLlegada(ubicacionDeLaParada, colectivo)))

    return { linea, tiempoDeLlegada: Math.min(...tiemposDeLlegada)};
}

module.exports = {
    colectivoMasCercano,
};
