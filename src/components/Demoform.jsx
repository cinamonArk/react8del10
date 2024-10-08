import React, { useState, useRef, useEffect } from "react";

export default function Demoform() {
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorUserName, setErrorUserName] = useState(false);
  const [isErrorFullName, setErrorFullName] = useState(false);
  const [isErrorPassword, setErrorPassword] = useState(false);

  // referenciar elementos atraves de useRef para acceder a su contenido
  //para enviar el foco a cada 
  const inputUserName = useRef();
  const inputFullName = useRef();
  const inputPassword = useRef();
//definir los metodos para el texto
  const onSubmit = (event) => {
    // Desactivar el postback del browser
    event.preventDefault();
    setErrorUserName(userName === "");
    setErrorFullName(fullName === "");
    setErrorPassword(password === "");
    if (userName !="" &&  fullName !="" &&password !="") {
        console.log(userName + " " + fullName + " " + password)
        //Enviar el foco a userName
        //console.log(inputUserName)
        inputUserName.current.value= ""
        inputUserName.current.focus();
        setUserName("")
        console.log(userName)
    }
  };

  return (
    <div className="container">
      <h2>Formulario en React</h2>
      <form onSubmit={onSubmit}>
        <label className="form-label">
          Usuario <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          name="userName"
          placeholder="Ingrese usuario"
          className={`form-control ${isErrorUserName ? 'is-invalid' : ''}`}
          value={userName}
          onChange={e => setUserName(e.target.value)}
          ref={inputUserName}
          autoFocus
        />
        {isErrorUserName && <label style={{ color: 'red' }}>Debe ingresar el usuario</label>}

        <label className="form-label">
          Nombre de usuario completo <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          name="fullname"
          placeholder="Nombre completo"
          className={`form-control ${isErrorFullName ? 'is-invalid' : ''}`}
          value={fullName}
          ref={inputFullName}
          onChange={e => setFullName(e.target.value)}
        />
        {isErrorFullName && <label style={{ color: 'red' }}>Debe ingresar el nombre</label>}

        <label className="form-label">
          Contraseña <span style={{ color: 'red' }}>*</span>
        </label>
        <input
        ref={inputPassword}
          type="password"
          name="password"
          placeholder="Contraseña"
          className={`form-control ${isErrorPassword ? 'is-invalid' : ''}`}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {isErrorPassword && <label style={{ color: 'red' }}>Debe ingresar la contraseña</label>}

        <button className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}
