import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Bienvenida(){
    const { nombre } = useParams();

    return(
        <div>
            <h1>Bienvenido: {nombre}</h1>
            <Link to='/'>ir a inicio</Link>
            <br/>
            <Link to='/Acerca'>Acerca de</Link>
            <br/>
            <Link to='/Contacto'>Contacto</Link>
            <br/>
        </div>
    );
}
export default Bienvenida;