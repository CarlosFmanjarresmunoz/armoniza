import { Routes, Route } from 'react-router-dom';
import InicioSesion from '../inicioSesion';
import Registro from '../pages/Registros/Registro';
function Router() {
  return (
    <Routes>
      <Route path="/" element={<InicioSesion />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
}

export default Router;