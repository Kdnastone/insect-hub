//Importar React y hooks necesarios
import React from 'react';

const SpeciesModal = ({ especie, onClose }) => {
  if (!especie) return null;
// Estructura del modal
  const renderServicesList = (services) => {
    if (!services || typeof services !== 'object') return 'No disponible';
    
    // Muestra los servicios de la especie
    return Object.entries(services).map(([key, value]) => {
      if (key === 'educacionInvestigacion' && value === true) {
        return <span key={key} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-1 mb-1">Educación e Investigación</span>;
      } else if (Array.isArray(value)) {
        {/* Renderiza cada servicio como un badge */}
        return value.map(item => (
          <span key={`${key}-${item}`} className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mr-1 mb-1">
            {item}
          </span>
        ));
      }
      return null;
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden relative">
        
        {/* Header con botón de cerrar */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="bg-white text-gray-600 hover:text-red-500 text-xl font-bold transition-colors w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:shadow-lg"
          >
            ✕
          </button>
        </div>

        {/* Contenido principal */}
        <div className="overflow-y-auto max-h-[95vh]">
          
          {/* Imagen principal */}
          <div className="relative bg-gradient-to-b from-green-50 to-white p-8 text-center">
            <div className="mb-4">
              <img
                src={`/assets/especies/${especie.imagen}`}
                alt={especie.nombreComun}
                className="w-48 h-48 object-cover rounded-lg mx-auto shadow-lg border-4 border-white"
              />
            </div>
            {/* Título y origen */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{especie.nombreComun}</h1>
            <p className="text-xl italic text-green-600 mb-4">{especie.nombreCientifico}</p>
            <div className="flex justify-center">
              {especie.origen && (
                <span className="bg-yellow-100 px-4 py-2 rounded-full text-sm">
                  🌍 {especie.origen}
                </span>
              )}
            </div>
          </div>

          {/* Información organizada */}
          <div className="p-6 space-y-6 bg-gray-50">
            
            {/* Descripción General */}
            {especie.descripcionGeneral && (
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                  <span>📝</span> Descripción General
                </h3>
                <p className="text-gray-700 leading-relaxed">{especie.descripcionGeneral}</p>
              </div>
            )}

            {/* Diagnóstico */}
            {especie.diagnosis && (
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h3 className="text-lg font-bold text-purple-700 mb-3 flex items-center gap-2">
                  <span>🔍</span> Diagnóstico
                </h3>
                <p className="text-gray-700 leading-relaxed">{especie.diagnosis}</p>
              </div>
            )}

            {/* Dimensiones y Coloración */}
            {(especie.dimensiones || especie.coloracion) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {especie.dimensiones && (
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                    <h3 className="text-lg font-bold text-green-700 mb-3 flex items-center gap-2">
                      <span>📏</span> Dimensiones
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{especie.dimensiones}</p>
                  </div>
                )}
                {especie.coloracion && (
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                    <h3 className="text-lg font-bold text-yellow-700 mb-3 flex items-center gap-2">
                      <span>🎨</span> Coloración
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{especie.coloracion}</p>
                  </div>
                )}
              </div>
            )}

            {/* Hábitat y Comportamiento */}
            {(especie.habitat || especie.comportamiento) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {especie.habitat && (
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                    <h3 className="text-lg font-bold text-green-700 mb-3 flex items-center gap-2">
                      <span>🏠</span> Hábitat
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{especie.habitat}</p>
                  </div>
                )}
                {especie.comportamiento && (
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <h3 className="text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                      <span>🎭</span> Comportamiento
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{especie.comportamiento}</p>
                  </div>
                )}
              </div>
            )}

            {/* Hábitos Alimentarios */}
            {especie.habitosAlimentarios && (
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
                <h3 className="text-lg font-bold text-orange-700 mb-3 flex items-center gap-2">
                  <span>🍽️</span> Hábitos Alimentarios
                </h3>
                <p className="text-gray-700 leading-relaxed">{especie.habitosAlimentarios}</p>
              </div>
            )}

            {/* Reproducción y Ciclo de Vida */}
            {especie.reproduccionCicloVida && (
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-pink-500">
                <h3 className="text-lg font-bold text-pink-700 mb-3 flex items-center gap-2">
                  <span>🔄</span> Reproducción y Ciclo de Vida
                </h3>
                <p className="text-gray-700 leading-relaxed">{especie.reproduccionCicloVida}</p>
              </div>
            )}

            {/* Distribución Global */}
            {especie.distribucionGlobal && (
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <h3 className="text-lg font-bold text-indigo-700 mb-3 flex items-center gap-2">
                  <span>🌍</span> Distribución Global
                </h3>
                <p className="text-gray-700 leading-relaxed">{especie.distribucionGlobal}</p>
              </div>
            )}

            {/* Servicios Ecosistémicos */}
            {especie.serviciosEcosistemicos && (
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                  <span>⚙️</span> Servicios Ecosistémicos
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="p-2 text-left font-semibold text-green-800">Agropecuario</th>
                        <th className="p-2 text-left font-semibold text-green-800">Humano</th>
                        <th className="p-2 text-left font-semibold text-green-800">Producción de Bioinsumos</th>
                        <th className="p-2 text-left font-semibold text-green-800">Relación Ecológica</th>
                        <th className="p-2 text-left font-semibold text-green-800">Biotecnológica/Biomateriales</th>
                        <th className="p-2 text-left font-semibold text-green-800">Educación/Investigación</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 align-top">
                          <div className="space-y-1">
                            <div className="text-xs font-medium text-gray-600">Alimento</div>
                            <div className="text-xs font-medium text-gray-600">Farmacología</div>
                            <div className="text-xs font-medium text-gray-600">Cosmética</div>
                          </div>
                        </td>
                        <td className="p-2 align-top">
                          <div className="space-y-1">
                            <div className="text-xs font-medium text-gray-600">Alimento</div>
                            <div className="text-xs font-medium text-gray-600">Farmacología</div>
                            <div className="text-xs font-medium text-gray-600">Cosmética</div>
                          </div>
                        </td>
                        <td className="p-2 align-top">
                          <div className="space-y-1">
                            <div className="text-xs font-medium text-gray-600">Fertilizantes/Abonos</div>
                            <div className="text-xs font-medium text-gray-600">Controladores Biológicos</div>
                          </div>
                        </td>
                        <td className="p-2 align-top">
                          <div className="space-y-1">
                            <div className="text-xs font-medium text-gray-600">Plaga</div>
                            <div className="text-xs font-medium text-gray-600">Agroecológica</div>
                          </div>
                        </td>
                        <td className="p-2 align-top">
                          <div className="text-xs font-medium text-gray-600">-</div>
                        </td>
                        <td className="p-2 align-top">
                          <div className="text-xs font-medium text-gray-600">
                            {especie.serviciosEcosistemicos?.educacionInvestigacion ? '✓' : '-'}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="6" className="p-2 text-xs text-gray-500 bg-gray-50">
                          <strong>Servicios específicos de esta especie:</strong>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {Object.entries(especie.serviciosEcosistemicos || {}).map(([key, value]) => {
                              if (Array.isArray(value)) {
                                return value.map(item => (
                                  <span key={`${key}-${item}`} className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                    {item}
                                  </span>
                                ));
                              } else if (value === true) {
                                return (
                                  <span key={key} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                    {key === 'educacionInvestigacion' ? 'Educación e Investigación' : key}
                                  </span>
                                );
                              }
                              return null;
                            })}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Importancia Ecológica */}
            {especie.importanciaEcologica && (
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
                <h3 className="text-lg font-bold text-teal-700 mb-3 flex items-center gap-2">
                  <span>🌱</span> Importancia Ecológica
                </h3>
                <p className="text-gray-700 leading-relaxed">{especie.importanciaEcologica}</p>
              </div>
            )}

            {/* Peligros y Riesgos */}
            {especie.peligroSanitario && (
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
                  <span>⚠️</span> Peligros Sanitarios
                </h3>
                <p className="text-gray-700 leading-relaxed">{especie.peligroSanitario}</p>
              </div>
            )}

            {/* Medidas de Manejo */}
            {especie.medidasManejo && (
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gray-500">
                <h3 className="text-lg font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <span>🛡️</span> Medidas de Manejo
                </h3>
                <p className="text-gray-700 leading-relaxed">{especie.medidasManejo}</p>
              </div>
            )}

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

            {/* Información Taxonómica Detallada */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-700 mb-3 flex items-center gap-2">
                <span>🔬</span> Clasificación Taxonómica
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600">Reino:</span>
                  <p className="text-gray-800">{especie.reino || 'Animalia'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600">Filo:</span>
                  <p className="text-gray-800">{especie.filo || 'Arthropoda'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600">Clase:</span>
                  <p className="text-gray-800">{especie.clase || 'Insecta'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600">Orden:</span>
                  <p className="text-gray-800">{especie.orden}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600">Familia:</span>
                  <p className="text-gray-800">{especie.familia}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-gray-600">Género:</span>
                  <p className="text-gray-800">{especie.genero || especie.nombreCientifico.split(' ')[0]}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeciesModal;
