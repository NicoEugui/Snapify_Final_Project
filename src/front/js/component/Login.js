import React from 'react';
import "../../styles/loginContainer.css";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='contaniner-fluid d-flex color-back'>
      <div className='container-fluid d-flex-column col-6' style={{ display: "contents" }}>
        <div className='container-fluid m-5 color-grad3 rounded-3'>
          <div className="container d-flex-column text-center">
            <div className=" color-text">
              <h1 style={{ fontSize: "65px" }}>Bienvenido!</h1>
              <h3 className="p-5 color-text">Ingresa para explorar y compartir tus momentos fotográfico</h3>
              <h2 className='color-text'>
                Si aún no estas registrado
                ingresa aquí
              </h2>
              <Link to="/signUp">
                <button
                  type="button"
                  className="px-5 btn brd color-call color-text mb-5">
                  <i className="pe-2 fa-solid fa-rocket"></i>Regístrese
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="login-container p-5 col-6">
        <form className="login-form">
          <h2 className='title'>Login</h2>
          <div className="mb-3">
            <div className="input-icon">
              <i className="fa-regular fa-envelope" style={{ color: "#7f7f7f" }} />
              <input
                type="email"
                className="form-control"
                id="InputEmail"
                placeholder="Email address"
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="input-icon">
              <i className="fa-solid fa-lock" style={{ color: "#7f7f7f" }} />
              <input
                type="password"
                className="form-control"
                id="Password"
                placeholder="Password"
              />
            </div>
          </div>
          <button type="submit" className="btn confirm-btn">
            Confirmar
          </button>
          <div className="mb-3">
            <Link to={"/forgot-password"}>

              <button type="button" className="btn btn-link forgot-password-btn">
                Olvidé mi contraseña
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

