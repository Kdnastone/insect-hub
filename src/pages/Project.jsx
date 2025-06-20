import profileImage from '../assets/profile.jpg';

export const Project = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 text-center py-10 text-[#475C22]">
        <h1 className="text-4xl font-bold">Sobre la Desarrolladora</h1>
      </div>

      <main className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen de perfil */}
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Sandra Cadena"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Descripción */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#475C22] mb-4">Presentación</h2>
            <p className="text-[#475C22] leading-relaxed text-justify mb-4">
              Este trabajo forma parte de la etapa práctica del SENA, requisito para obtener el título de <strong>Tecnóloga en Análisis y Desarrollo de Software</strong>.
              Es un proyecto educativo y de divulgación científica que conecta el mundo del desarrollo web con el conocimiento biológico de los insectos de interés en Colombia.
            </p>
            <p className="text-[#475C22] leading-relaxed text-justify">
              Fue desarrollado por <strong>Sandra Cadena</strong>, bióloga con énfasis en control biológico, apasionada por los artrópodos, la investigación aplicada y la sostenibilidad.
              Actualmente se encuentra enfocada en la creación de soluciones tecnológicas orientadas a la agricultura, la educación y la bioeconomía, integrando herramientas digitales
              con el conocimiento científico y territorial.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Project;
