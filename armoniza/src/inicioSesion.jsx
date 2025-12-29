import React, { useState } from 'react';
import './InicioSesion.css';
import logo from './assets/LOGO_3.png';
import logo_Isotipo from './assets/IsotipoBlanco.png';
import mazo from './assets/mazo.jpeg';
import ciudad from './assets/ciudad.jpeg';
import reunion from './assets/reunion.jpeg';
import Footer from './components/footers/footer.jsx';
import { Link } from 'react-router-dom';

function InicioSesion() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({ level: 'weak', message: 'Ingresa una contraseña' });
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const getPasswordStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    if (score <= 2) return { level: 'weak', message: 'Contraseña débil' };
    if (score <= 4) return { level: 'medium', message: 'Contraseña intermedia' };
    return { level: 'strong', message: 'Contraseña fuerte' };
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(getPasswordStrength(value));
  };

  const isValidEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handleEmailBlur = () => {
    if (email && !isValidEmail(email)) {
      setEmailError('Email inválido');
    } else {
      setEmailError('');
    }
  };

  return (
    
    <><div className="InicioSesionLayout">
      {/* SECCIÓN IZQUIERDA: Branding y Mensaje */}
      <aside className="Carrusel">
        <img src={logo_Isotipo} alt="logo_Isotipo" className='logo_isotipo' />
        <div className="content-overlay">
          <div className="image-grid">
            <div className="img-main">
              <img src={reunion} className='img-Carrusel' />
            </div>
            <div className="img-Carrusel">
              <img src={mazo} alt="Mazo" />
            </div>
            <div className="img-Carrusel">
              <img src={ciudad} alt="Ciudad" />
            </div>
          </div>
          <h1 className="hero-text">
            Donde la gestión jurídica se <strong>simplifica</strong>, se transforma y se resuelve
          </h1>
        </div>
      </aside>

      {/* SECCIÓN DERECHA: Formulario */}
      <main className="card-InicioSesion">
        <div className="form-container">
          <header className="logo-header">
            <img src={logo} alt='logo' className='logo-header-card' />
          </header>

          <section className="welcome-section">
            <h1 className="welcome-title">¡Bienvenido!</h1>
            <p className="welcome-subtitle">Estamos listos para ti. ¡Adelante!</p>
          </section>

          <form className="login-form">
            <div className="input-group">
              <label>Correo electrónico</label>
              <input
                type="email"
                placeholder="Ingresa tu correo aquí"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur} />
              {emailError && <p className="error">{emailError}</p>}
            </div>

            <div className="input-group">
              <label>Contraseña</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={handlePasswordChange} />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️‍🗨️' : '👁️'}
                </button>
              </div>
              <div className="password-strength-bar">
                <div className={`progress ${passwordStrength.level}`}></div>
              </div>
              <p className="password-strength-message">{passwordStrength.message}</p>
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span>Mantener sesión iniciada</span>
              </label>
              <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>
            </div>

            <div className="button-group">
              <button type="submit" className="btn-primary">INICIO</button>
              <Link to="/registro">
                <button type="button" className="btn-secondary"> 
                  Registrarme</button>
              </Link>
            </div>
          </form>
        </div>


      </main>
    </div>
    <Footer /></>
  );
}

export default InicioSesion;