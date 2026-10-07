
/**
 * Crea el elemento HTML de la imagen de una carta
 * @param {String} carta ejemplo: '2C', 'JD'
 * @returns {HTMLImageElement} imagen de la carta
 */
export const crearCartaHTML = ( carta ) => {

    if ( !carta ) throw new Error('La carta es un argumento obligatorio');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}
