// Importar los react-icons
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    // Fondo verde institucional (igual que la navbar), texto blanco, padding y sombra
    <footer className="bg-green-800 text-white px-6 py-4 shadow-md">
      
      {/* Contenedor centrado con ancho máximo */}
      <div className="max-w-7xl mx-auto w-full">

        {/* Distribución: columna en móviles, fila en pantallas medianas y mayores */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">

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

          {/* Redes sociales con hover y transición */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Kdnastone/insect-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
              title="GitHub del proyecto"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.facebook.com/CinatUN/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
              title="Facebook de CINAT"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/insectariounal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
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
