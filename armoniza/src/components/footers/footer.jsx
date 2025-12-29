

import React, { useState, useEffect } from 'react';
import './footer.css';
import logo from '../../assets/logo-armoniza.png';

function Footer() {
    const [ip, setIp] = useState('Cargando...');
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
       
        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => setIp(data.ip))
            .catch(() => setIp('No disponible'));

       
        const updateDateTime = () => {
            const now = new Date();
            setCurrentDate(now.toLocaleDateString('es-ES')); 
            setCurrentTime(now.toLocaleTimeString('es-ES')); 
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="form-footer">
          <div className="footer-left">
            <span>SwiftBots © 2025</span>
            <img src={logo} alt="Logo" className='logo-armoniza'/>
          </div>
          <div className="footer-right">
            <span>Su dirección ip: {ip}</span>
            <span>Fecha: {currentDate}</span>
            <span>Hora: {currentTime}</span>
          </div>
        </footer>
    );
}

export default Footer;