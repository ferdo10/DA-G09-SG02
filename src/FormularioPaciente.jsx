import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CitaContext } from './CitaContext';

const FormularioPaciente = () => {
  const { cita, setCita } = useContext(CitaContext);
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCita({
      ...cita,
      paciente: { nombre, dni, email, telefono }
    });
    navigate('/seleccion-cita');
  };

  return (
    <div className="container">
      <h1>Centro Medico Daniel Alcides Carrion</h1>
    <form onSubmit={handleSubmit}>
      <h2>Datos del Paciente</h2>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
      <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} placeholder="DNI" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Teléfono" required />
      <button type="submit">Siguiente</button>
    </form>
    </div>
  );
};

export default FormularioPaciente;

