import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { url } from '../helpers/url'
import '../styles/List.css';
// import { Card } from '@mui/material'

export const List = () => {

    const [vehiculos, setvehiculos] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(url)
            .then(response => {
                setvehiculos(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const dataDelete = (id) => {
        axios.delete(url + id)
            .then(response => {
            getData()
        }).catch(error=>{
            console.log(error)
        })
    }
   
    return (
        <div>
           {
               vehiculos.map(vehiculo => (
                    <div className="divPrincipal">
                        <div>
                            <h2>{vehiculo.nombre}</h2>
                            <img src={vehiculo.imagen} className="Img"></img> 
                            <div>
                                <label className="tituloLabel">Combustion: </label>   
                                <label>{vehiculo.combustion}</label>
                            </div>
                            <div>
                                <label className="tituloLabel">Autonomia: </label>
                                <label>{vehiculo.Autonomia}</label>
                            </div>
                            <div>
                                <label className="tituloLabel">Potencia: </label>
                                <label>{vehiculo.potencia}</label>
                            </div>
                            <div>
                                <label className="tituloLabel">Velocidad Maxima: </label>
                                <label>{vehiculo.VelocidadMax}</label>
                            </div>
                            <div>
                                <label className="tituloLabel">Precio: </label>
                                <label>{vehiculo.Precio}</label>
                            </div>
                            <div>
                            <button onClick={()=> dataDelete(vehiculo.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div> 
               ))
           }
            {/* <table className="tabla">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Combustion</th>
                    <th>Autonomia</th>
                    <th>Potencia</th>
                    <th>VelocidadMax</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                
                 <tbody>
                    {
                        vehiculos.map(vehiculo => (
                            <tr key={vehiculo.id}>
                                <td>{vehiculo.nombre}</td>
                                <td>{vehiculo.combustion}</td>
                                <td>{vehiculo.Autonomia}</td>
                                <td>{vehiculo.potencia}</td>
                                <td>{vehiculo.VelocidadMax}</td>
                                <td>{vehiculo.Precio}</td>
                                <td><img src={vehiculo.imagen}></img></td>
                                <td><button onClick={()=> dataDelete(vehiculo.id)}>Eliminar</button></td>
                            </tr>
                        ))
                     }
                   
                 </tbody>
            </table> */}
        </div>
    )
}