import { toNumber } from './conversions.mjs';

export function calcularEspaciosDisponibles(citasAsignadas, diaConsulta) {
    
    const inicioAtencion = toNumber('09:00')
    const finAtencion = toNumber('17:00')

    let espaciosDisponibles = 0;
    let tiempoDisponible = 0;

    const citasDia = citasAsignadas.filter(cita => cita.Day.toLowerCase() === diaConsulta.toLowerCase());

    let horaInicio = inicioAtencion

    for (const cita of citasDia) {
        tiempoDisponible = toNumber(cita.Hour) - horaInicio; // Calcular tiempo disponible en minutos
        
        if (tiempoDisponible >= 30) {
            espaciosDisponibles += parseInt(tiempoDisponible / 30);
        }

        horaInicio = toNumber(cita.Hour) + parseInt(cita.Duration);
    }

    tiempoDisponible = finAtencion - horaInicio; // Calcula el tiempo disponible desde la ultima cita asiganada hasta la hora de cierre.
    
    if (tiempoDisponible >= 30) {
        espaciosDisponibles += parseInt(tiempoDisponible/30)
    }

    return { diaConsulta, espaciosDisponibles };
  }