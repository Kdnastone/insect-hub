// importaciones necesarias
import React, { useState, useEffect } from 'react';
import ev1_01 from '../../assets/images/ev1_01.jpg';
import ev1_02 from '../../assets/images/ev1_02.jpg';
import ev1_03 from '../../assets/images/ev1_03.jpg';
import ev2_01 from '../../assets/images/ev2_01.jpg';

export default function EventosTab() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [availableHeight, setAvailableHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', onKey);

    const updateSizes = () => {
      const footer = document.querySelector('footer');
      const fh = footer ? footer.getBoundingClientRect().height : 0;
      setFooterHeight(fh);
      setAvailableHeight(Math.max(100, window.innerHeight - fh - 48));
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);

    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', updateSizes);
    };
  }, []);

  // cuando se abre/cierra el modal: recalcula y bloquea scroll del body
  useEffect(() => {
    const footer = document.querySelector('footer');
    const fh = footer ? footer.getBoundingClientRect().height : 0;
    setFooterHeight(fh);
    setAvailableHeight(Math.max(100, window.innerHeight - fh - 48));

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  {/* Eventos destacados, lo que irá en el contenedor */}
  const eventos = [
    {
      id: 1,
      titulo: "Gran Encuentro Nacional para la Reglamentación de Insectos en Colombia",
      fecha: "octubre 15 de 2025",
      descripcion:
        "En este evento se articularon la ciencia, tecnología e innovación para avanzar en la consolidación de una ruta regulatoria que impulse el uso de insectos como fuente de proteína sostenible, agentes de biocontrol y regeneradores del suelo, en beneficio de la seguridad alimentaria, la sostenibilidad y el desarrollo rural.",
      imagen_eventos: [ev1_01, ev1_02, ev1_03],
    },
    {
      id: 2,
      titulo: "EntoFest Colombia 2025",
      fecha: "noviembre 07 de 2025",
      descripcion:
        "Simposio Anual del Centro de Investigación de Artrópodos Terrestres (CINAT). Insectos en acción: de la investigación a la innovación sostenible.",
      imagen_eventos: [ev2_01],
    },
  ];

  return (
    <>
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className="border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col"
        >
          <h2 className="font-semibold text-lg sm:text-xl text-green-800 mb-2 sm:mb-3 whitespace-pre-wrap text-center">
            {evento.titulo}
          </h2>

          <p className="text-xs sm:text-sm text-green-900 font-medium mb-2">
            {evento.fecha}
          </p>

          <p className="text-sm sm:text-base text-gray-950 whitespace-pre-wrap text-justify">
            {evento.descripcion}
          </p>

          {/* Imágenes del evento */}
          {evento.imagen_eventos && evento.imagen_eventos.length > 0 && (
            <div className="mt-4 flex-grow">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 h-full">
                {evento.imagen_eventos.map((img, i) => (
                  <div
                    key={i}
                    className="w-full h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center overflow-hidden rounded-lg shadow-md bg-gray-100"
                  >
                    <img
                      src={img}
                      alt={`${evento.titulo} ${i + 1}`}
                      className="max-w-full max-h-full object-contain cursor-pointer transition-transform hover:scale-105"
                      onClick={() => setSelectedImage(img)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Lightbox modal: imagen ajustada a ventana */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          id="eventos-lightbox"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
          style={{ paddingBottom: `${footerHeight}px` }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-[90vw] mx-auto"
            style={{ maxHeight: `${availableHeight}px` }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Cerrar"
              className="absolute top-2 right-2 z-20 flex items-center justify-center w-9 h-9 bg-white bg-opacity-90 rounded-full shadow hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              onClick={() => setSelectedImage(null)}
            >
              {/* ícono de cerrar */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05A1 1 0 015.05 3.636L10 8.586z" clipRule="evenodd" />
              </svg>
            </button>

            {/* ajuste de imagen en el contenedor */}
            <div
              className="rounded-lg shadow-lg bg-transparent p-2 flex items-center justify-center"
              style={{ maxHeight: `${availableHeight}px`, overflow: 'auto' }}
            >
              <img
                src={selectedImage}
                alt="imagen ampliada"
                style={{ maxWidth: '100%', maxHeight: `${availableHeight}px`, width: 'auto', height: 'auto' }}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}