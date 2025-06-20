export const Regulations = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 text-center py-10 text-[#475C22]">
        <h1 className="text-4xl font-bold">API Pública de Algunos Insectos de Interés</h1>
      </div>

      <main className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sección de descripción de la API */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#475C22] mb-4">Descripción</h2>
            <p className="text-[#475C22] leading-relaxed mb-4">
              <strong>insectos_cinat</strong> es una API desarrollada con fines educativos y de divulgación.
            </p>
            <p className="text-[#475C22] leading-relaxed text-justify">
              Esta API almacenará el nombre científico y común de diversas especies de insectos de interés,
              información sobre su distribución geográfica en Colombia, principales servicios ecosistémicos asociados
              y posibles usos en sectores productivos como la agricultura, salud, alimentación, entre otros.
            </p>
          </section>

          {/* Sección sobre el estado del desarrollo */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#475C22] mb-4">Estado del Desarrollo</h2>
            <p className="text-[#475C22] leading-relaxed text-justify">
              Actualmente en proceso de desarrollo. Se están estructurando los endpoints, validando datos
              y preparando la documentación técnica para su publicación.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Regulations;
