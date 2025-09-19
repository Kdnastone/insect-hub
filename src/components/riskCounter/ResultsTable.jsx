// Importar React
import React from 'react';

// Componente para mostrar la tabla de resultados
const ResultsTable = ({ resultados, mostrarResultados }) => {
  if (!mostrarResultados || !resultados) return null;

  // Estructura de la tabla de resultados
  return (
    <div className="mb-8">
      <h2 className="text-2xl bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg"> 
        Resultados de la Evaluación</h2>
      
      {/* Resumen general */}
      <div className="bg-gray-50 p-4 rounded mb-4">
        <h3 className="text-xl font-bold mb-2">Resumen General</h3>
        <p><strong>Puntos obtenidos:</strong> {resultados.puntosObtenidos} de {resultados.totalPreguntas * 3} posibles</p>
        <p><strong>Porcentaje:</strong> {resultados.porcentaje}%</p>
        <p><strong>Nivel de Riesgo:</strong> <span className={`font-bold ${
          resultados.nivelRiesgo === 'Alto' ? 'text-red-600' : 
          resultados.nivelRiesgo === 'Moderado' ? 'text-yellow-600' : 'text-green-500'
        }`}>{resultados.nivelRiesgo}</span></p>
      </div>

      {/* Resultados por categoría */}
      <h3 className="text-xl font-bold mb-2">Resultados por Categoría</h3>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left">Categoría</th>
            <th className="border border-gray-300 p-3 text-center">Puntos</th>
            <th className="border border-gray-300 p-3 text-center">Porcentaje</th>
            <th className="border border-gray-300 p-3 text-center">Nivel de Riesgo</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(resultados.resultadosPorBloque).map(([categoria, datos]) => {
            let nivelCat = 'Bajo';
            if (datos.porcentaje > 60) nivelCat = 'Alto';
            else if (datos.porcentaje > 30) nivelCat = 'Moderado';

            {/* Mapeo de evaluaciones */}
            return (
              <tr key={categoria}>
                <td className="border border-gray-300 p-3">{categoria}</td>
                <td className="border border-gray-300 p-3 text-center">{datos.puntos} / {datos.preguntas * 3}</td>
                <td className="border border-gray-300 p-3 text-center">{datos.porcentaje}%</td>
                <td className={`border border-gray-300 p-3 text-center font-bold ${
                  nivelCat === 'Alto' ? 'text-red-600' : 
                  nivelCat === 'Moderado' ? 'text-yellow-600' : 'text-green-600'
                }`}>{nivelCat}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Tabla de equivalencias */}
      <div className="equivalencias">
        <h3 className="text-xl font-bold mb-2">Tabla de Equivalencias</h3>
        <table className="border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3">Porcentaje (%)</th>
              <th className="border border-gray-300 p-3">Nivel de Riesgo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3">0%-30%</td>
              <td className="border border-gray-300 p-3 text-green-600 font-bold">Bajo</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">31%-60%</td>
              <td className="border border-gray-300 p-3 text-yellow-600 font-bold">Moderado</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">61%-100%</td>
              <td className="border border-gray-300 p-3 text-red-600 font-bold">Alto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsTable;