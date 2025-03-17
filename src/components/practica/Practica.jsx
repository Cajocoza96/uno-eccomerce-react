import React, { useState } from 'react';

import './Practica.css';

function Practica() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="oval-container">
            {/* Encabezado con opciones */}
            <div className="options">
                <div
                    className={`option ${isLogin ? "active" : ""}`}
                    onClick={() => setIsLogin(true)}
                >
                    Iniciar Sesión
                </div>
                <div
                    className={`option ${!isLogin ? "active" : ""}`}
                    onClick={() => setIsLogin(false)}
                >
                    Crear Cuenta
                </div>
                <div
                    className={`indicator ${isLogin ? "left" : "right"}`}
                ></div>
            </div>

            {/* Contenido dinámico */}
            <div className="form-content">
                {isLogin ? (
                    <div className="form">
                        <h2>Iniciar Sesión</h2>
                        <input type="email" placeholder="Correo Electrónico" />
                        <input type="password" placeholder="Contraseña" />
                        <button>Entrar</button>
                    </div>
                ) : (
                    <div className="form">
                        <h2>Crear Cuenta</h2>
                        <input type="text" placeholder="Nombre Completo" />
                        <input type="email" placeholder="Correo Electrónico" />
                        <input type="password" placeholder="Contraseña" />
                        <button>Registrarse</button>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Practica;