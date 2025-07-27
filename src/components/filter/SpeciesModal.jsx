// Importar React
import React, { useEffect } from 'react';

const SpeciesModal = ({ especie, onClose }) => {
  if (!especie) return null;

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-2 sm:px-4">
      <div className="bg-white rounded-lg sm:rounded-xl shadow-2xl max-w-4xl w-full h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto relative">
        
        {/* Header con botón de cerrar*/}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-[60] bg-white hover:bg-green-600 text-black text-xl font-bold transition-all duration-200 w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl border-2 border-white hover:scale-110"
        >
          ✕
        </button>

        {/* Contenido principal */}
        <div className="p-4 sm:p-6 pt-16">
          
          {/* Imagen principal */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="mb-3 sm:mb-4">
              <img
                src={`/assets/especies/${especie.imagen}`}
                alt={especie.nombreComun}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg mx-auto shadow-lg border-4 border-white"
                onError={(e) => {
                  e.target.src = '/assets/especies/default.jpg';
                }}
              />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">{especie.nombreComun}</h1>
            <div className="text-lg sm:text-xl md:text-2xl text-green-600 mb-4" dangerouslySetInnerHTML={{ __html: especie.nombreCientifico }} />
            <div className="flex justify-center">
              {especie.origen && (
                <span className="bg-yellow-100 px-3 sm:px-4 py-2 rounded-full text-sm">
                  🌍 {especie.origen}
                </span>
              )}
            </div>
          </div>

          {/* Contenido organizado */}
          <div className="space-y-4 sm:space-y-6">
            
            {/* Clasificación Taxonómica */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
              <h3 className="text-base sm:text-lg font-bold text-indigo-700 mb-3 flex items-center gap-2">
                <span>🔬</span> Clasificación Taxonómica
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600 block mb-1">Reino:</span>
                  <p className="text-gray-800">{especie.Reino || 'No disponible'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600 block mb-1">Filo:</span>
                  <p className="text-gray-800">{especie.filo || 'No disponible'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600 block mb-1">Clase:</span>
                  <p className="text-gray-800">{especie.clase || 'No disponible'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600 block mb-1">Orden:</span>
                  <p className="text-gray-800">{especie.orden || 'No disponible'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600 block mb-1">Familia:</span>
                  <p className="text-gray-800">{especie.familia || 'No disponible'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600 block mb-1">Género:</span>
                  <p className="text-gray-800">{especie.genero || 'No disponible'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600 block mb-1">Especie:</span>
                  <p className="text-gray-800">{especie.especie || 'No disponible'}</p>
                </div>
              </div>
            </div>

            {/* Descripción General */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h3 className="text-base sm:text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                <span>📝</span> Descripción General
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {especie.descripcionGeneral || 'No hay descripción disponible'}
              </p>
            </div>

            {/* Diagnóstico */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
              <h3 className="text-base sm:text-lg font-bold text-purple-700 mb-3 flex items-center gap-2">
                <span>🔍</span> Diagnóstico
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ 
                __html: especie.diagnosis || 'No hay diagnóstico disponible' 
              }} />
            </div>

            {/* Dimensiones y Coloración */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h3 className="text-base sm:text-lg font-bold text-green-700 mb-3 flex items-center gap-2">
                  <span>📏</span> Dimensiones
                </h3>
                <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ 
                  __html: especie.dimensiones || 'No hay información de dimensiones' 
                }} />
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                <h3 className="text-base sm:text-lg font-bold text-yellow-700 mb-3 flex items-center gap-2">
                  <span>🎨</span> Coloración
                </h3>
                <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ 
                  __html: especie.coloracion || 'No hay información de coloración' 
                }} />
              </div>
            </div>

            {/* Sinonimias */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-gray-500">
              <h3 className="text-base sm:text-lg font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span>📝</span> Sinonimias
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ 
                __html: especie.sinonimias || 'No hay sinonimias disponibles' 
              }} />
            </div>

            {/* Especies Similares */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
              <h3 className="text-base sm:text-lg font-bold text-orange-700 mb-3 flex items-center gap-2">
                <span>🔄</span> Especies Similares
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ 
                __html: especie.especiesSimilares || 'No hay especies similares disponibles' 
              }} />
            </div>

            {/* Distribución y Origen */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <h3 className="text-base sm:text-lg font-bold text-indigo-700 mb-3 flex items-center gap-2">
                  <span>🌍</span> Distribución Global
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {especie.distribucionGlobal || 'No hay información de distribución disponible'}
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h3 className="text-base sm:text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                  <span>🇨🇴</span> Distribución Local
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {especie.distribucionLocal || 'No hay información de distribución local disponible'}
                </p>
              </div>
            </div>

            {/* Origen Biogeográfico y Ruta de Introducción */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h3 className="text-base sm:text-lg font-bold text-purple-700 mb-3 flex items-center gap-2">
                  <span>🗺️</span> Origen Biogeográfico
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {especie.origenBiogeografico || 'No hay información de origen disponible'}
                </p>
              </div>
              {especie.rutaIntroduccion && especie.rutaIntroduccion !== 'NA' && (
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                  <h3 className="text-base sm:text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
                    <span>➡️</span> Ruta de Introducción
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {especie.rutaIntroduccion}
                  </p>
                </div>
              )}
            </div>

            {/* Hábitat */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <h3 className="text-base sm:text-lg font-bold text-green-700 mb-3 flex items-center gap-2">
                <span>🏠</span> Hábitat
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {especie.habitat || 'No hay información de hábitat disponible'}
              </p>
            </div>

            {/* Comportamiento */}
            {especie.comportamiento && (
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
                <h3 className="text-base sm:text-lg font-bold text-teal-700 mb-3 flex items-center gap-2">
                  <span>🎭</span> Comportamiento
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {especie.comportamiento}
                </p>
              </div>
            )}

            {/* Hábitos Alimentarios */}
            {especie.habitosAlimentarios && (
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                <h3 className="text-base sm:text-lg font-bold text-amber-700 mb-3 flex items-center gap-2">
                  <span>🍽️</span> Hábitos Alimentarios
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {especie.habitosAlimentarios}
                </p>
              </div>
            )}

            {/* Reproducción y Ciclo de Vida */}
            {especie.reproduccionCicloVida && (
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-pink-500">
                <h3 className="text-base sm:text-lg font-bold text-pink-700 mb-3 flex items-center gap-2">
                  <span>🔄</span> Reproducción y Ciclo de Vida
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {especie.reproduccionCicloVida}
                </p>
              </div>
            )}

            {/* Servicios Ecosistémicos */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <h3 className="text-base sm:text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                <span>⚙️</span> Servicios Ecosistémicos
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm border-collapse">
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
                      <td className="border p-2 align-top">{especie.seAgropecuarioAlimento || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top">Farmacología</td>
                      <td className="border p-2 align-top">{especie.seAgropecuarioFarmacologia || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top">Cosmética</td>
                      <td className="border p-2 align-top">{especie.seAgropecuarioCosmetica || '-'}</td>
                    </tr>
                    
                    {/* Humano */}
                    <tr>
                      <td className="border p-2 align-top font-semibold" rowSpan="3">Humano</td>
                      <td className="border p-2 align-top">Alimento</td>
                      <td className="border p-2 align-top">{especie.seHumanoAlimento || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top">Farmacología</td>
                      <td className="border p-2 align-top">{especie.seHumanoFarmacologia || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top">Cosmética</td>
                      <td className="border p-2 align-top">{especie.seHumanoCosmetica || '-'}</td>
                    </tr>
                    
                    {/* Bioinsumos */}
                    <tr>
                      <td className="border p-2 align-top font-semibold" rowSpan="2">Bioinsumos</td>
                      <td className="border p-2 align-top">Fertilizantes/Abonos</td>
                      <td className="border p-2 align-top">{especie.seBioinsumosFertilizantesAbonos || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top">Controladores Biológicos</td>
                      <td className="border p-2 align-top">{especie.seBioinsumosControladoresBiologicos || '-'}</td>
                    </tr>
                    
                    {/* Relación Ecológica */}
                    <tr>
                      <td className="border p-2 align-top font-semibold" rowSpan="2">Relación Ecológica</td>
                      <td className="border p-2 align-top">Plaga</td>
                      <td className="border p-2 align-top">{especie.seRelacionEcologicaPlaga || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top">Agroecológica</td>
                      <td className="border p-2 align-top">{especie.seRelacionEcologicaAgroecologica || '-'}</td>
                    </tr>
                    
                    {/* Biotecnológica/Biomateriales */}
                    <tr>
                      <td className="border p-2 align-top font-semibold">Biotecnológica</td>
                      <td className="border p-2 align-top">Biomateriales</td>
                      <td className="border p-2 align-top">{especie.seBiotecnologicaBiomateriales || '-'}</td>
                    </tr>
                    
                    {/* Educación/Investigación */}
                    <tr>
                      <td className="border p-2 align-top font-semibold">Educación/Investigación</td>
                      <td className="border p-2 align-top">-</td>
                      <td className="border p-2 align-top">{especie.seEducacionInvestigacion || '-'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Peligros Sanitarios */}
            {/* Peligros Sanitarios */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-base sm:text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
                <span>⚠️</span> Peligros Sanitarios
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ 
                __html: (especie.peligroSanitario && especie.peligroSanitario.trim() !== '') 
                  ? especie.peligroSanitario 
                  : 'No hay información de peligros sanitarios disponible' 
              }} />
            </div>

            {/* Peligros Medioambientales */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
              <h3 className="text-base sm:text-lg font-bold text-orange-700 mb-3 flex items-center gap-2">
                <span>🌿</span> Peligros Medioambientales
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ 
                __html: (especie.peligrosMedioambientales && especie.peligrosMedioambientales.trim() !== '') 
                  ? especie.peligrosMedioambientales 
                  : 'No hay información de peligros medioambientales disponible' 
              }} />
            </div>

            {/* Medidas de Manejo */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-gray-500">
              <h3 className="text-base sm:text-lg font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span>🛡️</span> Medidas de Manejo
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ 
                __html: (especie.medidasManejo && especie.medidasManejo.trim() !== '') 
                  ? especie.medidasManejo 
                  : 'No hay información de medidas de manejo disponible' 
              }} />
            </div>

            {/* Enlaces de Referencia */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h3 className="text-base sm:text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                <span>🔗</span> Enlaces de Referencia
              </h3>
              {especie.enlaceGBIF ? (
                <a 
                  href={especie.enlaceGBIF} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-2 transition-colors text-base sm:text-lg"
                >
                  Ver en GBIF <span>↗</span>
                </a>
              ) : (
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  No hay enlaces de referencia disponibles
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeciesModal;