export default function EventosTab() {
  const eventos = [
    {
      id: 1,
      titulo: "Gran Encuentro Nacional para la Reglamentación de Insectos en Colombia",
      fecha: "octubre 15 de 2025",
      descripcion: "Este espacio busca articular ciencia, tecnología e innovación para avanzar en la consolidación de una ruta regulatoria que impulse el uso de insectos como fuente de proteína sostenible, agentes de biocontrol y regeneradores del suelo, en beneficio de la seguridad alimentaria, la sostenibilidad y el desarrollo rural. Su participación será de gran valor para la construcción colectiva de esta agenda estratégica.",
    }

  ];

  return (
    <>
      {eventos.map((evento) => (
        <div key={evento.id} className="border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
          <h2 className="font-semibold text-lg sm:text-xl text-green-800 mb-2 sm:mb-3 whitespace-pre-wrap text-center">
            {evento.titulo}
          </h2>
          <p className="text-xs sm:text-sm text-green-900 font-medium mb-2">
            {evento.fecha}
          </p>
          <p className="text-sm sm:text-base text-gray-950 whitespace-pre-wrap text-justify">
            {evento.descripcion}
          </p>
        </div>
      ))}
    </>
  );
}