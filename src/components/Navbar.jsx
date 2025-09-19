// importar React y otros módulos necesarios
import { useState } from "react";
import { Link } from "react-router-dom";
import CINAT from "../assets/CINAT.png"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white px-4 sm:px-6 py-3 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo + título */}
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity">
          <img src={CINAT} alt="Logo CINAT UNAL" className="h-8 sm:h-10 w-auto" />
          <h1 className="text-lg sm:text-xl font-bold">CINAT UNAL</h1>
        </Link>

        {/* Menú desktop - oculto en móvil */}
        <ul className="hidden md:flex items-center space-x-6 text-sm lg:text-base">
          <li><Link to="/" className="hover:text-green-200 transition-colors">Inicio</Link></li>
          <li><Link to="/quienes-somos" className="hover:text-green-200 transition-colors">Quiénes Somos</Link></li>
          <li><Link to="/team" className="hover:text-green-200 transition-colors">Equipo</Link></li>
          <li><Link to="/news" className="hover:text-green-200 transition-colors">Noticias</Link></li>
          <li><Link to="/especies" className="hover:text-green-200 transition-colors">Especies</Link></li>
          <li><Link to="/riesgos" className="hover:text-green-200 transition-colors">Riesgos</Link></li>
          <li><Link to="/api" className="hover:text-green-200 transition-colors">API</Link></li>
          <li><Link to="/recursos" className="hover:text-green-200 transition-colors">Recursos</Link></li>
          <li><Link to="/project" className="hover:text-green-200 transition-colors">Sobre la Página</Link></li>
        </ul>

        {/* Botón hamburguesa: visible solo en móvil y pantallas pequeñas */}
        <button
          className="md:hidden text-white focus:outline-none p-2"
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

      {/* Menú móvil desplegable */}
      {isOpen && (
        // Contenedor del menú móvil, se agrega pb-16 en el contenedor y pb-8 en la lista
        // asegurando que haya suficiente espacio en la parte inferior del menú móvil 
        // para evitar que la barra de navegación del navegador tape las opciones cuando aparece al hacer hover.
        <div className="md:hidden mt-4 pb-16 border-t border-green-700 max-h-screen overflow-y-auto">
          <ul className="flex flex-col space-y-3 pt-4 text-sm pb-8">
            <li><Link to="/" className="block py-2  hover:bg-green-400  hover:text-black transition-colors" onClick={() => setIsOpen(false)}>Inicio</Link></li>
            <li><Link to="/quienes-somos" className="block py-2 hover:bg-green-400  hover:text-black  transition-colors" onClick={() => setIsOpen(false)}>Quiénes Somos</Link></li>
            <li><Link to="/team" className="block py-2 hover:bg-green-400  hover:text-black  transition-colors" onClick={() => setIsOpen(false)}>Equipo</Link></li>
            <li><Link to="/news" className="block py-2 hover:bg-green-400  hover:text-black transition-colors" onClick={() => setIsOpen(false)}>Noticias</Link></li>
            <li><Link to="/especies" className="block py-2 hover:bg-green-400  hover:text-black  transition-colors" onClick={() => setIsOpen(false)}>Especies de Interés</Link></li>
            <li><Link to="/riesgos" className="block py-2 hover:bg-green-400  hover:text-black  transition-colors" onClick={() => setIsOpen(false)}>Riesgos</Link></li>
            <li><Link to="/api" className="block py-2 hover:bg-green-400  hover:text-black  transition-colors" onClick={() => setIsOpen(false)}>API</Link></li>
            <li><Link to="/recursos" className="block py-2 hover:bg-green-400  hover:text-black transition-colors" onClick={() => setIsOpen(false)}>Normatividad</Link></li>
            <li><Link to="/project" className="block py-2 hover:bg-green-400  hover:text-black  transition-colors" onClick={() => setIsOpen(false)}>Sobre la página</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}