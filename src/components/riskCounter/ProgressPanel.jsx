// Imporar React
import React from "react";

// Componente ProgressPanel para mostrar el progreso de respuestas
const ProgressPanel = ({ totalPreguntas, respondidas }) => {
  const porcentaje = totalPreguntas > 0 ? Math.round((respondidas / totalPreguntas) * 100) : 0;

  return (
    <div className="progress-panel">
      <p>
        Progreso: {respondidas} de {totalPreguntas} preguntas respondidas ({porcentaje}%)
      </p>
      <progress value={respondidas} max={totalPreguntas}></progress>
    </div>
  );
};

export default ProgressPanel;