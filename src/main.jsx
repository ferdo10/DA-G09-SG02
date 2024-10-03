import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import FormularioPaciente from './FormularioPaciente.jsx';
import SeleccionCita from './SeleccionCita.jsx';
import ResumenCita from './ResumenCita.jsx';
import './index.css';

const App = () => {
  const [paciente, setPaciente] = useState(null);
  const [cita, setCita] = useState(null);

  const handlePacienteSubmit = (datosPaciente) => {
    setPaciente(datosPaciente);
  };

  const handleCitaSubmit = (datosCita) => {
    setCita({
      ...paciente, 
      ...datosCita, 
      fecha: new Date().toLocaleDateString(), 
      hora: new Date().toLocaleTimeString()
    });
  };

  return (
    
    <div>
      
      <h1>Centro Medico Daniel Alcides Carrion</h1>
      {!paciente && <FormularioPaciente onSubmit={handlePacienteSubmit} />}
      {paciente && !cita && (
        <SeleccionCita
          especialidades={['Cardiologia', 'Dermatología', 'Pediatría']}
          doctores={[
            { nombre: 'Dr. García', especialidad: 'Cardiologia' },
            {nombre : 'Dr. Pedro', especialidad: 'Cardiologia'},
            { nombre: 'Dra. Pérez', especialidad: 'Dermatología' },
            { nombre: 'Dr. Martínez', especialidad: 'Pediatría' }
          ]}
          onSelection={handleCitaSubmit}
        />
      )}
      {cita && <ResumenCita cita={cita} />}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
