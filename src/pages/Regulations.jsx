export const Regulations = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 text-center py-10 text-[#475C22]">
        <h1 className="text-4xl font-bold">Normatividad para el Manejo de Insectos en Colombia</h1>
      </div>

      <main className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sección de descripción de la normatividad */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#475C22] mb-4">Descripción</h2>
            <p className="text-[#475C22] leading-relaxed mb-4 text-justify">
              En Colombia, el uso de insectos en producción animal, alimentación, agricultura y salud se encuentra en proceso de formalización normativa. Durante los últimos meses, distintas instituciones, entre ellas el <strong>CINAT</strong>, han trabajado en propuestas regulatorias que buscan incluir a los insectos dentro de los marcos legales existentes en bioseguridad, inocuidad alimentaria, producción animal y medio ambiente.
            </p>
            <p className="text-[#475C22] leading-relaxed text-justify">
              Aunque no existe aún una normatividad específica para insectos en todos los usos posibles, actualmente se aplican criterios derivados de normas sobre alimentos, especies no convencionales, bioinsumos, farmacología y producción sostenible.
            </p>
          </section>

          {/* Estado actual del desarrollo normativo */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#475C22] mb-4">Estado del Desarrollo</h2>
            <p className="text-[#475C22] leading-relaxed text-justify">
              Actualmente se están adelantando diálogos interinstitucionales con el ICA, el INVIMA, el Ministerio de Agricultura, el Ministerio de Ambiente y otras entidades. Se espera avanzar hacia la consolidación de una resolución que permita la producción, transformación y comercialización de especies como <em>Tenebrio molitor</em>, reconocidas por su potencial bioeconómico.
            </p>
            <p className="text-[#475C22] leading-relaxed text-justify mt-2">
              También se trabaja en lineamientos para la trazabilidad, evaluación de riesgos, bioseguridad y requisitos sanitarios aplicables a este tipo de producción no convencional.
            </p>
          </section>
        </div>

        {/* Nueva sección: Normas clave */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-3xl font-bold text-[#475C22] mb-4 text-center">Normas Relevantes</h2>
          <ul className="text-[#475C22] list-disc list-inside leading-relaxed text-justify">
            <li><strong>Decreto 1608 de 1978</strong> – Reglamenta aspectos del Código Sanitario Nacional.</li>
            <li><strong>Ley 09 de 1979</strong> – Código Sanitario Nacional de Colombia.</li>
            <li><strong>CODEX STAN 192 de 1995</strong> – Norma general para el etiquetado de alimentos preenvasados (Codex Alimentarius).</li>
            <li><strong>Decreto 3075 de 1997</strong> – Reglamenta condiciones sanitarias para la fabricación y comercialización de alimentos.</li>
            <li><strong>Ley 611 de 2000</strong> – Fomenta el desarrollo sostenible del sector agropecuario.</li>
            <li><strong>Decreto 309 de 2000</strong> – Reglamenta el funcionamiento de los laboratorios de salud pública.</li>
            <li><strong>Resolución 68 de 2002</strong> – Establece requisitos para establecimientos que procesan alimentos.</li>
            <li><strong>Decreto 4003 de 2004</strong> – Reglamenta aspectos del INVIMA.</li>
            <li><strong>Decreto 4688 de 2005</strong> – Regula la inspección, vigilancia y control de alimentos.</li>
            <li><strong>CONPES 3375 de 2005</strong> – Política nacional de sanidad agropecuaria e inocuidad.</li>
            <li><strong>Resolución 923 de 2007</strong> – Requisitos sanitarios para alimentos de origen animal.</li>
            <li><strong>Ley 165 de 1994</strong> – Aprueba el Convenio sobre la Diversidad Biológica.</li>
            <li><strong>Ley 165 de 2010</strong> – Aprueba el Protocolo de Nagoya sobre acceso a recursos genéticos.</li>
            <li><strong>Decreto 2372 de 2010</strong> – Regula el Sistema Nacional de Áreas Protegidas.</li>
            <li><strong>Decreto 3573 de 2011</strong> – Crea la ANLA (Autoridad Nacional de Licencias Ambientales).</li>
            <li><strong>Resolución 683 de 2012</strong> – Requisitos para establecimientos que manipulan alimentos.</li>
            <li><strong>Resolución 2674 de 2013</strong> – Requisitos sanitarios para alimentos procesados.</li>
            <li><strong>Decreto 1376 de 2013</strong> – Regula el uso de insecticidas y plaguicidas.</li>
            <li><strong>Decreto 2041 de 2014</strong> – Regula licencias ambientales.</li>
            <li><strong>Decreto 1076 de 2015</strong> – Decreto Único Reglamentario del sector Ambiente.</li>
            <li><strong>Resolución 705 de 2015</strong> – Requisitos para alimentos importados.</li>
            <li><strong>Resolución 1912 de 2017</strong> – Reglamenta el uso de ingredientes no tradicionales en alimentos.</li>
            <li><strong>Resolución 68370 de 2020</strong> – Lineamientos para bioseguridad en producción animal.</li>
            <li><strong>Resolución 115708 de 2021</strong> – Regula el uso de insectos en alimentación animal.</li>
            <li><strong>Resolución 2492 de 2022</strong> – Establece requisitos para alimentos funcionales.</li>
            <li><strong>Resolución 19650 de 2022</strong> – Regula el uso de <em>Tenebrio molitor</em> en alimentos.</li>
            <li><strong>Ley 274 de 2023</strong> – Promueve el uso sostenible de la biodiversidad.</li>
            <li><strong>Actas 5, 15, 16 de 2019 y 4 de 2020</strong> – Discusiones técnicas del Comité Nacional de Inocuidad.</li>
            <li><strong>Resolución 599 de 1998</strong> – Reglamenta el control de plaguicidas.</li>
            <li><strong>Resolución 243711 de 1999</strong> – Regula el etiquetado de alimentos.</li>
            <li><strong>Resolución 253241 de 2000</strong> – Control de calidad en alimentos.</li>
            <li><strong>Resolución 187 de 2006</strong> – Requisitos para alimentos importados.</li>
            <li><strong>Resolución 770 de 2014</strong> – Reglamenta alimentos para animales.</li>
            <li><strong>Resolución 199 de 2016</strong> – Regula alimentos con ingredientes novedosos.</li>
            <li><strong>Ley 99 de 1993</strong> – Crea el Ministerio del Medio Ambiente y el SINA.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Regulations;
