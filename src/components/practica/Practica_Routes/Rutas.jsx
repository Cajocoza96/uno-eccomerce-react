import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import Acerca from './Acerca';
import Contacto from './Contacto';
import Bienvenida from './Bienvenida';

function Rutas(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Inicio />}></Route>
                <Route path='/Acerca' element={<Acerca />}></Route>
                <Route path='/Contacto' element={<Contacto />}></Route>
                <Route path='/Bienvenida/:nombre' element={<Bienvenida />}></Route>
            </Routes>
        </Router>

    );
}
export default Rutas;