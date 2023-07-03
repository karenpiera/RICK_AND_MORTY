import React, { useState } from 'react';

function validatie(user) {
  let errors = {};

  if (!user.email) {
    errors.email = "Error de email";
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email)) {
    errors.email = "Email inválido";
  }
  if (user.email.length >= 35) {
    errors.email = "Email inválido";
  }
  if (!/\d/.test(user.password)) {
    errors.password = "La contraseña requiere al menos un número";
  }
  if (user.password.length < 6 || user.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }

  return errors;
}

function Formulario({login}) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });

    setErrors(validatie({
      ...user,
      [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!errors.email && !errors.password) {
      login(user);
    } else {
      alert("Información incorrecta");
    }
  }

  return (
    <div>
      <div>
        <h1>Fill Your Credentials</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Username</label>
          <input type="text" name="email" value={user.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default Formulario;