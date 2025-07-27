//Importar los react-icons
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    /* Responsive footer */
    <footer className="fixed bottom-0 left-0 w-full bg-green-800 text-white py-2 sm:py-3 md:py-4 z-40">
      <div className="w-full max-w-screen-xl mx-auto px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-4 md:gap-6">

          {/* Información institucional */}
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-lg md:text-xl font-bold">CINAT</p>
            <p className="text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} - Todos los derechos reservados.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="flex items-center gap-1 sm:gap-2 text-center">
            <FaEnvelope className="text-xs sm:text-sm md:text-base" />
            <span className="text-xs sm:text-sm break-all">cinat_fmvzbog@unal.edu.co</span>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-3 sm:gap-4 md:gap-6">
            <a
              href="https://github.com/Kdnastone/insect-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#79a72a] transition-colors"
              title="GitHub del proyecto"
            >
              <FaGithub className="text-sm sm:text-lg md:text-xl" />
            </a>
            <a
              href="https://www.facebook.com/CinatUN/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#79a72a] transition-colors"
              title="Facebook de CINAT"
            >
              <FaFacebook className="text-sm sm:text-lg md:text-xl" />
            </a>
            <a
              href="https://www.instagram.com/insectariounal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#79a72a] transition-colors"
              title="Instagram de CINAT"
            >
              <FaInstagram className="text-sm sm:text-lg md:text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;