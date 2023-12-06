export function toNumber(horaEnTexto) {
    const [horas, minutos] = horaEnTexto.split(':').map(Number);

    const horaEnNumero = horas * 60 + minutos;

    return horaEnNumero;
}

export function toTime(horaEnNumero) {
    const horas = Math.floor(horaEnNumero / 60);
    const minutos = horaEnNumero % 60;

    const horaEnTexto = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;

    return horaEnTexto;
}



// // Ejemplo de uso:
// const horaTexto = '14:30';
// const HoraEquivalente = toTimeNumber(horaTexto);

// console.log(`La hora ${horaTexto} es equivalente a ${HoraEquivalente} minutos.`);

// const horaTextoOtraVez = toNumberTime(HoraEquivalente)

// console.log(`La hora equivalente ${HoraEquivalente} minutos es ${horaTextoOtraVez}.`);