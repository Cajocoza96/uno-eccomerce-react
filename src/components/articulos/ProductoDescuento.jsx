import React, { useState, useEffect } from 'react';

import './css/ProductoDescuento.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';

import BotonAccion from '../buttons/BotonAccion.jsx';

import TrianguloFusionInfinito from '../fondo-animados/TrianguloFusionInfinito';

function ProductoDescuento({ info, categoria, idContenido1, idSubContenido1, idProducto1,
    idContenido2, idSubContenido2, idProducto2,
    idContenido3, idSubContenido3, idProducto3 }) {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const productoArray = [];

        const agregarProducto = (contenido, subContenidoId, productoId) => {
            if (contenido) {
                const subContenido = contenido.subContenido.find(sub => sub.id === subContenidoId);

                if (subContenido) {
                    const productoSeleccion = subContenido.productos.find(prod => prod.id === productoId);

                    if (productoSeleccion) {
                        productoArray.push({
                            productoSimilares: subContenido.productoSimilares || '', productosInfo: productoSeleccion
                        });
                    }
                }
            }
        };

        const categoriaContenido1 = info?.[categoria]?.[0]?.contenido;
        const contenidoSeleccionado1 = categoriaContenido1?.find(c => c.id === idContenido1);

        const categoriaContenido2 = info?.[categoria]?.[0]?.contenido;
        const contenidoSeleccionado2 = categoriaContenido2?.find(c => c.id === idContenido2);

        const categoriaContenido3 = info?.[categoria]?.[0]?.contenido;
        const contenidoSeleccionado3 = categoriaContenido3?.find(c => c.id === idContenido3);

        agregarProducto(contenidoSeleccionado1, idSubContenido1, idProducto1);
        agregarProducto(contenidoSeleccionado2, idSubContenido2, idProducto2);
        agregarProducto(contenidoSeleccionado3, idSubContenido3, idProducto3);

        setProductos(productoArray);

    }, [info, categoria, idContenido1, idSubContenido1, idProducto1,
        idContenido2, idSubContenido2, idProducto2,
        idContenido3, idSubContenido3, idProducto3]);

    const obtenerRutaImagen = (imagen) => process.env.PUBLIC_URL + `/assets/img/articulosCompra/${imagen}`;

    return (
        <article className='contenedor-producto-descuento-1'>
            <TrianguloFusionInfinito />
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
                modules={[Navigation]}
                className='swiper-producto-descuento'>

                {productos.map((producto, index) => (
                    <SwiperSlide className='swiperSlide-contenedor-producto-desc-similares-boton' key={index}>

                        <div className='contenedor-producto-desc-similares'>

                            <div className='contenedor-descuento-imagen-producto'>

                                <div className='contenedor-texto-hasta-porcentaje-descuento'>
                                    <p className='texto-hasta-descuento'>Hasta</p>
                                    <p className='texto-porcentaje'>-{producto.productosInfo.porcentajeProductoDescuentoUnitario}%</p>
                                    <p className='texto-hasta-descuento'>de dcto</p>
                                </div>


                                <div className='contenedor-imagen-descuento-producto'>
                                    <img className='imagen-descuento-producto' src={obtenerRutaImagen(producto.productosInfo.imagen)} alt={producto.productosInfo.nombreProductoUnitario} />
                                </div>

                            </div>


                            <div className='contenedor-producto-similares-envio-gratis-precio'>

                                <p className='texto-producto-similares-mas'>
                                    {producto.productoSimilares}
                                </p>

                                <div className='contenedor-envio-gratis-precio'>
                                    <p className='texto-envio-gratis'>Envío gratis !</p>
                                    <p className='texto-por-compras-de'>Por compra de</p>
                                    <p className='texto-por-compras-de'>${producto.productosInfo.precioProductoUnitario.toLocaleString("es-CO")}</p>
                                    <p className='texto-con-tarjeta'>con tarjeta</p>

                                    <div className='contenedor-tarjeta-uno'>
                                        <p className='tarjeta-uno'>Uno</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <BotonAccion value='¡Compra ahora!' />

                    </SwiperSlide>
                ))}

            </Swiper>

        </article>

    );
}

export default ProductoDescuento;
