//Importar React y hooks necesarios
import { useState } from "react";
import  especies  from "../../data/especies";
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

  // Filtra especies según selección Y ordena por ID
  const especiesFiltradas = especies
    .filter((e) => {
      const coincideOrden = ordenSeleccionado === "Todos" || e.orden === ordenSeleccionado;
      const coincideOrigen = origenSeleccionado === "Todos" || e.origen === origenSeleccionado;
      return coincideOrden && coincideOrigen;
    })
    .sort((a, b) => a.id - b.id); // Ordenar por ID de menor a mayor


  // Combina datos al hacer clic en tarjeta - CORREGIDO PARA PRESERVAR IMAGEN
  const handleCardClick = (especie) => {
    console.log('Especie clickeada:', especie);
    console.log('Todas las fichas:', fichas);
    console.log('Buscando:', especie.nombreCientifico.trim().toLowerCase());
    
    const fichaExtra = fichas.find(f => {
      // Eliminar etiquetas HTML de ambos nombres para comparar
      const fichaName = f.nombreCientifico.replace(/<[^>]*>/g, '').trim().toLowerCase();
      const especieName = especie.nombreCientifico.replace(/<[^>]*>/g, '').trim().toLowerCase();
      console.log('Comparando:', fichaName, '===', especieName);
      return fichaName === especieName;
    });
    
    console.log('Ficha encontrada:', fichaExtra);
    
    // importar la imagen de la especie
    const especieCompleta = { 
      ...fichaExtra,  // Primero los datos completos de fichas.js
      ...especie,     // Luego los datos básicos de especies.js (incluyendo imagen)
      id: especie.id  // Asegurar que mantenga el ID original
    };
    
    console.log('Especie completa:', especieCompleta);
    console.log('Imagen final:', especieCompleta.imagen);
    setEspecieSeleccionada(especieCompleta);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-10">
      <h1 className="text-4xl text-center text-green-800 font-bold mb-6">
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