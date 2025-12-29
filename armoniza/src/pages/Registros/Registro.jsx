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
  const [formData, setFormData] = useState({
    rol: '',
    deptoCentro: '',
    centro: '',
    tipoDocumento: '',
    numeroIdentidad: '',
    genero: '',
    paisDomicilio: '',
    departamentoEstado: '',
    ciudadDomicilio: '',
    estadoSocioeconomico: '',
    tipoVia: '',
    numeroVia: '',
    letraVia: '',
    complemento: '',
    barrio: '',
    codigoPostal: ''
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFiles(prev => ({ ...prev, [field]: file.name }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
                <select name="rol" value={formData.rol} onChange={handleChange} className="custom-control">
                  <option value="">Selecciona tu rol</option>
                  <option value="Conciliador">Conciliador</option>
                  <option value="Arbitro">Arbitro</option>
                  <option value="Operador de insolvencia">Operador de insolvencia</option>
                </select>
              </div>

              {/* SELECT DEPARTAMENTO */}
              <div className="field">
                <label>Departamento de tu centro</label>
                <select name="deptoCentro" value={formData.deptoCentro} onChange={handleChange} className="custom-control">
                  <option value="">Lista de departamentos</option>
                </select>
              </div>

              {/* SELECT CENTRO */}
              <div className="field">
                <label>Centro al que perteneces</label>
                <select name="centro" value={formData.centro} onChange={handleChange} className="custom-control">
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

            <div className="Label-header">Datos de identificación</div>
            <div className="Registro-form">


              <div className="form-row" >
                {/* SELECT TIPO DE DOCUMENTO */}
                <div className="field">
                  <label>Tipo de documento</label>
                  <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange} className="custom-control">
                    <option value="">Selecciona tipo de documento</option>
                    <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                    <option value="Cédula de extranjería">Cédula de extranjería</option>
                  </select>
                </div>

                {/* INPUT NUMERO DE IDENTIDAD */}
                <div className="field">
                  <label>Número de identidad</label>
                  <input
                    type="text"
                    name="numeroIdentidad"
                    value={formData.numeroIdentidad}
                    onChange={handleChange}
                    className="custom-control"
                    placeholder="12238738847"
                  />
                </div>
                {/* SELECT CIUDAD DE EXPEDICIÓN */}
                <div className="field">
                  <label>Ciudad de expedición</label>
                  <select name="ciudadExpedicion" value={formData.ciudadExpedicion} onChange={handleChange} className="custom-control">
                    <option value="">Selecciona ciudad de expedición</option>
                    <option value="Bogotá">Bogotá</option>
                    <option value="Medellín">Medellín</option>
                    <option value="Cali">Cali</option>
                  </select>
                </div>
                {/* SELECT TIPO DE PERSONA */}
                <div className="field">
                  <label>Tipo de persona</label>
                  <select name="tipoPersona" value={formData.tipoPersona} onChange={handleChange} className="custom-control">
                    <option value="">Selecciona tipo de persona</option>
                    <option value="Natural">Natural</option>
                    <option value="Jurídica">Jurídica</option>
                  </select>
                </div>
                {/* INPUT PRIMER NOMBRE */}
                <div className="field">
                  <label>Primer nombre</label>
                  <input
                    type="text"
                    name="primerNombre"
                    value={formData.primerNombre}
                    onChange={handleChange}
                    className="custom-control"
                    placeholder="Primer nombre"
                  />
                </div>
                {/* INPUT SEGUNDO NOMBRE */}
                <div className="field">
                  <label>Segundo nombre (opcional)</label>
                  <input
                    type="text"
                    name="segundoNombre"
                    value={formData.segundoNombre}
                    onChange={handleChange}
                    className="custom-control"
                    placeholder="Segundo nombre"
                  />
                </div>
                {/* INPUT PRIMER APELLIDO */}
                <div className="field">
                  <label>Primer apellido</label>
                  <input
                    type="text"
                    name="primerApellido"
                    value={formData.primerApellido}
                    onChange={handleChange}
                    className="custom-control"
                    placeholder="Primer apellido"
                  />
                </div>
                {/* INPUT SEGUNDO APELLIDO */}
                <div className="field">
                  <label>Segundo apellido (opcional)</label>
                  <input
                    type="text"
                    name="segundoApellido"
                    value={formData.segundoApellido}
                    onChange={handleChange}
                    className="custom-control"
                    placeholder="Segundo apellido"
                  />
                </div>
                {/* SELECT PAÍS DE ORIGEN */}
                <div className="field">
                  <label>País de origen</label>
                  <select name="paisOrigen" value={formData.paisOrigen} onChange={handleChange} className="custom-control">
                    <option value="">Selecciona país de origen</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Perú">Perú</option>
                  </select>
                </div>
                {/* INPUT FECHA DE NACIMIENTO */}
                <div className="field">
                  <label>Fecha de nacimiento</label>
                  <input
                    type="date"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                    className="custom-control"
                  />
                </div>
                {/* SELECT GENERO */}
                <div className="field">
                  <label>Genero</label>
                  <select name="genero" value={formData.genero} onChange={handleChange} className="custom-control">
                    <option value="">Selecciona genero</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                </div>

              </div>
            </div>

            <div className="Label-header">Información de contacto</div>
            <div className="Registro-form">
              <div className="form-row" >
                {/* SELECT PAÍS DE DOMICILIO*/}
                <div className="field">
                  <label>País de domicilio</label>
                  <select name="paisDomicilio" value={formData.paisDomicilio} onChange={handleChange} className="custom-control">
                    <option value="">Selecciona país de domicilio</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Perú">Perú</option>
                  </select>
                </div>
                {/* SELECT DEPARTAMENTO/ESTADO */}
                <div className="field">
                  <label>Departamento/Estado</label>
                  <select name="departamentoEstado" value={formData.departamentoEstado} onChange={handleChange} className="custom-control">
                    <option value="">Selecciona departamento/estado</option>
                    <option value="Antioquia">Antioquia</option>
                    <option value="Cundinamarca">Cundinamarca</option>
                    <option value="Valle del Cauca">Valle del Cauca</option>
                  </select>
                </div>
                {/* SELECT CIUDAD DE DOMICILIO*/}
                <div className="field">
                  <label>Ciudad de domicilio</label>
                  <select name="ciudadDomicilio" value={formData.ciudadDomicilio} onChange={handleChange} className="custom-control">
                    <option value="">Selecciona ciudad de domicilio</option>
                    <option value="Medellín">Medellín</option>
                    <option value="Bogotá">Bogotá</option>
                    <option value="Cali">Cali</option>
                  </select>
                </div>


                {/* FILA COMPACTA PARA DIRECCIÓN COMPLETA */}
                <div className="address-compact">
                  {/* SELECT TIPO DE VÍA */}
                  <div className="field-compact">
                    <label>Tipo de vía</label>
                    <select name="tipoVia" value={formData.tipoVia} onChange={handleChange} className="custom-control">
                      <option value="">Selecciona tipo de vía</option>
                      <option value="Calle">Calle</option>
                      <option value="Carrera">Carrera</option>
                      <option value="Autopista">Autopista</option>
                      <option value="Avenida">Avenida</option>
                      <option value="Diagonal">Diagonal</option>
                      <option value="Transversal">Transversal</option>
                    </select>
                  </div>
                  {/* INPUT NÚMERO DE VÍA */}
                  <div className="field-compact">
                    <label>N de vía</label>
                    <input
                      type="text"
                      name="numeroVia"
                      value={formData.numeroVia}
                      onChange={handleChange}
                      className="custom-control"
                      placeholder="123"
                    />
                  </div>
                  {/* INPUT LETRA DE VÍA */}
                  <div className="field-compact">
                    <label>Letra (opc)</label>
                    <input
                      type="text"
                      name="letraVia"
                      value={formData.letraVia}
                      onChange={handleChange}
                      className="custom-control"
                      placeholder="A"
                    />
                  </div>
                  {/* INPUT COMPLEMENTO */}
                  <div className="field-compact">
                    <label>Complemento</label>
                    <input
                      type="text"
                      name="complemento"
                      value={formData.complemento}
                      onChange={handleChange}
                      className="custom-control"
                      placeholder="#45-67"
                    />
                  </div>
                  {/* INPUT BARRIO */}
                  <div className="field-compact">
                    <label>Barrio</label>
                    <input
                      type="text"
                      name="barrio"
                      value={formData.barrio}
                      onChange={handleChange}
                      className="custom-control"
                      placeholder="Centro"
                    />
                  </div>
                  {/* INPUT CÓDIGO POSTAL */}
                  <div className="field-compact">
                    <label>Código postal</label>
                    <input
                      type="text"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleChange}
                      className="custom-control"
                      placeholder="050001"
                    />
                  </div>

                </div>

                {/* SELECT ESTRATO SOCIOECONOMICO */}
                <div className="field">
                  <label>Estrato socioeconómico</label>
                  <select name="estratoSocioeconomico" value={formData.estratoSocioeconomico} onChange={handleChange} className="custom-control">
                    <option value="">Selecciona estrato socioeconómico</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>

                {/* INPUT TELEFONO 1*/}
                <div className="field">
                  <label>Telefono 1</label>
                  <input
                    type="text"
                    name="telefono1"
                    value={formData.telefono1}
                    onChange={handleChange}
                    className="custom-control"
                    placeholder="123456789"
                  />
                </div>
                {/* INPUT TELEFONO 2*/}
                <div className="field">
                  <label>Telefono 2 (opcional)</label>
                  <input
                    type="text"
                    name="telefono2"
                    value={formData.telefono2}
                    onChange={handleChange}
                    className="custom-control"
                    placeholder="123456789"
                  />
                </div>

                {/* INPUT FAX*/}
                <div className="field">
                  <label>Fax (opcional)</label>
                  <input
                    type="text"
                    name="fax"
                    value={formData.fax}
                    onChange={handleChange}
                    className="custom-control"
                    placeholder="123456789"
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