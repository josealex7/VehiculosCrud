import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Nav.css';

export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav>
                <Link className="link" to="">Inicio</Link>
                <Link className="link" to="/Registro">Registrar Vehiculo</Link>
                <Link className="link" to="/Listar">Vehiculos en Venta</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}
