// Importar React
import React from "react";

// Componente para mostrar estadísticas al lado del contador de riesgos
const StatsPanel = ({ totalQuestions, answered, pending }) => (
  <div className="stats-panel bg-gray-50 p-4 rounded mb-4">
    <h3 className="text-xl font-bold mb-2">Statistics</h3>
    <ul>
      <li><strong>Total questions:</strong> {totalQuestions}</li>
      <li><strong>Answered:</strong> {answered}</li>
      <li><strong>Pending:</strong> {pending}</li>
    </ul>
  </div>
);

export default StatsPanel;