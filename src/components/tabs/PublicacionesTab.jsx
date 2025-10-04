// importaciones necesarias
import { publicaciones }  from '../../data/articulos';

export default function EventosTab() {
  const eventos = publicaciones;

  // Ordenar publicaciones por fecha (más reciente primero)
  const publicacionesOrdenadas = publicaciones.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  return (
    <>
      {publicacionesOrdenadas.map((publicacion) => (
        <div key={publicacion.id} className="border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
          <h2 className="font-semibold text-lg sm:text-xl text-green-800 mb-2 sm:mb-3 whitespace-pre-wrap text-center">
            {publicacion.titulo}
          </h2>
          <p className="text-sm text-gray-950 mb-2">
            <span className="font-medium">Autores:</span> {publicacion.autores}
          </p>
          <p className="text-xs sm:text-sm text-green-900 font-medium mb-3">
            {publicacion.year}
          </p>
          {publicacion.vinculo && (
            <a 
              href={publicacion.vinculo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Ver publicación
            </a>
          )}
        </div>
      ))}
    </>
  );
}