import moment from 'moment';

export function calcularEspaciosDisponibles(citasAsignadas, diaConsulta) {

    const inicioAtencion = moment('09:00', 'HH:mm');
    const finAtencion = moment('17:00', 'HH:mm');

    let espaciosDisponibles = 0;
    let tiempoDisponible = 0;

    const citasDia = citasAsignadas.filter(cita => cita.Day.toLowerCase() === diaConsulta.toLowerCase());

    let horaInicio = inicioAtencion

    for (const cita of citasDia) {
        tiempoDisponible = (moment(cita.Hour, 'HH:mm') - horaInicio) / 60000; // Calcular tiempo disponible en minutos
        
        if (tiempoDisponible >= 30) {
            espaciosDisponibles += parseInt(tiempoDisponible / 30);
        }

        horaInicio = moment(cita.Hour, 'HH:mm').add(cita.Duration, 'minutes');
    }

    tiempoDisponible = (finAtencion - horaInicio)/60000; // Calcula el tiempo disponible desde la ultima cita asiganada hasta la hora de cierre.
    
    if (tiempoDisponible >= 30) {
        espaciosDisponibles += parseInt(tiempoDisponible/30)
    }

    return { diaConsulta, espaciosDisponibles };
  }