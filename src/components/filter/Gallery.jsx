//Importar las dependencias requeridas
import { useState } from "react";
import { especies } from "../../data/especies";
import SpeciesCard from "./SpeciesCard";
import FilterMenu from "./FilterMenu";

const Gallery = () => {
  // Estados para guardar el filtro seleccionado
  const [ordenSeleccionado, setOrdenSeleccionado] = useState("Todos");
  const [origenSeleccionado, setOrigenSeleccionado] = useState("Todos");

  // Extraer valores únicos de orden y origen desde los datos
  const ordenesUnicos = [...new Set(especies.map(e => e.orden))];
  const origenesUnicos = [...new Set(especies.map(e => e.origen))];

  // Aplicar filtros a la lista de especies
  const especiesFiltradas = especies.filter((e) => {
    const coincideOrden =
      ordenSeleccionado === "Todos" || e.orden === ordenSeleccionado;
    const coincideOrigen =
      origenSeleccionado === "Todos" || e.origen === origenSeleccionado;
    return coincideOrden && coincideOrigen;
  });

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-10">
      <h1 className="text-4xl text-center text-[#475C22] font-bold mb-6">
        Especies en Consideración Normativa
      </h1>

      {/* Renderizar los filtros */}
      <FilterMenu
        orders={ordenesUnicos}
        selectedOrder={ordenSeleccionado}
        setSelectedOrder={setOrdenSeleccionado}
        origins={origenesUnicos}
        selectedOrigin={origenSeleccionado}
        setSelectedOrigin={setOrigenSeleccionado}
      />

      {/* Mostrar tarjetas filtradas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {especiesFiltradas.map((especie) => (
          <SpeciesCard key={especie.id} especie={especie} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
