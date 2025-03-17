import React from 'react';
import { Link } from 'react-router-dom';

function Contacto(){
    return(
        <div>
            <h1>Contacto</h1>
            <p>Estas en Contacto, por el momento no hay ningun contacto</p>
            <Link to='/'>Ir a inicio</Link>
        </div>
    );
}
export default Contacto;