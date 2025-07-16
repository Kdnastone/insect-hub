//Importar React y hooks necesarios
import { useState } from "react";
import { especies } from "../../data/especies";
import { fichas } from "../../data/fichas";
import SpeciesCard from "./SpeciesCard";
import FilterMenu from "./FilterMenu";
import SpeciesModal from "./SpeciesModal";

const Gallery = () => {
  // Filtros
  const [ordenSeleccionado, setOrdenSeleccionado] = useState("Todos");
  const [origenSeleccionado, setOrigenSeleccionado] = useState("Todos");

  // Estado del modal
  const [especieSeleccionada, setEspecieSeleccionada] = useState(null);

  // Opciones únicas
  const ordenesUnicos = [...new Set(especies.map(e => e.orden))];
  const origenesUnicos = [...new Set(especies.map(e => e.origen))];

  // Filtra especies según selección
  const especiesFiltradas = especies.filter((e) => {
    const coincideOrden = ordenSeleccionado === "Todos" || e.orden === ordenSeleccionado;
    const coincideOrigen = origenSeleccionado === "Todos" || e.origen === origenSeleccionado;
    return coincideOrden && coincideOrigen;
  });

  // Combina datos al hacer clic en tarjeta
  const handleCardClick = (especie) => {
    const fichaExtra = fichas.find(f => 
      f.nombreCientifico.trim().toLowerCase() === especie.nombreCientifico.trim().toLowerCase()
    );
    const especieCompleta = { ...especie, ...fichaExtra };
    setEspecieSeleccionada(especieCompleta);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-10">
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

      {/* Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {especiesFiltradas.map((especie) => (
          <SpeciesCard
            key={especie.nombreCientifico}
            especie={especie}
            onClick={() => handleCardClick(especie)}
          />
        ))}
      </div>

      {/* Modal */}
      {especieSeleccionada && (
        <SpeciesModal
          especie={especieSeleccionada}
          onClose={() => setEspecieSeleccionada(null)}
        />
      )}
    </div>
  );
};

export default Gallery;