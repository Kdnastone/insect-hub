// Componente que muestra una tarjeta con imagen y nombre
const SpeciesCard = ({ especie, onClick }) => {
  return (
    <div
     // Maneja clic para abrir modal
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden p-4 text-center cursor-pointer hover:shadow-xl transition"
    >
      {/* Imagen */}
      <img
        src={`/src/assets/especies/${especie.imagen}`}
        alt={especie.nombreComun}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Nombre común y científico */}
      <h3 className="text-lg font-bold text-[#475C22]">{especie.nombreComun}</h3>
      <p className="italic text-sm text-gray-600">{especie.nombreCientifico}</p>
    </div>
  );
};

export default SpeciesCard;
