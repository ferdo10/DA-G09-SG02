import React from 'react';

const ResumenCita = ({ cita }) => {
  if (!cita) return null;

  return (
    <div>
      <h2>Resumen de la Cita</h2>
      <p>Nombre del paciente: {cita.nombre}</p>
      <p>DNI: {cita.dni}</p>
      <p>Correo: {cita.email}</p>
      <p>Teléfono: {cita.telefono}</p>
      <p>Especialidad: {cita.especialidad}</p>
      <p>Doctor: {cita.doctor}</p>
      <p>Fecha: {cita.fecha}</p>
      <p>Hora: {cita.hora}</p>
    </div>
  );
};

export default ResumenCita;
