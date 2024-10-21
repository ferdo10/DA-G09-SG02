import { useContext } from 'react';
import { CitaContext } from './CitaContext';

const ResumenCita = () => {
  const { cita } = useContext(CitaContext);

  return (
    <div className="container">
      <h1>Centro Medico Daniel Alcides Carrion</h1>
      <h2>Resumen de la Cita</h2>
    <div className="resumen">
      <h2>Resumen de la Cita</h2>
      <p><strong>Paciente:</strong> {cita.paciente.nombre}</p>
      <p><strong>DNI:</strong> {cita.paciente.dni}</p>
      <p><strong>Email:</strong> {cita.paciente.email}</p>
      <p><strong>Teléfono:</strong> {cita.paciente.telefono}</p>
      <p><strong>Especialidad:</strong> {cita.especialidad}</p>
      <p><strong>Doctor:</strong> {cita.doctor}</p>
      <p><strong>Fecha:</strong> {cita.fecha}</p>
      <p><strong>Hora:</strong> {cita.hora}</p>
    </div>
    </div>
  );
};

export default ResumenCita;
