import { Header } from '../components/basics/Header';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="container mx-auto mt-6">
      <Header />

      {/* Enlaces externos a plataformas clave */}
      <div className="mt-8 flex justify-center space-x-6 mb-6">
        <a
          href="https://www.gbif.org/es/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-[#475C22] text-white rounded-lg hover:bg-[#79a72a] transition-colors text-xl"
        >
          Explorar en GBIF
        </a>

        <a
          href="https://ipt.biodiversidad.co/sib/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-[#475C22] text-white rounded-lg hover:bg-[#79a72a] transition-colors text-xl"
        >
          Conectar con SiB Colombia
        </a>
      </div>

      {/* Bloque de bienvenida */}
      <div className="bg-[#D9ED92] shadow-lg rounded-lg p-6 mt-6 max-w-3xl mx-auto mb-6">
        <p className="text-lg text-gray-700 text-center">
          Esta página fue creada para acompañar y fortalecer el proceso que lidera el Centro de Investigación de Artrópodos Terrestres (CINAT), 
          en colaboración con los Ministerios y entidades aliadas, en la construcción de un marco normativo para la obtención, producción, 
          transformación y comercialización de insectos en Colombia. <br />
          Aquí podrá encontrar avances, documentación, especies de interés y herramientas abiertas que apoyan una regulación técnica, participativa
          y basada en evidencia.
        </p>
      </div>
    </div>
  );
};

export default Home;
