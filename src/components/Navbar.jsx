// importar React y otros módulos necesarios
import { useState } from "react";
import { Link } from "react-router-dom";
import CINAT from "../assets/CINAT.png"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // <--- AQUÍ

  return (
    <nav className="bg-green-800 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow-md fixed top-0 w-full z-50">
      {/* Logo + título */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center space-x-3">
          <img src={CINAT} alt="Logo CINAT UNAL" className="h-10 w-auto" />
          <h1 className="text-xl font-bold">CINAT UNAL</h1>
        </div>

        {/* Botón hamburguesa visible solo en móviles */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú de navegación */}
      <ul
        className={`w-full md:w-auto flex-col md:flex-row md:flex md:items-center md:space-x-6 text-sm mt-4 md:mt-0 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
        <li><Link to="/team">Equipo</Link></li>
        <li><Link to="/news">Noticias</Link></li>
        <li><Link to="/especies">Especies de Interés</Link></li>
        <li><Link to="/api">API</Link></li>
        <li><Link to="/recursos">Normatividad</Link></li>
        <li><Link to="/project">Sobre la página</Link></li>
      </ul>
    </nav>
  );
}
