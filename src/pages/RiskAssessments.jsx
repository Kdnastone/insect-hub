// Importar dependencias y componentes
import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { questions } from '../data/questions.js';
import useRiskCalculator from '../components/riskCounter/useRiskCalculator.jsx';
import ActionButtons from '../components/riskCounter/ActionButtons.jsx';
import EvaluationForm from '../components/riskCounter/EvaluationForm.jsx';
import ResultsSection from '../components/riskCounter/ResultsSection.jsx';

// Componente principal de la página de Evaluaciones de Riesgos
const RiskAssessments = () => {
  const resultadosRef = useRef(null);
  // Usar el hook personalizado para manejar la lógica de la evaluación de riesgos
  const {
    evaluaciones,
    resultados,
    mostrarResultados,
    actualizarEvaluacion,
    calcularResultados,
    imprimir,
    exportarJSON,
    exportarCSV,
    exportarXLSX
  } = useRiskCalculator(questions);

  // Función para manejar el cálculo y el desplazamiento suave a la sección de resultados
  const handleCalcular = () => {
    calcularResultados();
    setTimeout(() => {
      if (resultadosRef.current) {
        resultadosRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  // Renderizar la interfaz de usuario
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-screen-2xl mx-auto px-2 py-2">
          <h1 className="text-4xl font-bold text-green-800 text-center">
            Evaluación de Riesgos de Especies
          </h1>
          <div className="bg-green-50shadow-sm p-1 my-1 w-full">
          <p className="text-green-800 text-xs mt-1 text-justify">
            Complete el formulario para evaluar el riesgo de invasión de especies.
            Este formulario está basado en la metodología I3N (Red Interamericana de
            Información sobre Biodiversidad), PRA de EPPO (Análisis de Riesgo de Plagas)
            y ERBIC (Evaluación de Riesgos Ambientales de Introducciones de Control Biológico en Europa).
          </p>
          </div>        
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-1 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          {/* Panel izquierdo */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow-lg">
              <EvaluationForm
                questions={questions}
                evaluaciones={evaluaciones}
                actualizarEvaluacion={actualizarEvaluacion}
                resultados={resultados}
                mostrarResultados={mostrarResultados}
              />
            </div>
          </div>

          {/* Panel derecho */}
          <div className="lg:col-span-1">
            <div className="sticky top-2 space-y-3">
              {/* Acciones */}
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
                  exportarCSV={exportarCSV}
                  exportarXLSX={exportarXLSX}
                />
              </div>

              {/* Progreso */}
              <div className="bg-white rounded-lg shadow-lg p-3">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/* Icono de progreso */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Progreso
                </h3>
                <div className="space-y-2">
                  {(() => {
                    // Usa el array de preguntas para el total real
                    const total = questions.length;
                    const respondidas = questions.filter(p => {
                      const key = `pregunta_${p.id}`;
                      const valoracion = evaluaciones[key]?.valoracion;
                      return valoracion !== '' && valoracion !== undefined;
                    }).length;
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
                <div className="mt-3 text-center">
                  <Link
                    to="/metodologia"
                    className="text-xs text-blue-600 underline hover:text-blue-800"
                  >
                    ¿Cómo se calcula el riesgo? Ver metodología
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div ref={resultadosRef} className="mt-4">
          <ResultsSection
            resultados={resultados}
            mostrarResultados={mostrarResultados}
          />
        </div>
      </div>

      {/* Estilos impresión */}
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