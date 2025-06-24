import team01 from "../assets/team/team01.jpg"

export const Team = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 text-center py-10 text-[#475C22]">
        <h1 className="text-4xl font-bold">Equipo de Desarrollo</h1>
      </div>

      <main className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sección de descripción del equipo */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#475C22] mb-4">Sobre el Equipo</h2>
            <p className="text-[#475C22] leading-relaxed text-justify mb-4">
              Este proyecto es desarrollado por un equipo interdisciplinario con formación en zootecnia, entomología agrícola, desarrollo de software y comunicación científica.<br />
              Nos une el compromiso de aplicar el conocimiento y la tecnología para promover la sostenibilidad y fortalecer la divulgación científica, 
              especialmente en torno a los insectos como recurso estratégico para el futuro.<br />
              Cada integrante aporta una mirada única: desde la comprensión profunda de los sistemas productivos, biológicos y ecológicos, hasta la capacidad de transformar datos en 
              herramientas interactivas y accesibles. Esta sinergia nos permite crear soluciones digitales que no solo informan, sino que también educan, inspiran y conectan a distintos 
              públicos: investigadores, productores, estudiantes y ciudadanía en general.<br />
              Creemos en el valor del trabajo colaborativo, en la ciencia abierta y en la importancia de visibilizar la biodiversidad como un activo bioeconómico y cultural. <br />
              Es por ello que *Insect Hub* no es solo una plataforma tecnológica, también es una propuesta para acercar la entomología al presente y futuro de nuestras comunidades.
            </p>
            <p className="text-[#475C22] leading-relaxed text-justify mb-6">
              Las personas que conforman este equipo poseen habilidades en análisis de datos, diseño de interfaces, gestión de información biológica y desarrollo de aplicaciones web.
              La sección dedicada a mostrar cada perfil está en construcción, pero pronto podrás conocer a quienes están detrás de esta iniciativa.
            </p>

            {/* Imagen temporal del equipo */}
            <div className="flex justify-center">
              <img
                src={team01}
                alt="Integrantes del equipo"
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </div>
          </section>

          {/* Sección sobre el estado del desarrollo */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#475C22] mb-4">Estado de esta Sección</h2>
            <p className="text-[#475C22] leading-relaxed text-justify">
              Esta sección se encuentra actualmente en construcción. Estamos preparando una presentación detallada del equipo, sus perfiles, roles y aportes a este proyecto.
              Agradecemos tu paciencia mientras terminamos de organizar esta información.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Team;
