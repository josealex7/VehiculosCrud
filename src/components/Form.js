import React, { useState } from 'react';
import '../styles/Form.css';
import { fileUpload } from '../helpers/fileUpload';
import axios from 'axios';
import url from '../helpers/url'


export const Form = () => {

    const [vehiculo, setvehiculo] = useState({
        nombre: '',
        combustion:'',
        Autonomia:'',
        potencia:'',
        VelocidadMax:'',
        Precio:'',
        imagen:''
    })

    const {nombre, combustion, Autonomia, potencia, VelocidadMax, Precio, imagen } = vehiculo

    const handleChange = ({ target }) => {
        setvehiculo({
            ...vehiculo,
            [target.name]: target.value
        })
        console.log(vehiculo);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const handleFile = (e) =>{
        const file = e.target.files[0]
        fileUpload(file)
        .then(response=>{
            vehiculo.imagen=response
        }).catch(error=>{
            console.log(error);
        })
    }

    const postData = () => {
        axios.post(url, vehiculo)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    return (
        <div>
           <form id="formulario">
           <h2>Registro de vehiculos</h2>
           <hr/>
               <div>
                   <label>Nombre Vehiculo</label>
                   <input id="inputNombre" name="nombre" value={nombre} onChange={handleChange}/>
               </div>
               <div>
                   <label>Combustion</label>
                   <input id="inputNombre" name="combustion" value={combustion} onChange={handleChange}/>
               </div>
               <div>
                   <label>Autonomia</label>
                   <input id="inputNumero"  name="Autonomia" value={Autonomia} onChange={handleChange}/>
               </div>
               <div>
                   <label>Potencia</label>
                   <input id="inputTelefono"  name="potencia" value={potencia} onChange={handleChange}/>
               </div>
               <div>
                   <label>Velocidad Max</label>
                   <input id="inputCelular" name="VelocidadMax" value={VelocidadMax} onChange={handleChange}/>
               </div>
               <div>
                   <label>Precio</label>
                   <input id="inputDireccion" name="Precio" value={Precio} onChange={handleChange}/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" value={imagen} onChange={handleChange}/>
                    
               </div>
               <div>
                   <button id="btnRegistro" onClick={postData}>Agregar</button> 
               </div>
           </form>
        </div>
    )
}
