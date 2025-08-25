export default function PublicacionesTab() {
  const publicaciones = [
    {
      id: 1,
      titulo: "Flies Are what They Eat: Tailoring Nutrition of Black Soldier Fly (Hermetia Illucens L.) for Larval Biomass Production and Fitness",
      autores: "Karol B Barragán-Fonseca",
      fecha: "2018/06/25",
      enlace: "https://www.proquest.com/openview/83c4bf95d6bf5294703645aa778553c4/1.pdf?pq-origsite=gscholar&cbl=2026366&diss=y#page=85"
    },
    {
      id: 2,
      titulo: "Navigating social, environmental, and economic complexities of insect farming to contribute to sustainable agrifood systems",
      autores: "Cristancho-Sánchez, Sonia V.; Barragán-Fonseca, Karol B.",
      fecha: "2018/06/09",
      enlace: "https://www.researchgate.net/publication/342048307_Analisis_del_sistema_de_aprovechamiento_del_gusano_mojojoy_Rhynchophorus_palmarum_Coleoptera_Curculionidae_en_el_Municipio_de_Leticia_Amazonas_Colombia"
    }
  ];

  // Ordenar publicaciones por fecha (más reciente primero)
  const publicacionesOrdenadas = publicaciones.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  return (
    <>
      {publicacionesOrdenadas.map((publicacion) => (
        <div key={publicacion.id} className="border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
          <h2 className="font-semibold text-lg sm:text-xl text-green-800 mb-2 sm:mb-3">
            {publicacion.titulo}
          </h2>
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-medium">Autores:</span> {publicacion.autores}
          </p>
          <p className="text-xs sm:text-sm text-green-800 font-medium mb-3">
            {new Date(publicacion.fecha).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          {publicacion.enlace && (
            <a 
              href={publicacion.enlace} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Ver publicación
            </a>
          )}
        </div>
      ))}
    </>
  );
}