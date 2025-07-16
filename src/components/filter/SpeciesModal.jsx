import React from 'react';

const SpeciesModal = ({ especie, onClose }) => {
  if (!especie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        
        {/* Header con botón de cerrar */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="bg-white text-gray-600 hover:text-red-500 text-xl font-bold transition-colors w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:shadow-lg border"
          >
            ✕
          </button>
        </div>

        {/* Contenido principal */}
        <div className="p-6 pt-16">
          
          {/* Imagen principal */}
          <div className="text-center mb-6">
            <div className="mb-4">
              <img
                src={`/assets/especies/${especie.imagen}`}
                alt={especie.nombreComun}
                className="w-48 h-48 object-cover rounded-lg mx-auto shadow-lg border-4 border-white"
                onError={(e) => {
                  e.target.src = '/assets/especies/default.jpg';
                }}
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{especie.nombreComun}</h1>
            <div className="text-xl text-green-600 mb-4" dangerouslySetInnerHTML={{ __html: especie.nombreCientifico }} />
            <div className="flex justify-center">
              {especie.origen && (
                <span className="bg-yellow-100 px-4 py-2 rounded-full text-sm">
                  🌍 {especie.origen}
                </span>
              )}
            </div>
          </div>

          {/* Contenido organizado */}
          <div className="space-y-6">
            
            {/* Clasificación Taxonómica */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-700 mb-3 flex items-center gap-2">
                <span>🔬</span> Clasificación Taxonómica
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600">Reino:</span>
                  <p className="text-gray-800">{especie.reino || 'No disponible'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600">Filo:</span>
                  <p className="text-gray-800">{especie.filo || 'No disponible'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600">Clase:</span>
                  <p className="text-gray-800">{especie.clase || 'No disponible'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600">Orden:</span>
                  <p className="text-gray-800">{especie.orden || 'No disponible'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600">Familia:</span>
                  <p className="text-gray-800">{especie.familia || 'No disponible'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600">Género:</span>
                  <p className="text-gray-800">{especie.genero || 'No disponible'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600">Especie:</span>
                  <p className="text-gray-800">{especie.especie || 'No disponible'}</p>
                </div>
              </div>
            </div>

            {/* Descripción General */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                <span>📝</span> Descripción General
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {especie.descripcionGeneral || 'No hay descripción disponible'}
              </p>
            </div>

            {/* Diagnóstico */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-700 mb-3 flex items-center gap-2">
                <span>🔍</span> Diagnóstico
              </h3>
              <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ 
                __html: especie.diagnosis || 'No hay diagnóstico disponible' 
              }} />
            </div>

            {/* Dimensiones y Coloración */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h3 className="text-lg font-bold text-green-700 mb-3 flex items-center gap-2">
                  <span>📏</span> Dimensiones
                </h3>
                <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ 
                  __html: especie.dimensiones || 'No hay información de dimensiones' 
                }} />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                <h3 className="text-lg font-bold text-yellow-700 mb-3 flex items-center gap-2">
                  <span>🎨</span> Coloración
                </h3>
                <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ 
                  __html: especie.coloracion || 'No hay información de coloración' 
                }} />
              </div>
            </div>

            {/* Sinonimias */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gray-500">
              <h3 className="text-lg font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span>📝</span> Sinonimias
              </h3>
              <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ 
                __html: especie.sinonimias || 'No hay sinonimias disponibles' 
              }} />
            </div>

            {/* Especies Similares */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-700 mb-3 flex items-center gap-2">
                <span>🔄</span> Especies Similares
              </h3>
              <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ 
                __html: especie.especiesSimilares || 'No hay especies similares disponibles' 
              }} />
            </div>

            {/* Distribución */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-700 mb-3 flex items-center gap-2">
                <span>🌍</span> Distribución
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {especie.distribucionGlobal || 'No hay información de distribución disponible'}
              </p>
            </div>

            {/* Hábitat */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-700 mb-3 flex items-center gap-2">
                <span>🏠</span> Hábitat
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {especie.habitat || 'No hay información de hábitat disponible'}
              </p>
            </div>

            {/* Servicios Ecosistémicos */}
            {especie.serviciosEcosistemicos && (
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                  <span>⚙️</span> Servicios Ecosistémicos
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="border p-2 text-left font-semibold text-green-800">Categoría</th>
                        <th className="border p-2 text-left font-semibold text-green-800">Subcategoría</th>
                        <th className="border p-2 text-left font-semibold text-green-800">Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Agropecuario */}
                      <tr>
                        <td className="border p-2 align-top font-semibold" rowSpan="3">Agropecuario</td>
                        <td className="border p-2 align-top">Alimento</td>
                        <td className="border p-2 align-top">{especie.serviciosEcosistemicos.agropecuario?.alimento || '-'}</td>
                      </tr>
                      <tr>
                        <td className="border p-2 align-top">Farmacología</td>
                        <td className="border p-2 align-top">{especie.serviciosEcosistemicos.agropecuario?.farmacologia || '-'}</td>
                      </tr>
                      <tr>
                        <td className="border p-2 align-top">Cosmética</td>
                        <td className="border p-2 align-top">{especie.serviciosEcosistemicos.agropecuario?.cosmetica || '-'}</td>
                      </tr>
                      
                      {/* Humano */}
                      <tr>
                        <td className="border p-2 align-top font-semibold" rowSpan="3">Humano</td>
                        <td className="border p-2 align-top">Alimento</td>
                        <td className="border p-2 align-top">{especie.serviciosEcosistemicos.humano?.alimento || '-'}</td>
                      </tr>
                      <tr>
                        <td className="border p-2 align-top">Farmacología</td>
                        <td className="border p-2 align-top">{especie.serviciosEcosistemicos.humano?.farmacologia || '-'}</td>
                      </tr>
                      <tr>
                        <td className="border p-2 align-top">Cosmética</td>
                        <td className="border p-2 align-top">{especie.serviciosEcosistemicos.humano?.cosmetica || '-'}</td>
                      </tr>
                      
                      {/* Educación/Investigación */}
                      <tr>
                        <td className="border p-2 align-top font-semibold">Educación/Investigación</td>
                        <td className="border p-2 align-top">-</td>
                        <td className="border p-2 align-top">{especie.serviciosEcosistemicos.educacionInvestigacion || '-'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Medidas de Manejo */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gray-500">
              <h3 className="text-lg font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span>🛡️</span> Medidas de Manejo
              </h3>
              <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ 
                __html: especie.medidasManejo || 'No hay medidas de manejo disponibles' 
              }} />
            </div>

            {/* Enlaces de Referencia */}
            {especie.enlaceGBIF && (
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                  <span>🔗</span> Enlaces de Referencia
                </h3>
                <a 
                  href={especie.enlaceGBIF} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-2 transition-colors text-lg"
                >
                  Ver en GBIF <span>↗</span>
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeciesModal;