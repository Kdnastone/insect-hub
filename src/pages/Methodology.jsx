// Importar React y otros módulos necesarios
import React from "react";
import { Link } from "react-router-dom";

// Componente Methodology
const Methodology = () => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <div className="mb-4">
      <Link
        to="/riesgos"
        className="inline-flex items-center px-3 py-1.5 bg-green-50 text-green-800 rounded hover:bg-green-50 transition-colors text-sm font-medium shadow"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Volver a la evaluación
      </Link>
    </div>
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h1 className="text-3xl font-extrabold text-green-800 mb-4 text-center">
        Metodología de Evaluación de Riesgo por Escenarios
      </h1>
      <p className="mb-4 text-gray-700 text-justify">
        Siguiendo las recomendaciones de la <span className="font-semibold">ANLA</span>, 
        se compararon tres metodologías para la evaluación de riesgo de especies de insectos 
        en áreas no reportadas: <span className="font-semibold">I3N</span> (Red Interamericana de Información sobre Biodiversidad), 
        <span className="font-semibold">PRA de EPPO</span> (Análisis de Riesgo de Plagas) y <span className="font-semibold">ERBIC</span>
        (Evaluación de Riesgos Ambientales de Introducciones de Control Biológico en Europa).
        La selección se basó en criterios de aplicabilidad regional, trazabilidad técnica y compatibilidad.
      </p>
      <p className="mb-6 text-gray-700">
        Del análisis de cada metodología se estableció que las preguntas clave para definir de manera técnica los criterios de riesgo 
        pueden organizarse en dos variables correlacionadas: <span className="font-semibold">Factores</span> y <span className="font-semibold">Escenarios</span>.
      </p>

      {/* Factores y Escenarios */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 rounded-lg p-4 shadow">
          <h2 className="text-lg font-bold text-green-700 mb-2 text-center">1. Factores</h2>
          <p className="mb-2 text-gray-700">
            Elementos que influyen sobre una especie de insecto y que pueden favorecer, limitar o regular sus interacciones dentro de un escenario.
          </p>
          <h3 className="font-semibold text-green-600 mt-2 mb-1 ">Abióticos:</h3>
          <ul className="list-disc ml-6 text-sm text-gray-700 text-justify">
            <li>Climáticos: temperatura, humedad relativa, vientos, radiación solar, fotoperiodo.</li>
            <li>Edáficos: tipo de sustrato, pH, salinidad, textura, nutrientes, materia orgánica.</li>
            <li>Hídricos: disponibilidad de agua, oxígeno disuelto, corrientes.</li>
            <li>Químicos: volátiles, compuestos esenciales o tóxicos.</li>
            <li>Geográficos: altitud, latitud, relieve.</li>
          </ul>
          <h3 className="font-semibold text-green-600 mt-3 mb-1">Bióticos:</h3>
          <ul className="list-disc ml-6 text-sm text-gray-700 text-justify">
            <li>Relaciones intraespecíficas: competencia, cooperación.</li>
            <li>Relaciones interespecíficas: depredación, parasitismo, mutualismo, comensalismo, competencia.</li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-lg p-4 shadow">
          <h2 className="text-lg font-bold text-green-700 mb-2 text-center">2. Escenarios</h2>
          <p className="mb-2 text-gray-700 text-justify">
            Conjunto de factores bióticos y abióticos que definen cómo se organiza y funciona un ecosistema en un tiempo y espacio determinados.
          </p>
          <ul className="list-disc ml-6 text-sm text-gray-700 text-justify">
            <li><span className="font-semibold text-justify">Silvestres:</span> ecosistemas sin intervención humana.</li>
            <li>
              <span className="font-semibold text-justify">Antrópicos:</span> modificados por actividades humanas:
              <ul className="list-disc ml-6">
                <li>Agroecosistemas</li>
                <li>Urbano-industriales</li>
                <li>Mixtos o restaurados</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Diccionario de valores */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-green-800 mb-2">Diccionario de valores para las respuestas</h2>
        <div className="overflow-x-auto flex justify-center">
          <table className="table-auto w-auto text-xs border border-gray-200 bg-white mb-4">
            <thead>
              <tr className="bg-green-100 text-green-900">
                <th className="border px-2 py-1">Escala</th>
                <th className="border px-2 py-1">Respuesta</th>
                <th className="border px-2 py-1">Valor</th>
                <th className="border px-2 py-1">Definición</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1" rowSpan={4}>Dicotómica</td>
                <td className="border px-2 py-1">Sí</td>
                <td className="border px-2 py-1">3</td>
                <td className="border px-2 py-1">Afirmativo / Presente</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">No</td>
                <td className="border px-2 py-1">0</td>
                <td className="border px-2 py-1">Negativo / Ausente</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">NS</td>
                <td className="border px-2 py-1">1</td>
                <td className="border px-2 py-1">No se sabe / Incertidumbre</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">NA</td>
                <td className="border px-2 py-1">0</td>
                <td className="border px-2 py-1">No Aplica</td>
              </tr>
              <tr>
                <td className="border px-2 py-1" rowSpan={4}>Por Niveles</td>
                <td className="border px-2 py-1">Alto</td>
                <td className="border px-2 py-1">3</td>
                <td className="border px-2 py-1">Riesgo/Impacto Alto</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Medio</td>
                <td className="border px-2 py-1">2</td>
                <td className="border px-2 py-1">Riesgo/Impacto Medio</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Bajo</td>
                <td className="border px-2 py-1">1</td>
                <td className="border px-2 py-1">Riesgo/Impacto Bajo</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">NS</td>
                <td className="border px-2 py-1">1</td>
                <td className="border px-2 py-1">No se sabe / Incertidumbre</td>
              </tr>
              <tr>
                <td className="border px-2 py-1" rowSpan={4}>Bloque 4 (invertido)</td>
                <td className="border px-2 py-1">Sí</td>
                <td className="border px-2 py-1">0</td>
                <td className="border px-2 py-1">Afirmativo / Presente</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">No</td>
                <td className="border px-2 py-1">3</td>
                <td className="border px-2 py-1">Negativo / Ausente</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">NS</td>
                <td className="border px-2 py-1">1</td>
                <td className="border px-2 py-1">No se sabe / Incertidumbre</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">NA</td>
                <td className="border px-2 py-1">0</td>
                <td className="border px-2 py-1">No Aplica</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bloques y ponderaciones */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-green-800 mb-2">Estructura de bloques y ponderaciones</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-red-50 rounded-lg p-4 shadow">
            <h3 className="font-semibold text-red-700 mb-2">Bloques de Riesgo</h3>
            <table className="w-full text-xs border mb-2">
              <thead>
                <tr className="bg-red-100">
                  <th className="border px-2 py-1">Bloque</th>
                  <th className="border px-2 py-1">Preguntas</th>
                  <th className="border px-2 py-1">Puntos máx.</th>
                  <th className="border px-2 py-1">%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">1</td>
                  <td className="border px-2 py-1">11</td>
                  <td className="border px-2 py-1">33</td>
                  <td className="border px-2 py-1">25</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">2</td>
                  <td className="border px-2 py-1">19</td>
                  <td className="border px-2 py-1">57</td>
                  <td className="border px-2 py-1">25</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">3</td>
                  <td className="border px-2 py-1">7</td>
                  <td className="border px-2 py-1">21</td>
                  <td className="border px-2 py-1">25</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">4</td>
                  <td className="border px-2 py-1">9</td>
                  <td className="border px-2 py-1">27</td>
                  <td className="border px-2 py-1">25</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 rounded-lg p-4 shadow">
            <h3 className="font-semibold text-green-700 mb-2">Bloque de Control</h3>
            <table className="w-full text-xs border mb-2">
              <thead>
                <tr className="bg-green-100">
                  <th className="border px-2 py-1">Bloque</th>
                  <th className="border px-2 py-1">Preguntas</th>
                  <th className="border px-2 py-1">Puntos máx.</th>
                  <th className="border px-2 py-1">%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">5</td>
                  <td className="border px-2 py-1">10</td>
                  <td className="border px-2 py-1">30</td>
                  <td className="border px-2 py-1">100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 shadow">
            <h3 className="font-semibold text-yellow-700 mb-2">Bloque de Beneficios</h3>
            <table className="w-full text-xs border mb-2">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="border px-2 py-1">Bloque</th>
                  <th className="border px-2 py-1">Preguntas</th>
                  <th className="border px-2 py-1">Puntos máx.</th>
                  <th className="border px-2 py-1">%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">6</td>
                  <td className="border px-2 py-1">19</td>
                  <td className="border px-2 py-1">57</td>
                  <td className="border px-2 py-1">100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Fórmulas */}
      {/* Fórmulas mejoradas */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-green-800 mb-2">Variables y fórmulas</h2>
        <div className="grid md:grid-cols-2 gap-1">
          {/* Variables */}
          <div>
            <table className="table-auto w-auto text-xs border border-gray-200 bg-white mb-4">
              <thead>
                <tr className="bg-green-100 text-green-900">
                  <th className="border px-2 py-1">Símbolo</th>
                  <th className="border px-2 py-1">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1 font-mono font-bold">Ri</td>
                  <td className="border px-2 py-1">Puntaje real del bloque <i>i</i></td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-mono font-bold">Pi</td>
                  <td className="border px-2 py-1">Puntaje máximo del bloque <i>i</i></td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-mono font-bold">Ii</td>
                  <td className="border px-2 py-1">Índice parcial del bloque <i>i</i></td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-mono font-bold">vi</td>
                  <td className="border px-2 py-1">Peso del bloque <i>i</i></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Fórmulas */}
          <div>
            <div className="bg-green-50 rounded p-4 mb-2 space-y-2">
              <div>
                <span className="font-bold text-green-900">Índice parcial:</span>
                <div className="font-mono text-base bg-green-50 rounded px-2 py-1 inline-block ml-2">Ii = (Ri / Pi) × 100</div>
              </div>
              <div>
                <span className="font-bold text-green-900">Índice ponderado de riesgo:</span>
                <div className="font-mono text-base bg-green-50rounded px-2 py-1 inline-block ml-2">Ir = ∑(Ii × vi) [bloques 1–4]</div>
              </div>
              <div>
                <span className="font-bold text-green-900">Índice de control:</span>
                <div className="font-mono text-base bg-green-50 rounded px-2 py-1 inline-block ml-2">Ic = (R5 / P5) × 100</div>
              </div>
              <div>
                <span className="font-bold text-green-900">Índice de beneficio:</span>
                <div className="font-mono text-base bg-green-50 rounded px-2 py-1 inline-block ml-2">Ib = (R6 / P6) × 100</div>
              </div>
              <div>
                <span className="font-bold text-green-900">Índice de Riesgo Total:</span>
                <div className="font-mono text-base bg-green-50 rounded px-2 py-1 block mt-1">
                  It = Ic − Ir &nbsp;<br />
                  si It &gt; 0: significa que el control supera los riesgos.<br />
                  si It &lt; 0: significa que el riesgo supera a los controles.</div>
                </div>
              <div>
                <span className="font-bold text-green-900">Índice neto:</span>
                <div className="font-mono text-base bg-green-50 rounded px-2 py-1 block mt-1">
                  In = {'{'} Ib − It &nbsp; si It &gt; 0 <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ib + It &nbsp; si It &lt; 0 {'}'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-500 text-center">
        Para más detalles, consulta la bibliografía científica y la documentación de la ANLA, I3N, EPPO y ERBIC.
      </p>
    </div>
  </div>
);

export default Methodology;