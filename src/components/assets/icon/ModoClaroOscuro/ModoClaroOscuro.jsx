import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import './css/ModoClaroOscuro.css';

function ModoClaroOscuro() {
  // Obtener el tema inicial desde localStorage o la preferencia del sistema
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // Aplicar el tema y guardarlo en localStorage
  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
    document.documentElement.classList.toggle('light-mode', !darkMode);
    localStorage.setItem("theme", darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Detectar cambios en la configuración del sistema y en el almacenamiento local
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e) => setDarkMode(e.matches);

    const handleStorageChange = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setDarkMode(savedTheme === 'dark');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
      window.removeEventListener('storage', handleStorageChange);
    };
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
