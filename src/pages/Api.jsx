import apiSchemeImage from '../assets/api_scheme.png';

export const Api = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 text-center py-10 text-[#475C22]">
        <h1 className="text-4xl font-bold">API Pública de Algunos Insectos de Interés</h1>
      </div>

      <main className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sección de descripción */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#475C22] mb-4">Descripción</h2>
            <p className="text-[#475C22] leading-relaxed mb-4">
              <strong>insectos_cinat</strong> es una API desarrollada con fines educativos y de divulgación.
            </p>
            <p className="text-[#475C22] leading-relaxed text-justify">
              Esta API almacenará el nombre científico y común de diversas especies de insectos de interés...
            </p>
          </section>

          {/* Estado del desarrollo */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#475C22] mb-4">Estado del Desarrollo</h2>
            <p className="text-[#475C22] leading-relaxed text-justify">
              Actualmente en proceso de desarrollo...
            </p>
          </section>
        </div>

        {/* Imagen del esquema */}
        <div className="flex justify-center my-10">
          <img
            src={apiSchemeImage}
            alt="Esquema de la API"
            className="max-w-full md:max-w-3xl rounded-lg shadow-md"
          />
        </div>
      </main>
    </div>
  );
};

export default Api;
