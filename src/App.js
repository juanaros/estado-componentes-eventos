import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function App() {
  const [nombre, setNombre] = useState('')
  const [pass, setPass] = useState('')
  const [showBtn, setShowBtn] = useState(true)
  const [alerta, setAlerta] = useState('')
  const [showAlert, setShowAlert] = useState(false);


  const blank = () => {
    setShowBtn(nombre==='' || pass==='')
  }

  const validarDatos = (e) => {
    e.preventDefault();
    setShowAlert(true)
    if (nombre==='ADL' && pass==='252525') {
      setAlerta('Has iniciado sesión correctamente')
      return;
    } else if (nombre !== 'ADL' || pass !== '252525'){
      setAlerta('El nombre y/o la contraseña son incorrectos')
      return;
    } 
    setNombre('')
    setPass('')
  }


  return (
    <div className="App container">
      <h1>Desafío Estado de los componentes y eventos</h1>
      <form onSubmit={validarDatos}>
        <div className='my-3'>
          <label >Nombre</label>
          <input name="nombre" type="name" className='form-control' onChange={(e) => {
          setNombre(e.target.value)
          blank()}} value={nombre}/>
        </div>
        <div className='my-3'>
          <label>Contraseña</label>
          <input name="pass" type="password" className='form-control' onChange={(e) => {
          setPass(e.target.value)
          blank()}} value={pass}/>
        </div>
        <Button text="Iniciar sesión" disable={showBtn}/>
        {showAlert ? <Alert variant="dark" className='my-3'>{alerta}</Alert> : null}
      </form>
    </div>
  );
}

export default App;
