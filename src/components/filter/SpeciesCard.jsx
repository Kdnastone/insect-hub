const SpeciesCard = ({ especie }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 text-center">
      {/* Imagen de la especie */}
      <img
        src={`/src/assets/especies/${especie.imagen}`}
        alt={especie.nombreComun}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      {/* Nombre común */}
      <h3 className="text-lg font-bold text-[#475C22]">{especie.nombreComun}</h3>
      {/* Nombre científico */}
      <p className="italic text-sm text-gray-600">{especie.nombreCientifico}</p>
    </div>
  );
};

export default SpeciesCard;
