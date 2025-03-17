import React from 'react';
import { Link } from 'react-router-dom';

function Acerca(){
    return(
        <div>
            <h1>Acerca de</h1>
            <p>Estas en acerca de, por el momento noy informacion</p>
            <Link to='/'>Ir a inicio</Link>
        </div>
    );
}

export default Acerca;