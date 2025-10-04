// importar fa iconos necesarios
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    /* En móviles: relativo (en flujo). En sm+: fixed abajo */
    <footer
      className="relative sm:fixed bottom-0 left-0 w-full bg-green-800 text-white z-50 overflow-visible"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 12px)' }}
    >
      <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-4 py-3 sm:py-2 min-h-[64px] sm:min-h-[48px]">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-2">

          {/* Información institucional */}
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm font-bold">CINAT</p>
            <p className="text-xs hidden sm:block">
              &copy; {new Date().getFullYear()} - Todos los derechos reservados.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="flex items-center gap-1 text-center">
            <FaEnvelope className="text-xs" />
            <span className="text-xs break-all">cinat_fmvzbog@unal.edu.co</span>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-2 sm:gap-3">
            <a
              href="https://github.com/Kdnastone/insect-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#79a72a] transition-colors"
              title="GitHub del proyecto"
            >
              <FaGithub className="text-sm" />
            </a>
            <a
              href="https://www.facebook.com/CinatUN/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#79a72a] transition-colors"
              title="Facebook de CINAT"
            >
              <FaFacebook className="text-sm" />
            </a>
            <a
              href="https://www.instagram.com/insectariounal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#79a72a] transition-colors"
              title="Instagram de CINAT"
            >
              <FaInstagram className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;