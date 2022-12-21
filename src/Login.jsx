import React, {useState} from "react"
import img_logo from './imagenes/logo.JPG';
export const Login = (props) => {
    const [email, setEmail ]= useState('');
    const [pass, setPass ]= useState('');
 

    const handleSubmit  = (e)=>{
        e.preventDefault();
        console.log(email);

    }
    return (
        <div className="forma_autorizacion_container"> 
        <h2>Login</h2>
        <img src={img_logo}></img>
            <form className="login_forma_container" onSubmit={handleSubmit}>
                <label htmlFor='e-mail'> E-mail </label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="e-mail" placeholder="correo@correo.com" id="email" name="Dirección de correo" />
                
                <label htmlFor='Password'> Password </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="Contraseña" placeholder="*********" id="Password" name="Password" />

                <button type="Usuario_nuevo_btn">Acceder</button>
            </form>
            <button className="Acceder_cuenta_btn" onClick={() => props.onFormSwitch('Registro')}>¿No posee una cuenta? - Registrarse Aqui</button>
        </div>
        )
}