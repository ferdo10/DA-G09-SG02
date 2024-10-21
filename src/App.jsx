import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormularioPaciente from './FormularioPaciente.jsx';
import SeleccionCita from './SeleccionCita.jsx';
import ResumenCita from './ResumenCita.jsx';
import { CitaProvider } from './CitaContext';

function App() {
  return (
    <CitaProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FormularioPaciente />} />
          <Route path="/seleccion-cita" element={<SeleccionCita />} />
          <Route path="/resumen-cita" element={<ResumenCita />} />
        </Routes>
      </Router>
    </CitaProvider>
  );
}

export default App;
