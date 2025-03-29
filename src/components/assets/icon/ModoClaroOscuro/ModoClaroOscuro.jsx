import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import './css/ModoClaroOscuro.css';

function ModoClaroOscuro() {
  // Función para obtener la preferencia guardada o el modo del sistema
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // Efecto para actualizar el tema y guardar en localStorage
  useEffect(() => {
    const root = document.documentElement; // <html>
    root.className = darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem("theme", darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Detectar cambios en la configuración del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className='contenedor-modo-claro-oscuro'>
      <button className='boton-modo-claro-oscuro' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <MdLightMode className='modo-claro' /> : <MdDarkMode className='modo-oscuro' />}
      </button>
    </div>
  );
}

export default ModoClaroOscuro;
