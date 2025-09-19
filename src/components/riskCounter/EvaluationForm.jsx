// Importar React y otros hooks necesarios
import React, { useState, useRef } from 'react';
import ProgressPanel from './ProgressPanel';

// Componente principal de la forma de evaluación
const EvaluationForm = ({ 
  questions, 
  evaluaciones, 
  actualizarEvaluacion, 
  resultados, 
  mostrarResultados 
}) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const tableRef = useRef(null);

  // Agrupar preguntas por categoría
  const preguntasPorCategoria = questions.reduce((acc, pregunta) => {
    if (!acc[pregunta.category]) {
      acc[pregunta.category] = [];
    }
    acc[pregunta.category].push(pregunta);
    return acc;
  }, {});

  // Obtener categorías
  const categorias = Object.keys(preguntasPorCategoria);

  // Navegar a una categoría específica
  const navegarACategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
    const elemento = document.getElementById(`categoria-${categoria}`);
    if (elemento && tableRef.current) {
      const container = tableRef.current;
      const elementoTop = elemento.offsetTop - container.offsetTop - 160;
      container.scrollTo({
        top: elementoTop,
        behavior: 'smooth'
      });
    }
  };

  // Filtrar categorías si hay una seleccionada
  const categoriasFiltradas = categoriaSeleccionada 
    ? { [categoriaSeleccionada]: preguntasPorCategoria[categoriaSeleccionada] }
    : preguntasPorCategoria;

  // Función para obtener el color del círculo debajo de la opción según bloque y valor seleccionado
  const getColor = (bloque, valor) => {
    if (["Bloque 4", "Bloque 5"].includes(bloque)) {
      if (valor === "No" || valor === "Alto") return "bg-red-500";
      if (valor === "Sí" || valor === "Bajo") return "bg-green-500";
      if (valor === "Medio") return "bg-yellow-500";
      if (valor === "NS") return "bg-orange-500";
      if (valor === "NA") return "bg-gray-400";
      return "bg-gray-300";
    } else if (bloque === "Bloque 6") {
      if (valor === "No" || valor === "Bajo") return "bg-red-500";
      if (valor === "Sí" || valor === "Alto") return "bg-green-500";
      if (valor === "Medio") return "bg-yellow-500";
      if (valor === "NS") return "bg-orange-500";
      if (valor === "NA") return "bg-gray-400";
      return "bg-gray-300";
    } else {
      if (valor === "Sí" || valor === "Alto") return "bg-red-500";
      if (valor === "No" || valor === "Bajo") return "bg-green-500";
      if (valor === "Medio") return "bg-yellow-500";
      if (valor === "NS") return "bg-orange-500";
      if (valor === "NA") return "bg-gray-400";
      return "bg-gray-300";
    }
  };

  // Progreso global de la evaluación
  const respondidasGlobal = questions.filter(p => {
    const key = `pregunta_${p.id}`;
    const valoracion = evaluaciones[key]?.valoracion;
    return valoracion !== '' && valoracion !== undefined;
  }).length;
  const totalGlobal = questions.length;

  return (
    <div className="relative w-full">
      {/* Progreso global */}
      <ProgressPanel respondidas={respondidasGlobal} totalPreguntas={totalGlobal} />

      {/* Seleccionar la Navegación por Categorías */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200 p-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h4 className="font-semibold text-gray-900 flex items-center">
            <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Navegación por Categorías
          </h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategoriaSeleccionada('')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                categoriaSeleccionada === '' 
                  ? 'bg-blue-700 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todas
            </button>
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => navegarACategoria(categoria)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  categoriaSeleccionada === categoria 
                    ? 'bg-green-500 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {categoria}
                <span className={`ml-1.5 bg-white bg-opacity-30 px-1.5 py-0.5 rounded-full text-xs ${
                  categoriaSeleccionada === categoria ? 'text-green-900 font-bold' : 'text-gray-700'
                }`}>
                  {preguntasPorCategoria[categoria].length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenedor de la tabla con scroll */}
      <div 
        ref={tableRef}
        className="overflow-auto max-h-[80vh]"
        style={{ height: 'calc(85vh - 120px)' }}
      >
        <table className="w-full border-collapse bg-white">
          <thead className="sticky top-0 z-10">
            <tr className="bg-gradient-to-r from-green-800 to-green-600 text-white">
              <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-sm">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pregunta
                </div>
              </th>
              <th className="border border-gray-200 px-3 py-2 text-center font-semibold min-w-[120px]">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Valoración
                </div>
              </th>
              <th className="border border-gray-300 p-4 text-left font-semibold min-w-[200px] no-print">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Información de Respaldo
                </div>
              </th>
              <th className="border border-gray-300 p-4 text-left font-semibold min-w-[200px] no-print">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Referencias Bibliográficas
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(categoriasFiltradas).map(([categoria, preguntas]) => (
              <React.Fragment key={categoria}>
                {/* Fila de categoría */}
                <tr 
                  id={`categoria-${categoria}`}
                  className="bg-gradient-to-r from-blue-50 to-blue-100 border-t-4 border-blue-400"
                >
                  <td colSpan="4" className="border border-gray-300 p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                        <h3 className="text-lg font-bold text-gray-800">
                          {preguntas[0]?.component ? `${preguntas[0].component} - ` : ""}
                          {categoria}
                          {preguntas[0]?.subcategory ? `: ${preguntas[0].subcategory}` : ""}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                          {preguntas.length} pregunta{preguntas.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>

                {/* Filas de preguntas */}
                {preguntas.map((pregunta, index) => {
                  const key = `pregunta_${pregunta.id}`;
                  const valorActual = evaluaciones[key]?.valoracion || '';
                  return (
                    <tr key={key} className={`hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      {/* Columna Pregunta */}
                      <td className="border border-gray-300 px-2 py-1">
                        <div className="flex items-start space-x-0.5">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap">
                            {pregunta.id}
                          </span>
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium leading-tight">
                              {pregunta.question}
                            </p>
                          </div>
                        </div>
                      </td>
                      {/* Columna Valoración */}
                      <td className="border border-gray-300 px-2 py-1 text-center">
                        <div className="space-y-0.5">
                          <select 
                            value={valorActual}
                            onChange={(e) => actualizarEvaluacion(key, 'valoracion', e.target.value)}
                            className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 no-print"
                          >
                            <option value="" className="text-gray-500">
                              Seleccione una opción
                            </option>
                            {pregunta.options.map((opcion, idx) => (
                              <option key={idx} value={opcion}>{opcion}</option>
                            ))}
                          </select>
                          {/* Indicador visual de la valoración */}
                          <div className="text-xs font-medium">
                            {valorActual !== '' && (
                              <div className="flex items-center justify-center space-x-1">
                                <div className={`w-2 h-2 rounded-full ${getColor(pregunta.category, valorActual)}`}></div>
                              </div>
                            )}
                            {valorActual === '' && (
                              <div className="text-red-400 text-xs font-medium">
                                ⚠️ Sin evaluar
                              </div>
                            )}
                            {valorActual === '0' && (
                              <div className="text-gray-500 text-xs font-medium">
                                ℹ️ No aplica
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      {/* Columna Información de Respaldo */}
                      <td className="border border-gray-300 px-2 py-1 no-print">
                        <textarea
                          value={evaluaciones[key]?.informacion || ''}
                          onChange={(e) => actualizarEvaluacion(key, 'informacion', e.target.value)}
                          className="w-full px-2 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm resize-none"
                          rows="2"
                          placeholder="Información que respalda la valoración..."
                        />
                      </td>
                      {/* Columna Referencias Bibliográficas */}
                      <td className="border border-gray-300 px-2 py-1 no-print">
                        <textarea
                          value={evaluaciones[key]?.bibliografia || ''}
                          onChange={(e) => actualizarEvaluacion(key, 'bibliografia', e.target.value)}
                          className="w-full px-2 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm resize-none"
                          rows="2"
                          placeholder="Referencias bibliográficas"
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
    </div>
  );
};

export default EvaluationForm;