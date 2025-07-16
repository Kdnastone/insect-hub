//Importar los react-icons
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  // Componente de pie de página
  // Contiene información institucional, contacto y enlaces a redes sociales
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-green-800 text-white text-center z-50">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        {/* Contenedor principal en columna en móviles y fila en pantallas medianas */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-center sm:text-left gap-6">

          {/* Información institucional */}
          <div>
            <p className="text-xl font-bold">CINAT</p>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} - Todos los derechos reservados.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span className="text-sm">cinat_fmvzbog@unal.edu.co</span>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Kdnastone/insect-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#79a72a]"
              title="GitHub del proyecto"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.facebook.com/CinatUN/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#79a72a]"
              title="Facebook de CINAT"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/insectariounal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#79a72a]"
              title="Instagram de CINAT"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
