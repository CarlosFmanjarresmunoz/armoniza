import React from "react";
import "./Registro.css";
import Footer from "../../components/footers/footer";
import logo from "../../assets/LOGO_3.png";

function Registro() {
  return (
    <>
      <div className="registro">
        <aside className="Sidebar-Registro">
          <img src={logo} alt="Logo" className="logoVertical" />
          <div className="section-video">
            <div className="video-box">
              <img src="https://picsum.photos/400/250?random=1" alt="preview" />
            </div>
          </div>
        </aside>
        <main>
          <form className="registro-form">
            <label>
              <input type="text" placeholder="Nombre" />
            </label>
            <label>
              <input type="email" placeholder="Email" />
            </label>
            <label>
              <input type="password" placeholder="Contraseña" />
            </label>
            <button type="submit">Registrar</button>
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Registro;
