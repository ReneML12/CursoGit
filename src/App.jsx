import { useState } from 'react'
import './App.css'

function App() {
const [datos, setDatos]=useState({nombre:"",correo:"",password:""});
const [errors, setErrors]= useState({});

const handleChange = (e) =>{
  const {name, value } = e.target;
  setDatos({datos,[name]:value});
};
const validar = ()=>{
  const newErrors = {};
  if(!datos.nombre) newErrors.nombre = "El nombre es obligatorio";
  if(!/\S+@\S+\.\S+/.test(datos.correo)) newErrors.correo = "Correo no válido";
  if(!datos.password.length < 8) newErrors.password = "La contraseña debe tener al menos 8 caracteres";
  return newErrors;
};

const handleSubmit = (e) =>{
  e.preventDefault();
  const validacionError = validar();
  if(Object.keys(validacionError).length > 0 ) {
    setErrors(validacionError);
  }
  else{
    console.log("Formulario enviado",datos);
    setErrors({});
  }
};
  return (

    <form onSubmit={handleSubmit}> 
      <div>
        <label>Nombre:</label>
        <input name="nombre" value={datos.nombre} onChange={handleChange} />
        {errors.nombre && <p>{errors.nombre}</p>}
      </div>
      <div>
      <label>Correo:</label>
        <input name="correo" value={datos.correo} onChange={handleChange} />
        {errors.correo && <p>{errors.correo}</p>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input name="password" value={datos.password} onChange={handleChange}/>
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App
