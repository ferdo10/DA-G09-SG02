import { createContext, useState } from 'react';

export const CitaContext = createContext();

export const CitaProvider = ({ children }) => {
  const [cita, setCita] = useState({
    paciente: {},
    especialidad: '',
    doctor: '',
  });

  return (
    <CitaContext.Provider value={{ cita, setCita }}>
      {children}
    </CitaContext.Provider>
  );
};
