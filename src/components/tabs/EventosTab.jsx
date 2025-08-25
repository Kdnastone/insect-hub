export default function EventosTab() {
  const eventos = [
    {
      id: 1,
      titulo: "Presentación Avances Normativos 2025",
      fecha: "septiembre 9 de 2025",
      descripcion: "Presentación de los avances en la regulación, producción y aplicación de algunos insectos en Colombia."
    }

  ];

  return (
    <>
      {eventos.map((evento) => (
        <div key={evento.id} className="border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
          <h2 className="font-semibold text-lg sm:text-xl text-green-800 mb-2 sm:mb-3">
            {evento.titulo}
          </h2>
          <p className="text-xs sm:text-sm text-green-800 font-medium mb-2">
            {evento.fecha}
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            {evento.descripcion}
          </p>
        </div>
      ))}
    </>
  );
}