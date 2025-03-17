import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Inicio.css';

function Inicio(){
    
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(nombre){
            navigate(`/Bienvenida/${nombre}`);
        }
    }

    return(
        <div>
            <h1>Inicio</h1>
            <p>Estas en Inicio, Bienvenido</p>

            <form onSubmit={handleSubmit}>
                <input type="text" value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} placeholder='Ingresa tu nombre' />
                <button type="submit">Enviar</button>
            </form>

            <Link to='/Acerca'>
                <div className='amarillo'></div>
            </Link>
            <br/>
            <Link to='/Contacto'>ir a Contacto</Link>
        </div>
        
    );
}
export default Inicio;