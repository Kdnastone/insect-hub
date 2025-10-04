// import react
import React, { useEffect, useState } from 'react';

// Función para obtener el primer valor no vacío de una lista de posibles claves en un objeto
const pickFirstNonEmpty = (obj, keys) => {
  if (!obj) return '';
  for (const k of keys) {
    const v = obj[k];
    if (v !== undefined && v !== null) {
      const s = String(v).trim();
      if (s !== '') return s;
    }
  }
  return '';
};

// Componente modal para mostrar detalles de una especie
const SpeciesModal = ({ especie, onClose }) => {
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

  if (!especie) return null;

  // Debug: ver estructura y detectar nombres de campos
  useEffect(() => {
    console.log('SpeciesModal -> especie:', especie);
  }, [especie]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev || 'unset';
    };
  }, []);

  // Manejar tecla Escape para cerrar el modal principal o la imagen ampliada
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (imagenAmpliada) {
          setImagenAmpliada(false);
        } else if (onClose) {
          onClose();
        }
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose, imagenAmpliada]);

  // constantes asignadas para búsqueda en JSON para estos campos
  const peligrosEcologicosText = pickFirstNonEmpty(especie, [
    'peligrosEcologicosPlaga',
  ]);

  const peligroSanitarioText = pickFirstNonEmpty(especie, [
    'peligroSanitario',
  ]);

  const peligrosMedioText = pickFirstNonEmpty(especie, [
    'peligrosMedioambientales',
  ]);

  const imagenSrc = especie.imagen ? `/assets/especies/${especie.imagen}` : '/assets/especies/default.jpg';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-2 sm:px-4">
      <div className="bg-white rounded-lg sm:rounded-xl shadow-2xl max-w-4xl w-full h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-[60] bg-white hover:bg-green-600 text-black text-xl font-bold transition-all duration-200 w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl border-2 border-white hover:scale-110"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        <div className="p-4 sm:p-6 pt-16">
          <div className="text-center mb-4 sm:mb-6">
            <div className="mb-3 sm:mb-4">
              <img
                src={imagenSrc}
                alt={especie.nombreComun || 'especie'}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain rounded-lg mx-auto shadow-lg border-4 border-white bg-gray-50 cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setImagenAmpliada(true)}
                onError={(e) => { e.target.src = '/assets/especies/default.jpg'; }}
              />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">{especie.nombreComun}</h1>
            <div className="text-lg sm:text-xl md:text-2xl text-green-600 mb-4" dangerouslySetInnerHTML={{ __html: especie.nombreCientifico || '' }} />
            <div className="flex justify-center">
              {especie.origen && (
                <span className="bg-yellow-100 px-3 sm:px-4 py-2 rounded-full text-sm">
                  🌍 {especie.origen}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
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

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h3 className="text-base sm:text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                <span>📝</span> Descripción General
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {especie.descripcionGeneral || 'No hay descripción disponible'}
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
              <h3 className="text-base sm:text-lg font-bold text-purple-700 mb-3 flex items-center gap-2">
                <span>🔍</span> Diagnóstico
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{
                __html: especie.diagnosis || 'No hay diagnóstico disponible'
              }} />
            </div>

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

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-gray-500">
              <h3 className="text-base sm:text-lg font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span>📝</span> Sinonimias
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{
                __html: especie.sinonimias || 'No hay sinonimias disponibles'
              }} />
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
              <h3 className="text-base sm:text-lg font-bold text-orange-700 mb-3 flex items-center gap-2">
                <span>🔄</span> Especies Similares
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{
                __html: especie.especiesSimilares || 'No hay especies similares disponibles'
              }} />
            </div>

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

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <h3 className="text-base sm:text-lg font-bold text-green-700 mb-3 flex items-center gap-2">
                <span>🏠</span> Hábitat
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {especie.habitat || 'No hay información de hábitat disponible'}
              </p>
            </div>

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
                    <tr>
                      <td className="border p-2 align-top font-semibold" rowSpan="3">Agropecuario</td>
                      <td className="border p-2 align-top font-semibold">Alimento</td>
                      <td className="border p-2 align-top">{especie.seAgropecuarioAlimento || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top font-semibold">Farmacología</td>
                      <td className="border p-2 align-top">{especie.seAgropecuarioFarmacologia || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top font-semibold">Cosmética</td>
                      <td className="border p-2 align-top">{especie.seAgropecuarioCosmetica || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top font-semibold" rowSpan="3">Humano</td>
                      <td className="border p-2 align-top font-semibold">Alimento</td>
                      <td className="border p-2 align-top">{especie.seHumanoAlimento || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top font-semibold">Farmacología</td>
                      <td className="border p-2 align-top">{especie.seHumanoFarmacologia || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top font-semibold">Cosmética</td>
                      <td className="border p-2 align-top">{especie.seHumanoCosmetica || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top font-semibold" rowSpan="2">Bioinsumos</td>
                      <td className="border p-2 align-top font-semibold">Fertilizantes/Abonos</td>
                      <td className="border p-2 align-top">{especie.seBioinsumosFertilizantesAbonos || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top font-semibold">Controladores Biológicos</td>
                      <td className="border p-2 align-top">{especie.seBioinsumosControladoresBiologicos || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top font-semibold">Agroecológica</td>
                      <td className="border p-2 align-top" colSpan="2">{especie.seRelacionEcologicaAgroecologica || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top font-semibold">Biotecnológica/Biomateriales</td>
                      <td className="border p-2 align-top" colSpan="2">{especie.seBiotecnologicaBiomateriales || '-'}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top font-semibold">Educación/Investigación</td>
                      <td className="border p-2 align-top" colSpan="2">{especie.seEducacionInvestigacion || '-'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Seccióm de Medidas de Manejo según nombres atribuídos en la constante */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-base sm:text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
                <span>⚠️</span> Peligros como Plaga
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{
                __html: peligrosEcologicosText || 'No hay información de peligros ecológicos disponible'
              }} />
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-base sm:text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
                <span>⚠️</span> Peligros Sanitarios
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{
                __html: peligroSanitarioText || 'No hay información de peligros sanitarios disponible'
              }} />
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
              <h3 className="text-base sm:text-lg font-bold text-orange-700 mb-3 flex items-center gap-2">
                <span>🌿</span> Peligros Medioambientales
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{
                __html: peligrosMedioText || 'No hay información de peligros medioambientales disponible'
              }} />
            </div>

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

      {imagenAmpliada && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-[70] flex items-center justify-center p-4"
          onClick={() => setImagenAmpliada(false)}
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={() => setImagenAmpliada(false)}
              className="absolute top-4 right-4 z-[80] bg-white hover:bg-red-500 text-black hover:text-white text-xl font-bold transition-all duration-200 w-10 h-10 flex items-center justify-center rounded-full shadow-lg"
              aria-label="Cerrar imagen"
            >
              ✕
            </button>
            <img
              src={imagenSrc}
              alt={especie.nombreComun || 'especie ampliada'}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl bg-white p-2"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => { e.target.src = '/assets/especies/default.jpg'; }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeciesModal;