// Importar React
import React from "react";

const RiskLevelTable = () => (
  // Tabla de equivalencias de niveles de riesgo
  <div className="risk-level-table">
    <h3 className="text-xl font-bold mb-2">Niveles de Riesgo</h3>
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
);

export default RiskLevelTable;