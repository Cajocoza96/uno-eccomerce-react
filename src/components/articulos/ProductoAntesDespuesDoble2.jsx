import React, { useState, useEffect } from 'react';

import './css/ProductoAntesDespuesDoble2.css';

import BotonAccion from '../buttons/BotonAccion.jsx';

function ProductoAntesDespuesDoble2({ info, categoria, idContenido1, idSubContenido1,
    idProducto1, idContenido2, idSubContenido2, idProducto2 }) {

    const [productos, setProductos] = useState([]);
    const [productos2, setProductos2] = useState([]);

    useEffect(() => {
        const productoArray = [];

        const agregarProducto = (contenido, subContenidoId, productoId) => {

            if (contenido) {
                const subContenido = contenido.subContenido.find(sub => sub.id === subContenidoId);

                if (subContenido) {
                    const productoSeleccion = subContenido.productos.find(prod => prod.id === productoId);

                    if (productoSeleccion) {
                        productoArray.push({
                            productoInfo: productoSeleccion
                        })
                    }
                }
            }
        };

        const categoriaContenido1 = info?.[categoria]?.[0]?.contenido;
        const contenidoSeleccionado1 = categoriaContenido1?.find(c => c.id === idContenido1);

        agregarProducto(contenidoSeleccionado1, idSubContenido1, idProducto1);


        setProductos(productoArray);


        const productoArray2 = [];

        const agregarProducto2 = (contenido, subContenidoId, productoId) => {

            if (contenido) {
                const subContenido = contenido.subContenido.find(sub => sub.id === subContenidoId);

                if (subContenido) {
                    const productoSeleccion = subContenido.productos.find(prod => prod.id === productoId);

                    if (productoSeleccion) {
                        productoArray.push({
                            productoInfo: productoSeleccion
                        })
                    }
                }
            }
        };

        const categoriaContenido2 = info?.[categoria]?.[0]?.contenido;
        const contenidoSeleccionado2 = categoriaContenido2?.find(c => c.id === idContenido2);

        agregarProducto2(contenidoSeleccionado2, idSubContenido2, idProducto2);

        setProductos2(productoArray2);

    }, [info, categoria, idContenido1, idSubContenido1,
        idProducto1, idContenido2, idSubContenido2, idProducto2]);

    const obtenerRutaImagen = (imagen) => process.env.PUBLIC_URL + `/assets/img/articulosCompra/${imagen}`;

    return (
        <article className='contenedor-productos-antes-despues-doble-2'>

            {productos.map((producto, index) => (
                <div className='contenedor-producto-antes-despues-doble-2-boton' key={index}>

                    <div className='contenedor-detalles-producto-antes-despues-doble-2'>

                        <div className='contenedor-texto-detalles-producto-antes-despues-doble-2'>

                            <div className='contenedor-antes-despues-prod-ante-des-dob-2'>
                                <p className='texto-antes'>Antes ${producto.productoInfo.precioProductoAntesUnitarioPorcentaje.toLocaleString("es-CO")}</p>
                                <p className='texto-despues'>Despues ${producto.productoInfo.precioProductoUnitarioOtros.toLocaleString("es-CO")}</p>
                            </div>

                            <div className='contenedor-pagando-tarjeta-uno-prod-ante-des-dob-2'>
                                <p className='texto-pagando'>Pagando con</p>

                                <div className='contenedor-tarjeta-uno'>
                                    <p className='tarjeta-uno'>Uno</p>
                                </div>
                            </div>

                            <div className='contenedor-texto-oferta-nombre-producto-prod-ante-des-dob-2'>
                                <p className='texto-oferta'>Precio oferta ${producto.productoInfo.precioProductoOfertaUno.toLocaleString("es-CO")}</p>

                                <div className='contenedor-texto-nombre-producto-ante-desp-doble-2'>
                                    <p className='texto-nombre-producto'>{producto.productoInfo.detalle1}</p>
                                    <p className='texto-nombre-producto'>{producto.productoInfo.detalle2}</p>
                                </div>

                            </div>

                        </div>

                        <div className='contenedor-imagen-producto-antes-despues-doble-2'>
                            <img className='imagen-producto-antes-despues-doble-2' src={obtenerRutaImagen(producto.productoInfo.imagen)} alt={producto.productoInfo.nombreProductoUnitario} />
                        </div>

                    </div>

                    <BotonAccion value='¡Compra ahora!' />

                </div>

            ))}


            {productos2.map((producto, index) => (
                <div className='contenedor-producto-antes-despues-doble-2-boton' key={index}>

                    <div className='contenedor-detalles-producto-antes-despues-doble-2'>

                        <div className='contenedor-texto-detalles-producto-antes-despues-doble-2'>

                            <div className='contenedor-antes-despues-prod-ante-des-dob-2'>
                                <p className='texto-antes'>Antes ${producto.productoInfo.precioProductoAntesUnitarioPorcentaje.toLocaleString("es-CO")}</p>
                                <p className='texto-despues'>Despues ${producto.productoInfo.precioProductoUnitarioOtros.toLocaleString("es-CO")}</p>
                            </div>

                            <div className='contenedor-pagando-tarjeta-uno-prod-ante-des-dob-2'>
                                <p className='texto-pagando'>Pagando con</p>

                                <div className='contenedor-tarjeta-uno'>
                                    <p className='tarjeta-uno'>Uno</p>
                                </div>
                            </div>

                            <div className='contenedor-texto-oferta-nombre-producto-prod-ante-des-dob-2'>
                                <p className='texto-oferta'>Precio oferta ${producto.productoInfo.precioProductoOfertaUno.toLocaleString("es-CO")}</p>
                                <p className='texto-nombre-producto'>{producto.productoInfo.detalles1}</p>
                                <p className='texto-nombre-producto'>{producto.productoInfo.detalles2}</p>
                            </div>

                        </div>

                        <div className='contenedor-imagen-producto-antes-despues-doble-2'>
                            <img className='imagen-producto-antes-despues-doble-2' src={obtenerRutaImagen(producto.productoInfo.imagen)} alt={obtenerRutaImagen(producto.productoInfo.imagen)} />
                        </div>

                    </div>

                    <BotonAccion value='¡Compra ahora!' />

                </div>

            ))}



        </article>
    );
}

export default ProductoAntesDespuesDoble2;