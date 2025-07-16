// Crear un componente SpeciesCard que muestre la información de cada especie
const SpeciesCard = ({ especie, onClick }) => {
  return (
    // Estructura de la tarjeta
    // Tarjeta con imagen, nombre común, nombre científico y origen
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden p-4 text-center cursor-pointer hover:shadow-xl transition"
    >
      {/* Imagen de la especie */}
      <img
        src={`/assets/especies/${especie.imagen}`}
        alt={especie.nombreComun}
        className="w-full h-48 object-contain rounded-lg mb-4"
      />
      {/* Información de la especie */}
      <h3 className="text-lg font-bold text-[#475C22]">{especie.nombreComun}</h3>
      <p className="italic text-sm text-gray-600 mb-2">{especie.nombreCientifico}</p>
      {especie.origen && (
        <div className="flex justify-center">
          <span className="bg-yellow-100 px-3 py-1 rounded-full text-sm">
            🌍 {especie.origen}
          </span>
        </div>
      )}
    </div>
  );
};

export default SpeciesCard;
