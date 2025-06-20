//Importar los react-icons
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 text-[#ffffff] bg-[#475C22]">
      <div className="container mx-auto px-4">
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
              className="hover:text-[#52B69A]"
              title="GitHub del proyecto"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.facebook.com/CinatUN/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#52B69A]"
              title="Facebook de CINAT"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/insectariounal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#52B69A]"
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
