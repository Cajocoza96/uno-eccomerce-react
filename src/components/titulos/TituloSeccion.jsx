import React from 'react';
import './css/TituloSeccion.css';

function TituloSeccion({ titulo, extra }) {
    return (
        <header className='cabecera-titulo'>
            <h1 className='titulo'>{titulo}</h1>
            {extra && <div className='contenedor-extra'>{extra}</div>}
        </header>
    );
}

export default TituloSeccion;
