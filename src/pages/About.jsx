import aboutImagen from '../assets/team/about01.jpg';

export const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 text-center py-10 text-[#475C22]">
        <h1 className="text-4xl font-bold">Centro de Investigación de Artrópodos Terrestres – CINAT</h1>
      </div>

      <main className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Sección de descripción del CINAT */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#475C22] mb-4">¿Quiénes somos?</h2>
            <p className="text-[#475C22] leading-relaxed mb-4 text-justify">
              El <strong>CINAT</strong>, perteneciente a la Universidad Nacional de Colombia, es un espacio donde la ciencia y la sostenibilidad se unen
              para revalorizar la biodiversidad que habita nuestros suelos. Nuestro trabajo se enfoca en el estudio, la cría y el aprovechamiento responsable
              de artrópodos terrestres, especialmente insectos, con el fin de proponer soluciones innovadoras en alimentación, economía circular y conservación.
            </p>
          </section>

          {/* Sección sobre el enfoque y las líneas de trabajo */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#475C22] mb-4">¿Qué hacemos?</h2>
            <p className="text-[#475C22] leading-relaxed text-justify">
              Nuestras líneas de acción abarcan:
              <ul className="list-disc list-inside mt-2">
                <li>Investigación aplicada en especies de artrópodos con valor productivo y biotecnológico.</li>
                <li>Fomento del uso de insectos como fuente sostenible de proteína para humanos y animales.</li>
                <li>Acompañamiento técnico a comunidades, emprendedores e instituciones.</li>
                <li>Diseño de modelos productivos con enfoque territorial y especies nativas.</li>
                <li>Formación mediante cursos, talleres y seminarios especializados.</li>
                <li>Apoyo académico a prácticas, pasantías y proyectos de grado.</li>
              </ul>
            </p>
          </section>
        </div>

         {/* Imagen del esquema */}
         <div className="flex justify-center my-10">
            <img
              src={aboutImagen}
              alt="about"
              className="max-w-full md:max-w-3xl rounded-lg shadow-md"
            />
        </div>
      </main>
    </div>
  );
};

export default About;
