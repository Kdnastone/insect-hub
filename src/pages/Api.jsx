import React, { useState } from "react";
import apiSchemeImage from '../assets/api_scheme.png';

export const Api = () => {
  const [respuesta, setRespuesta] = useState(null);
  const [cargando, setCargando] = useState(false);

  // endpoint de la API
  const endpoint = "https://insectapi.onrender.com/especies";

  // Función para hacer el GET real
  const probarApi = async () => {
    setCargando(true);
    setRespuesta(null);
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setRespuesta(data);
    } catch (err) {
      setRespuesta({ error: "No se pudo conectar con la API." });
    }
    setCargando(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 text-center py-10 text-green-800">
        <h1 className="text-4xl font-bold">API Pública de Algunos Insectos de Interés</h1>
      </div>

      <main className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sección de descripción */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Descripción</h2>
            <p className="text-green-800 leading-relaxed mb-4">
              <strong>insectos_cinat</strong> es una API desarrollada con fines educativos y de divulgación.
            </p>
            <p className="text-green-800 leading-relaxed text-justify">
              Esta API almacenará el nombre científico y común de diversas especies de insectos de interés...
            </p>
          </section>

          {/* Estado del desarrollo */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Estado del Desarrollo</h2>
            <p className="text-green-800 leading-relaxed text-justify">
              Actualmente, la API se encuentra en una etapa inicial de desarrollo. En futuras versiones, se
              planea expandir la base de datos para incluir más especies y detalles adicionales.
            </p>
            <p className="text-green-800 leading-relaxed text-justify">
              La API <a href="https://insectapi.onrender.com/especies" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", color: "green" }}>https://insectapi.onrender.com/especies </a> 
              se encuentra alojada en Render.com.
            </p>
          </section>
        </div>

        {/* Uso de Get para llamar la API */}
        <div className="bg-white shadow-lg rounded-lg p-6 my-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Uso de (GET) para llamar la API</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm text-left overflow-x-auto mb-2">
            {`fetch("${endpoint}")
              .then(res => res.json())
              .then(data => console.log(data));`}
          </pre>
          <button
            onClick={probarApi}
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mb-2"
            disabled={cargando}
          >
            {cargando ? "Consultando..." : "Probar API"}
          </button>
          {respuesta && (
            <pre className="bg-gray-100 rounded p-4 text-xs text-left overflow-x-auto mt-2">
              {JSON.stringify(respuesta, null, 2)}
            </pre>
          )}
        </div>

        {/* Imagen del esquema */}
        <div className="flex justify-center my-10">
          <img
            src={apiSchemeImage}
            alt="Esquema de la API"
            className="max-w-full md:max-w-3xl rounded-lg shadow-md"
          />
        </div>
      </main>
    </div>
  );
};

export default Api;