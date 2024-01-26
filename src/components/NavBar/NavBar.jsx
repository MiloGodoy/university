import React from 'react';
import './NavBar.css'; 
import logo from '../../Images/logo-suda.png'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="USUD logo" />
      </div>
      <nav className="menu"> 
        <ul>
          <Link to="/home">Inicio</Link>
          <Link to="/about">Nosotros</Link>
          <Link to="/courses">Cursos</Link>
          <Link to="/services">Carreras</Link>
          <Link to="/contact">Contacto</Link>
          {
          localStorage.getItem('token') &&
            <Link to="/admin/services">Agregar Servicios</Link>
          }
          {
          localStorage.getItem('token') && localStorage.getItem('type') === 'ADMIN' &&
            <Link to="/admin/list">LIST OF ADMINS</Link>
          }
          {
            localStorage.getItem('token') ?
              <button onClick={() => {
                localStorage.clear()
                navigate('/admin/dashboard')
              }}> LOGOUT</button> :
              <button onClick={() => {
                navigate('admin/login')
              }}> LOGIN </button>
          }
        </ul>
      </nav>
     
    </header>
  );
}

export default NavBar;
