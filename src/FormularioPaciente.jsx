import React, { useState } from 'react';

const FormularioPaciente = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, dni, email, telefono });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      <input type="text" placeholder="DNI" value={dni} onChange={(e) => setDni(e.target.value)} required />
      <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
      <button type="submit">Reservar Cita</button>
    </form>
  );
};

export default FormularioPaciente;
