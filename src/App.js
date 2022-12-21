import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './Login';
import {Registro} from './Registro';
   

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName)=> {
    setCurrentForm(formName);

}

  return (
    <div className="App">
      {
        currentForm === "Login" ? <Login onFormSwitch={toggleForm}  /> : <Registro onFormSwitch={toggleForm}/>
      }
      
    </div>
  );
}

export default App;
