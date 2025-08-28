//Importar React y otros hooks necesarios
import React, { useRef } from 'react';
import questions from '../data/questions.js';
import { useRiskCalculator } from '../components/riskCounter/useRiskCalculator.jsx';
import ActionButtons from '../components/riskCounter/ActionButtons.jsx';
import EvaluationForm from '../components/riskCounter/EvaluationForm.jsx';
import ResultsSection from '../components/riskCounter/ResultsSection.jsx';

const RiskAssessments = () => {
  const resultadosRef = useRef(null);
  // Traer constantes
  const {
    evaluaciones,
    resultados,
    mostrarResultados,
    actualizarEvaluacion,
    calcularResultados,
    imprimir,
    exportarJSON
  } = useRiskCalculator(questions);

  // Función para calcular y hacer scroll a resultados
  const handleCalcular = () => {
    calcularResultados();
    // Hacer scroll hacia la sección de resultados después de un pequeño delay
    setTimeout(() => {
      if (resultadosRef.current) {
        resultadosRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header compacto */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-screen-2xl mx-auto px-2 py-2">
          <h1 className="text-xl font-bold text-gray-900 text-center">
            Evaluación de Riesgos de Especies
          </h1>
          <p className="text-gray-600 text-center text-xs mt-1">
            Complete el formulario para evaluar el riesgo de invasión de especies.
            Este formulario está basado en la metodología I3N empleada por el Instituto Humboldt.
          </p>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-1 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          
          {/* Panel izquierdo - Formulario (más espacio) */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow-lg">
              <EvaluationForm 
                questions={questions}
                evaluaciones={evaluaciones}
                actualizarEvaluacion={actualizarEvaluacion}
              />
            </div>
          </div>

          {/* Panel derecho - Más compacto */}
          <div className="lg:col-span-1">
            <div className="sticky top-2 space-y-3">
              
              {/* Panel de Acciones */}
              <div className="bg-white rounded-lg shadow-lg p-3">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Acciones
                </h3>
                <ActionButtons 
                  calcularResultados={handleCalcular}
                  imprimir={imprimir}
                  exportarJSON={exportarJSON}
                />
              </div>

              {/* Panel de Progreso */}
              <div className="bg-white rounded-lg shadow-lg p-3">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Progreso
                </h3>
                <div className="space-y-2">
                  {(() => {
                    const respondidas = Object.values(evaluaciones).filter(e => 
                      e.valoracion !== '' && e.valoracion !== undefined
                    ).length;
                    const total = Object.keys(evaluaciones).length;
                    const porcentaje = total > 0 ? (respondidas / total) * 100 : 0;
                    
                    return (
                      <>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Evaluadas</span>
                          <span className="font-medium">{respondidas}/{total}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-blue-600 h-1.5 rounded-full transition-all duration-300" 
                            style={{ width: `${porcentaje}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 text-center">
                          {porcentaje.toFixed(0)}%
                        </p>
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* Panel de Estadísticas más compacto */}
              <div className="bg-white rounded-lg shadow-lg p-3">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Stats
                </h3>
                {/* Estadísticas generales */}
                <div className="space-y-1">
                  {(() => {
                    const evaluacionesArray = Object.values(evaluaciones);
                    const sinEvaluar = evaluacionesArray.filter(e => e.valoracion === '' || e.valoracion === undefined).length;
                    const noAplica = evaluacionesArray.filter(e => e.valoracion === '0').length;
                    const riesgoBajo = evaluacionesArray.filter(e => e.valoracion === '1').length;
                    const riesgoModerado = evaluacionesArray.filter(e => e.valoracion === '2').length;
                    const riesgoAlto = evaluacionesArray.filter(e => e.valoracion === '3').length;
                    
                    return (
                      <>
                        <div className="flex justify-between text-xs">
                          <span className="text-red-500 flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1"></div>
                            Sin evaluar
                          </span>
                          <span className="font-medium">{sinEvaluar}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500 flex items-center">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-1"></div>
                            No aplica
                          </span>
                          <span className="font-medium">{noAplica}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-green-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div>
                            Bajo
                          </span>
                          <span className="font-medium">{riesgoBajo}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-yellow-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-1"></div>
                            Moderado
                          </span>
                          <span className="font-medium">{riesgoModerado}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-red-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1"></div>
                            Alto
                          </span>
                          <span className="font-medium">{riesgoAlto}</span>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Sección de Resultados */}
        <div ref={resultadosRef} className="mt-4">
          <ResultsSection 
            resultados={resultados}
            mostrarResultados={mostrarResultados}
          />
        </div>
      </div>

      {/* Estilos para impresión */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white !important; }
        }
        .print-only { display: none; }
      `}</style>
    </div>
  );
};

export default RiskAssessments;