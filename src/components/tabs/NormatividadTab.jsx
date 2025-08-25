export default function NormatividadTab() {
  const normativas = [
    {
      id: 1,
      titulo: "Análisis normativo para la cría de insectos",
      descripcion: "Propuesta regulatoria para categorizar especies y facilitar el marco legal de producción de insectos."
    },
    {
      id: 2,
      titulo: "Marco regulatorio de bioseguridad",
      descripcion: "Lineamientos para el manejo seguro de especies de insectos en laboratorio y producción."
    }
   
  ];

  return (
    <>
      {normativas.map((normativa) => (
        <div key={normativa.id} className="border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
          <h2 className="font-semibold text-lg sm:text-xl text-green-800 mb-2 sm:mb-3">
            {normativa.titulo}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {normativa.descripcion}
          </p>
        </div>
      ))}
    </>
  );
}