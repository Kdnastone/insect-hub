// Importar React
import React from 'react';

// Componente de la Tabla de Evaluación
const EvaluationTable = ({ questions, evaluaciones, actualizarEvaluacion }) => {
  const getPuntajeTexto = (valor) => {
    switch(parseInt(valor)) {
      case 0: return 'No aplica / sin información disponible';
      case 1: return 'Riesgo bajo';
      case 2: return 'Riesgo moderado';
      case 3: return 'Riesgo alto';
      default: return '';
    }
  };

  // Agrupar preguntas por categoría usando el array questions
  const preguntasPorCategoria = questions.reduce((acc, pregunta) => {
    if (!acc[pregunta.category]) {
      acc[pregunta.category] = [];
    }
    acc[pregunta.category].push(pregunta);
    return acc;
  }, {});

  // Renderizar la tabla
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Tabla de Evaluación</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left">Categoría / Pregunta</th>
            <th className="border border-gray-300 p-3 text-center">Valoración</th>
            <th className="border border-gray-300 p-3 text-left no-print">Información de Respaldo</th>
            <th className="border border-gray-300 p-3 text-left no-print">Bibliografía</th>
          </tr>
        </thead>
        <tbody>
          
          {/* Renderizar preguntas agrupadas por categoría */}
          {Object.entries(preguntasPorCategoria).map(([categoria, preguntas]) => (
            <React.Fragment key={categoria}>
              <tr className="categoria bg-blue-50">
                <td colSpan="4" className="border border-gray-300 p-3 font-bold">
                  {categoria}
                </td>
              </tr>
              {preguntas.map((pregunta) => {

                // Usar el mismo formato de key que en useRiskCalculator
                const key = `pregunta_${pregunta.id}`;
                return (
                  <tr key={key}>
                    <td className="border border-gray-300 p-3">{pregunta.question}</td>
                    <td className="border border-gray-300 p-3 text-center">
                      <select 
                        value={evaluaciones[key]?.valoracion || 0}
                        onChange={(e) => actualizarEvaluacion(key, 'valoracion', e.target.value)}
                        className="w-full p-2 border rounded no-print"
                      >
                        <option value={0}>0 - No aplica / sin información</option>
                        <option value={1}>1 - Riesgo bajo</option>
                        <option value={2}>2 - Riesgo moderado</option>
                        <option value={3}>3 - Riesgo alto</option>
                      </select>
                      <span className="print-only">{evaluaciones[key]?.valoracion} - {getPuntajeTexto(evaluaciones[key]?.valoracion)}</span>
                    </td>
                    <td className="border border-gray-300 p-3 no-print">
                      <textarea
                        value={evaluaciones[key]?.informacion || ''}
                        onChange={(e) => actualizarEvaluacion(key, 'informacion', e.target.value)}
                        className="w-full p-2 border rounded"
                        rows="2"
                        placeholder="Información de respaldo..."
                      />
                    </td>
                    <td className="border border-gray-300 p-3 no-print">
                      <textarea
                        value={evaluaciones[key]?.bibliografia || ''}
                        onChange={(e) => actualizarEvaluacion(key, 'bibliografia', e.target.value)}
                        className="w-full p-2 border rounded"
                        rows="2"
                        placeholder="Referencias bibliográficas..."
                      />
                    </td>
                  </tr>
                );
              })}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EvaluationTable;