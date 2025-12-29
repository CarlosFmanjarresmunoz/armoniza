import React, { useRef, useState } from "react";
import "./Registro.css";
import Footer from "../../components/footers/footer";
import logo from "../../assets/LOGO_3.png";

function Registro() {
  const fileInputDoc = useRef(null);
  const fileInputTarjeta = useRef(null);
  const [files, setFiles] = useState({
    documentoIdName: '',
    tarjetaProfName: ''
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFiles(prev => ({ ...prev, [field]: file.name }));
    }
  };

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

        <main className="registro-main">
          <header className="form-header">
            <h1>Solicitud de registro</h1>
            <p>Estamos listos para ti. ¡Adelante!</p>
          </header>

          <form className="registro-form">
            <div className="form-row">
              {/* SELECT ROLES */}
              <div className="field">
                <label>Roles</label>
                <select name="rol" className="custom-control">
                  <option value="">Selecciona tu rol</option>
                  <option value="Conciliador">Conciliador</option>
                  <option value="Arbitro">Arbitro</option>
                  <option value="Operador de insolvencia">Operador de insolvencia</option>
                </select>
              </div>

              {/* SELECT DEPARTAMENTO */}
              <div className="field">
                <label>Departamento de tu centro</label>
                <select name="deptoCentro" className="custom-control">
                  <option value="">Lista de departamentos</option>
                </select>
              </div>

              {/* SELECT CENTRO */}
              <div className="field">
                <label>Centro al que perteneces</label>
                <select name="centro" className="custom-control">
                  <option value="">Lista de centros</option>
                </select>
              </div>

              {/* INPUT DOCUMENTO */}
              <div className="field">
                <label>Documento de id</label>
                <div className="file-box">
                  <input 
                    type="text" 
                    value={files.documentoIdName} 
                    placeholder="Adjunte su documento" 
                    readOnly 
                    className="custom-control" 
                  />
                  <span className="clip-btn" onClick={() => fileInputDoc.current.click()}>📎</span>
                  <input
                    type="file"
                    ref={fileInputDoc}
                    onChange={(e) => handleFileChange(e, "documentoIdName")}
                    hidden
                  />
                </div>
              </div>

              {/* INPUT TARJETA */}
              <div className="field">
                <label>Tarjeta profesional</label>
                <div className="file-box">
                  <input
                    type="text"
                    value={files.tarjetaProfName}
                    placeholder="Adjunte su tarjeta"
                    readOnly
                    className="custom-control"
                  />
                  <span className="clip-btn" onClick={() => fileInputTarjeta.current.click()}>📎</span>
                  <input
                    type="file"
                    ref={fileInputTarjeta}
                    onChange={(e) => handleFileChange(e, 'tarjetaProfName')}
                    hidden
                  />
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Registro;