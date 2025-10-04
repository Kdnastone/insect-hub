export default function ProyectosTab() {
  const proyectos = [
    {
      id: 1,
      titulo: "Web y API de especies de interés",
      descripcion: "Proyecto para la divulgación estructurada de especies de insectos con valor científico y productivo."
    }
    
  ];

  return (
    <>
      {proyectos.map((proyecto) => (
        <div key={proyecto.id} className="border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
          <h2 className="font-semibold text-lg sm:text-xl text-green-800 mb-2 sm:mb-3 whitespace-pre-wrap text-center">
            {proyecto.titulo}
          </h2>
          <p className="text-sm sm:text-base text-gray-950">
            {proyecto.descripcion}
          </p>
        </div>
      ))}
    </>
  );
}