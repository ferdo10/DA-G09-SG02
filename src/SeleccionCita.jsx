import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CitaContext } from './CitaContext';

const SeleccionCita = () => {
  const { cita, setCita } = useContext(CitaContext);
  const [especialidad, setEspecialidad] = useState('');
  const [doctor, setDoctor] = useState('');
  const navigate = useNavigate();

  const especialidades = ['Cardiología', 'Dermatología', 'Pediatría'];
  const doctores = [
    { nombre: 'Dr. Pérez', especialidad: 'Cardiología' },
    { nombre: 'Dr. Gómez', especialidad: 'Dermatología' },
    { nombre: 'Dra. Rodríguez', especialidad: 'Pediatría' }
  ];

  const handleEspecialidadChange = (e) => {
    setEspecialidad(e.target.value);
  };

  const handleDoctorChange = (e) => {
    setDoctor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCita({
      ...cita,
      especialidad,
      doctor,
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString()
    });
    navigate('/resumen-cita');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Seleccionar Cita</h2>
      <select value={especialidad} onChange={handleEspecialidadChange} required>
        <option value="">Selecciona Especialidad</option>
        {especialidades.map((esp, idx) => (
          <option key={idx} value={esp}>{esp}</option>
        ))}
      </select>
      <select value={doctor} onChange={handleDoctorChange} required>
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

