//estrategia.js es el archivo donde programo los algoritmos de decision 


function decidirMovimientoBot(){
    const direcciones = ["N", "S", "E", "O"];
    const indiceAleatorio = Math.floor(Math.random() * direcciones.length);
    return  direcciones[indiceAleatorio];
}

function obtenerMisFichas(tablero, jugador){
const fichas = [];
for(let y = 0; y < tablero.length; y++){
for(let x = 0; x < tablero[y].length; x++){
const celda = tablero[y][x];
if(celda && celda.startsWith(jugador)){
fichas.push(celda);
}
}
}

return fichas;
}


module.exports = { decidirMovimientoBot, obtenerMisFichas };