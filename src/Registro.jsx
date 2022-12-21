import React, {useState} from "react";
import img_logo from './imagenes/logo.JPG';

export const Registro = (props) => {
    const [email, setEmail ]= useState('');
    const [pass, setPass ]= useState('');
    const [nombre, setName]= useState('');

    const handleSubmit  = (e)=>{
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="forma_autorizacion_container"> 
            <img src={img_logo}>
                
            </img>
            <h2>
                Registrarse
             </h2>

            <form className="registro_forma_container" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre completo </label>
                <input value={nombre} nombre="nombre" onChange={(e) => setName(e.target.value)} id="nombre" placeholder="Nombre Completo"></input>
                
                <label htmlFor='e-mail'> E-mail </label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="e-mail" placeholder="correo@correo.com" id="email" name="Dirección de correo" />
                
                <label htmlFor='Password'> Password </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="Contraseña" placeholder="*********" id="Password" name="Password" />


                <button type="Registro_btn">Ingreso Usuario Nuevo</button>
            </form>
            <button className="Acceso_cuenta_btn" onClick={() =>props.onFormsSwitch('Login')}>¿Tiene una cuenta? - Acceder </button>
        </div>
        )
}