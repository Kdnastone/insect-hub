// Importaciones necesarias
import { useState } from 'react';
import normas from '../data/normas.js';

export default function Recursos() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 text-center py-10 text-green-800">
        <h1 className="text-4xl font-bold">
          Normatividad para el Manejo de Insectos en Colombia
        </h1>
      </div>

      <main className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sección de descripción de la normatividad */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Descripción</h2>
            <p className="text-green-800 leading-relaxed mb-4 text-justify">
              En Colombia, el uso de insectos en producción animal, alimentación,
              agricultura y salud se encuentra en proceso de formalización normativa.
              Durante los últimos meses, distintas instituciones, entre ellas el{" "}
              <strong>CINAT</strong>, han trabajado en propuestas regulatorias que
              buscan incluir a los insectos dentro de los marcos legales existentes en
              bioseguridad, inocuidad alimentaria, producción animal y medio ambiente.
            </p>
            <p className="text-green-800 leading-relaxed text-justify">
              Aunque no existe aún una normatividad específica para insectos en todos
              los usos posibles, actualmente se aplican criterios derivados de normas
              sobre alimentos, especies no convencionales, bioinsumos, farmacología y
              producción sostenible.
            </p>
          </section>

{/* Estado actual del desarrollo normativo */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Estado del Desarrollo
            </h2>
            <p className="text-green-800 leading-relaxed text-justify mb-6">
              Actualmente se están desarrollando mesas de trabajo para abordar desde la
              legislación el uso de los insectos a partir del concepto de{" "}
              <strong>Servicios Ecosistémicos</strong> contemplado en la{" "}
              <strong><em>
                Política Nacional para la Gestión Integral de la Biodiversidad y sus
                Servicios Ecosistémicos de 2012
              </em></strong>
              . Este enfoque busca orientar la conservación y uso responsable de la
              biodiversidad, reconociendo los servicios ecosistémicos de{" "}
              <strong>Soporte</strong>, <strong>Regulación</strong>,{" "}
              <strong>Cultural</strong> y <strong>Provisión</strong>.
            </p>
            
            {/* Video integrado */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-bold text-green-800 mb-3 text-center">
                Normograma sobre Insectos en el Marco de los Servicios Ecosistémicos
              </h3>
              <div className="relative flex justify-center">
                <div className="relative">
                  <video
                    className="w-full max-w-sm rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity object-cover"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <source src="/videos/normograma.mp4" type="video/mp4" />
                  </video>
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg cursor-pointer hover:bg-opacity-20 transition-all"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">Clic para ver en pantalla completa</p>
            </div>
          </section>
          
          {/* Nueva sección: Normas clave desde JSON - ahora centrada */}
          <section className="bg-white shadow-lg rounded-lg p-6 md:col-span-2">
            <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">
              Normas Relevantes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-green-800">
                <thead className="text-xs text-white uppercase bg-green-800">
                  <tr>
                    <th scope="col" className="px-4 py-3 w-1/4">
                      Norma
                    </th>
                    <th scope="col" className="px-4 py-3 w-2/3">
                      Descripción
                    </th>
                    <th scope="col" className="px-4 py-3 w-1/12 text-center">
                      Enlace
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {normas.map((norma, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 font-medium">
                        {norma.Norma}
                      </td>
                      <td className="px-4 py-3 text-justify">
                        {norma.Descripcion}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <a
                          href={norma.Enlace}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          🔗
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Modal del video */}
        {isVideoOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white rounded-lg p-4 max-w-4xl w-full">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                ✕
              </button>
              <video
                width="100%"
                height="auto"
                controls
                autoPlay
                className="rounded-lg"
              >
                <source src="/videos/normograma.mp4" type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}