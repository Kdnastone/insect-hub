// Componente SpeciesCard recibe una "especie" como prop
const SpeciesCard = ({ especie }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 text-center">
      {/* Imagen de la especie.
          Usamos una ruta relativa desde la carpeta "public/assets/especies".
          Esto es esencial para que funcione en producción Netlify*/}
      <img
        src={`/assets/especies/${especie.imagen}`}
        alt={especie.nombreComun}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Nombre común de la especie, en negrita */}
      <h3 className="text-lg font-bold text-[#475C22]">
        {especie.nombreComun}
      </h3>

      {/* Nombre científico en cursiva y más tenue */}
      <p className="italic text-sm text-gray-600">
        {especie.nombreCientifico}
      </p>
    </div>
  );
};

// Exportamos el componente para que pueda ser usado en otros archivos
export default SpeciesCard;
