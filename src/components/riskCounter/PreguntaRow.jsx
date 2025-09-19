// Importar React
import React from "react";

// Componente para renderizar una fila de pregunta
const PreguntaRow = ({ pregunta, evaluacion = {}, actualizarEvaluacion }) => {
  const handleChange = (campo, valor) => {
    actualizarEvaluacion(pregunta.id, campo, valor);
  };

  // Renderizar la fila de la pregunta
  return (
    <tr>
      <td>{pregunta.question}</td>
      <td>
        <select
          value={evaluacion.valoracion || ""}
          onChange={e => handleChange("valoracion", e.target.value)}
        >
          {/* Opciones del select */}
          <option value="">Seleccione</option>
          {pregunta.options.map(opcion => (
            <option key={opcion} value={opcion}>{opcion}</option>
          ))}
        </select>
      </td>
      <td>
        <input
          type="text"
          value={evaluacion.informacion || ""}
          onChange={e => handleChange("informacion", e.target.value)}
          placeholder="Información adicional"
        />
      </td>
      <td>
        <input
          type="text"
          value={evaluacion.bibliografia || ""}
          onChange={e => handleChange("bibliografia", e.target.value)}
          placeholder="Bibliografía"
        />
      </td>
    </tr>
  );
};

export default PreguntaRow;