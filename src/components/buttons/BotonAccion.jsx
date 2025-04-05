import React from 'react';
import './css/BotonAccion.css';

const BotonAccion = ({ value, icono, onclick }) => {
    return(
        <button className='boton-accion' onClick={onclick}>
            {value}{icono}
        </button>
    );
};

export default BotonAccion;