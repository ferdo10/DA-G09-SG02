import React, { useState } from 'react';

const SeleccionCita = ({ especialidades, doctores, onSelection }) => {
  const [especialidad, setEspecialidad] = useState('');
  const [doctor, setDoctor] = useState('');

  const handleEspecialidadChange = (e) => {
    setEspecialidad(e.target.value);
  };

  const handleDoctorChange = (e) => {
    setDoctor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelection({ especialidad, doctor });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleEspecialidadChange}>
        <option value="">Selecciona Especialidad</option>
        {especialidades.map((esp, idx) => (
          <option key={idx} value={esp}>{esp}</option>
        ))}
      </select>
      <select onChange={handleDoctorChange}>
        <option value="">Selecciona Doctor</option>
        {doctores.filter(doc => doc.especialidad === especialidad).map((doc, idx) => (
          <option key={idx} value={doc.nombre}>{doc.nombre}</option>
        ))}
      </select>
      <button type="submit">Confirmar Cita</button>
    </form>
  );
};

export default SeleccionCita;
