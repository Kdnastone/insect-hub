import React from 'react';

// Componente para mostrar la sección de resultados
const ResultsSection = ({ resultados, mostrarResultados }) => {
  if (!mostrarResultados || !resultados) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-gray-400">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Resultados no disponibles</h3>
          <p className="text-gray-500">Complete el formulario y haga clic en "Calcular" para ver los resultados</p>
        </div>
      </div>
    );
  }

  // Función para obtener la clase del badge de riesgo
  const getRiskBadge = (nivel) => {
    const configs = {
      'Alto': 'bg-red-100 text-red-800 border-red-200',
      'Moderado': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Bajo': 'bg-green-100 text-green-800 border-green-200'
    };
    return configs[nivel] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  // Función para obtener el icono de riesgo
  const getRiskIcon = (nivel) => {
    if (nivel === 'Alto') {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      );
    } else if (nivel === 'Moderado') {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      );
    } else {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      );
    }
  };

  // Renderizar resultados
  return (
    <div className="space-y-8">
      
      {/* Contenedor principal con ID para impresión */}
      <div id="contenido-imprimible">
        
        {/* Header de Resultados */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-800 to-green-600 text-white p-6">
            <h2 className="text-2xl font-bold flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Resultados de la Evaluación
            </h2>
            <p className="text-green-100 mt-2">Análisis completo del riesgo de invasión</p>
          </div>

          {/* Resumen Principal */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* Puntuación */}
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600">{resultados.puntosObtenidos}</div>
                  <div className="text-sm text-gray-600">de {resultados.totalPreguntas * 3} puntos</div>
                  <div className="text-xs text-gray-500 mt-1">Puntuación total</div>
                </div>
              </div>

              {/* Porcentaje */}
              <div className="text-center">
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-600">{resultados.porcentaje}%</div>
                  <div className="text-sm text-gray-600">Porcentaje de riesgo</div>
                  <div className="text-xs text-gray-500 mt-1">Evaluación general</div>
                </div>
              </div>

              {/* Nivel de Riesgo */}
              <div className="text-center col-span-2">
                <div className={`rounded-lg p-4 border-2 ${getRiskBadge(resultados.nivelRiesgo)}`}>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {getRiskIcon(resultados.nivelRiesgo)}
                    <span className="text-2xl font-bold">Riesgo {resultados.nivelRiesgo}</span>
                  </div>
                  <div className="text-sm opacity-75">Nivel de riesgo determinado</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Resultados por Categoría */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Análisis por Categoría
            </h3>
          </div>
          
          {/* Tabla de Resultados por Categoría */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Puntos</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Porcentaje</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nivel de Riesgo</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(resultados.resultadosPorCategoria).map(([categoria, datos]) => {
                  let nivelCat = 'Bajo';
                  if (parseFloat(datos.porcentaje) > 60) nivelCat = 'Alto';
                  else if (parseFloat(datos.porcentaje) > 30) nivelCat = 'Moderado';

                  {/* Mapeo de evaluaciones */}
                  return (
                    <tr key={categoria} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{categoria}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-sm text-gray-900">{datos.puntos}</div>
                        <div className="text-xs text-gray-500">de {datos.preguntas * 3}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${Math.min(parseFloat(datos.porcentaje), 100)}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{datos.porcentaje}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRiskBadge(nivelCat)}`}>
                          {getRiskIcon(nivelCat)}
                          <span className="ml-1">{nivelCat}</span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabla de Equivalencias */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center">
              <svg className="w-6 h-6 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tabla de Equivalencias
            </h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  {getRiskIcon('Bajo')}
                  <span className="ml-2 font-semibold text-green-600">Riesgo Bajo</span>
                </div>
                <div className="text-2xl font-bold text-green-600">0% - 30%</div>
                <div className="text-sm text-green-600 mt-1">Bajo potencial invasivo</div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  {getRiskIcon('Moderado')}
                  <span className="ml-2 font-semibold text-yellow-800">Riesgo Moderado</span>
                </div>
                <div className="text-2xl font-bold text-yellow-600">31% - 60%</div>
                <div className="text-sm text-yellow-700 mt-1">Potencial invasivo medio</div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  {getRiskIcon('Alto')}
                  <span className="ml-2 font-semibold text-red-800">Riesgo Alto</span>
                </div>
                <div className="text-2xl font-bold text-red-600">61% - 100%</div>
                <div className="text-sm text-red-700 mt-1">Alto potencial invasivo</div>
              </div>

            </div>
          </div>
        </div>

      </div> {/* Fin del contenido-imprimible */}
    </div>
  );
};

export default ResultsSection;