import React, { useState, useEffect } from 'react';

import './Inicio.css';

import Cabecera from './cabecera/Cabecera';
import ProductoAntesDespuesDoble from './articulos/ProductoAntesDespuesDoble';
import ProductoDescuento from './articulos/ProductoDescuento';
import HoraProductoAntesDespues from './articulos/HoraProductoAntesDespues';
import ProductoDescuentoPromocion from './articulos/ProductoDescuentoPromocion';
import ProductoDescuento2 from './articulos/ProductoDescuento2';
import ProductoAntesDespues2 from './articulos/ProductoAntesDespues2';

import ProductoAntesDespues3 from './articulos/ProductoAntesDespues3';
import ProductoAntesDespuesDoble2 from './articulos/ProductoAntesDespuesDoble2';

import ProductoAntesDespues4 from './articulos/ProductoAntesDespues4';
import ProductoDescuentoDefinitivoPagos from './articulos/ProductoDescuentoDefinitivoPagos';


import MenuHamburguesaPrincipal from './menuHamburguesa/MenuHamburguesaPrincipal';
import MenuHamburguesaSecundaria from './menuHamburguesa/MenuHamburguesaSecundaria';
import MenuHamburguesaTerciaria from './menuHamburguesa/MenuHamburguesaTerciaria';

import RecibirPedidoCompraEnvio from './articulos/RecibirPedidoCompraEnvio';

import CuadroNotificaciones from './articulos/CuadroNotificaciones';

import TituloSeccion from './titulos/TituloSeccion';

import FooterCompleto from './footer/FooterCompleto';

import informacionTecnologia from './menuHamburguesa/data/categorias/tecnologia/informacionTecnologia.json';
import informacionMercado from './menuHamburguesa/data/categorias/mercado/informacionMercado.json';
import informacionBlackFriday from './menuHamburguesa/data/novedades/blackFriday/informacionBlackFriday.json';
import informacionVinosYLicores from './menuHamburguesa/data/categorias/vinosYLicores/informacionVinosYLicores.json';

function Inicio() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuVisibleDos, setMenuVisibleDos] = useState(false);
    const [menuVisibleTres, setMenuVisibleTres] = useState(false);

    const [menuActual, setMenuActual] = useState('principal');

    const [seleccionadaSeccion, setseleccionadaSeccion] = useState(null);
    const [seleccionadaSeccionDos, setseleccionadaSeccionDos] = useState(null);
    const [seleccionadoItem, setSeleccionadoItem] = useState('');
    const [seleccionadoItemDos, setSeleccionadoItemDos] = useState('');

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const toggleMenuDos = () => {
        setMenuVisibleDos(!menuVisibleDos);
    };

    const toggleMenuTres = () => {
        setMenuVisibleTres(!menuVisibleTres);
    };

    const retrocederMenu = () => {
        if (menuActual === 'terciaria') {
            setMenuActual('secundaria');
        } else if (menuActual === 'secundaria') {
            setMenuActual('principal');
        }
    };


    useEffect(() => {
        if (menuVisible || menuVisibleDos || menuVisibleTres) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuVisible, menuVisibleDos, menuVisibleTres]);


    return (

        <div className={`contenedor-padre ${menuVisible || menuVisibleDos || menuVisibleTres ? 'overlay-active' : ''}`}>
            {menuVisible && <div className='overlay'></div>}
            {menuVisibleDos && <div className='overlay'></div>}
            {menuVisibleTres && <div className='overlay'></div>}

            <Cabecera
                toggleMenu={toggleMenu}
                toggleMenuDos={toggleMenuDos}
                toggleMenuTres={toggleMenuTres}

            />

            <section className={`contenedor-contenido-menu-hamburguesa-novedades-categoria ${menuVisible ? 'visible' : 'hidden'}`}>
                {menuActual === 'principal' && (
                    <MenuHamburguesaPrincipal
                        toggleMenu={toggleMenu}
                        toggleMenuDos={toggleMenuDos}
                        setseleccionadaSeccion={setseleccionadaSeccion}
                        setMenuActual={setMenuActual}
                        setSeleccionadoItem={setSeleccionadoItem}
                    />
                )}
                {menuActual === 'secundaria' && (
                    <MenuHamburguesaSecundaria
                        toggleMenu={toggleMenu}
                        seleccionadaSeccion={seleccionadaSeccion}
                        setseleccionadaSeccionDos={setseleccionadaSeccionDos}
                        setMenuActual={setMenuActual}
                        retrocederMenu={retrocederMenu}
                        seleccionadoItem={seleccionadoItem}
                        setSeleccionadoItemDos={setSeleccionadoItemDos}
                    />
                )}
                {menuActual === 'terciaria' && (
                    <MenuHamburguesaTerciaria
                        toggleMenu={toggleMenu}
                        seleccionadaSeccionDos={seleccionadaSeccionDos}
                        setMenuActual={setMenuActual}
                        retrocederMenu={retrocederMenu}
                        seleccionadoItem={seleccionadoItem}
                        seleccionadoItemDos={seleccionadoItemDos}
                    />
                )}
            </section>

            <section className='contenedor-articulos-seccion-1'>
                <ProductoAntesDespuesDoble
                    info={informacionTecnologia}
                    categoria='tecnologia'
                    idContenido={4}
                />

                <ProductoDescuento
                    info={informacionVinosYLicores}
                    categoria='vinosYLicores'

                    idContenido1={1}
                    idSubContenido1={2}
                    idProducto1={2}

                    idContenido2={3}
                    idSubContenido2={1}
                    idProducto2={1}

                    idContenido3={4}
                    idSubContenido3={1}
                    idProducto3={1}
                />
            </section>

            <section className='contenedor-articulos-seccion-2'>
                <HoraProductoAntesDespues
                    info1={informacionBlackFriday}
                    categoria1='blackFriday'
                    idContenido1={1}
                    subContenidoId1={1}

                    info2={informacionTecnologia}
                    categoria2='tecnologia'
                    idContenido2={1}
                    subContenidoId2={2}
                />
            </section>

            <section className='contenedor-articulos-seccion-3'>
                <ProductoDescuentoPromocion 
                    info={informacionBlackFriday}
                    categoria='blackFriday'
                    idContenido={3}
                    idSubContenido={4}
                    idProducto={1}
                />

                <ProductoDescuento2 
                    info={informacionTecnologia}
                    categoria='tecnologia'
                    idContenido={5}
                    idSubContenido={1}
                    idProducto={1}
                />

                <ProductoAntesDespues2
                    info={informacionTecnologia}
                    categoria='tecnologia'
                    idContenido={4}
                    idSubContenido={1}
                    idProducto={3}
                />
            </section>

            <section className='contenedor-articulos-seccion-4'>
                <TituloSeccion titulo='Black days con' extra='Uno' />

                <ProductoAntesDespues3
                    info={informacionBlackFriday}
                    categoria='blackFriday'
                    idContenido={1}
                    idSubContenido={1}
                    idProducto={3}
                />

                <TituloSeccion titulo='¡Estrena lo ultimo en celulares!' />

                <ProductoAntesDespuesDoble2
                    info={informacionTecnologia}
                    categoria='tecnologia'

                    idContenido1={3}
                    idSubContenido1={1}
                    idProducto1={1}

                    idContenido2={3}
                    idSubContenido2={3}
                    idProducto2={3}
                />
            </section>

            <section className='contenedor-articulos-seccion-5'>
                <TituloSeccion titulo='¡Lo mejor de audio y video!' />

                <ProductoAntesDespues4
                    info={informacionBlackFriday}
                    categoria='blackFriday'
                    idContenido={1}
                    idSubContenido={2}
                    idProducto={1}
                />

                <ProductoDescuentoDefinitivoPagos
                    info={informacionMercado}
                    categoria='mercado'
                    idContenido={2} 
                    idSubContenido={1}
                />

            </section>

            <section className='contenedor-articulos-seccion-6'>
                <ProductoAntesDespuesDoble
                    info={informacionTecnologia}
                    categoria='tecnologia'
                    idContenido={3}
                />

                <HoraProductoAntesDespues
                    info1={informacionMercado}
                    categoria1='mercado'
                    idContenido1={1}
                    subContenidoId1={1}

                    info2={informacionMercado}
                    categoria2='mercado'
                    idContenido2={1}
                    subContenidoId2={2}
                />
            </section>

            <section className={`contenedor-recibir-pedido-compra-recoge-envio-domicilio ${menuVisibleDos ? 'visible' : 'hidden'}`}>
                <RecibirPedidoCompraEnvio toggleMenuDos={toggleMenuDos} />
            </section>

            <section className={`contenedor-cuadro-notificaciones ${menuVisibleTres ? 'visible' : 'hidden'}`}>
                <CuadroNotificaciones toggleMenuTres={toggleMenuTres} />
            </section>

            <FooterCompleto />
        </div>

    );
}

export default Inicio;