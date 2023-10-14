import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        return prevProgress;
      });
    }, 20); // Ajusta la frecuencia de actualización según sea necesario

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <svg className="hexagon" viewBox="0 0 100 115.47">
        <polygon
        className="polygon"
          points="50,5 95,25 95,75 50,95 5,75 5,25"
          fill="none"
          stroke="#1a1b38" /* Color del borde del hexágono (azul) */
          strokeWidth="3"
        />
        <polygon
        className="progress-line"
          points="50,5 95,25 95,75 50,95 5,75 5,25"
          fill="none"
          stroke="#e62448" /* Color de la línea de progreso (rojo) */
          strokeWidth="3"
          strokeDasharray={`${progress * 3}, 600`}
        />
        <text x="50" y="60" textAnchor="middle" fill="white" fontSize="24">
          {progress}%
        </text>
      </svg>
      <div className="loading-text">
        TRIXART {/* Coloca el texto "Cargando..." en chino */}
      </div>
    </div>
  );
};

export default Loading;
