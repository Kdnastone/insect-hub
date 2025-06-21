//Importar los componentes requeridos
import { useState } from "react";
import { especies } from "../../data/especies";
import SpeciesCard from "./SpeciesCard";
import FilterMenu from "./FilterMenu";

const Gallery = () => {
  // Estados para los filtros
  const [ordenSeleccionado, setOrdenSeleccionado] = useState("Todos");
  const [origenSeleccionado, setOrigenSeleccionado] = useState("Todos");
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  // Extrae órdenes únicos desde los datos
  const ordenesUnicos = [...new Set(especies.map(e => e.orden))];
  const origenesUnicos = [...new Set(especies.map(e => e.origen))];

  // Aplica filtros según selección
  const especiesFiltradas = especies.filter((e) => {
    const coincideOrden = ordenSeleccionado === "Todos" || e.orden === ordenSeleccionado;
    const coincideOrigen = origenSeleccionado === "Todos" || e.origen === origenSeleccionado;
    return coincideOrden && coincideOrigen;
  });

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-10">
      {/* Título */}
      <h1 className="text-4xl text-center text-[#475C22] font-bold mb-6">
        Especies en Consideración Normativa
      </h1>

      {/* Menú de filtros */}
      <FilterMenu
        orders={ordenesUnicos}
        selectedOrder={ordenSeleccionado}
        setSelectedOrder={setOrdenSeleccionado}
        origins={origenesUnicos}
        selectedOrigin={origenSeleccionado}
        setSelectedOrigin={setOrigenSeleccionado}
      />

      {/* Renderizado de tarjetas, Al hacer clic se abre el modal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {especiesFiltradas.map((especie) => (
          <SpeciesCard
            key={especie.id}
            especie={especie}
            onClick={() => setImagenSeleccionada(especie)}
          />
        ))}
      </div>

      {/* Modal para mostrar imagen grande */}
      {imagenSeleccionada && (
        <div
         // Cierra modal al hacer clic fuera
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setImagenSeleccionada(null)}
        >
          <div
             // Evita que clics dentro cierren el modal
            className="bg-white rounded-lg p-4 max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón para cerrar */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
              onClick={() => setImagenSeleccionada(null)}
            >
              ✕
            </button>

            {/* Imagen grande */}
            <img
              src={`/src/assets/especies/${imagenSeleccionada.imagen}`}
              alt={imagenSeleccionada.nombreComun}
              className="w-full object-contain max-h-[80vh] mx-auto"
            />

            {/* Nombre común y científico */}
            <h2 className="text-center text-2xl font-bold text-[#475C22] mt-4">
              {imagenSeleccionada.nombreComun}
            </h2>
            <p className="text-center italic text-gray-600">
              {imagenSeleccionada.nombreCientifico}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
