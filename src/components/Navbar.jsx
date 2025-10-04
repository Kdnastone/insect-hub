// importar React y hooks
import { useState } from "react";
import { Link } from "react-router-dom";
import CINAT from "../assets/CINAT.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTranslate = (lang = "en", openInNewTab = true) => {
    try {
      console.log("handleTranslate called", { host: window.location.host, href: window.location.href });

      // Detectar si estamos en local o en producción
      const isLocal = /localhost|127\.0\.0\.1/.test(window.location.hostname);
      const prodHost = "insect-hub-netlify-app";
      const rawHost = isLocal ? prodHost : window.location.host.replace(/\./g, "-");

      const translatedHost = `${rawHost}.translate.goog`;
      const pathname = window.location.pathname || "/";
      const search = window.location.search || "";
      const hash = window.location.hash || "";
      const params = `_x_tr_sl=es&_x_tr_tl=${encodeURIComponent(lang)}&_x_tr_hl=es&_x_tr_pto=wapp`;
      const sep = search ? "&" : "?";
      const url = `https://insect--hub-netlify-app.translate.goog/?_x_tr_sl=es&_x_tr_tl=en&_x_tr_hl=es&_x_tr_pto=wapp`;

      if (openInNewTab) window.open(url, "_blank");
      else window.location.href = url;
    } catch (err) {
      console.error(err);
    }
  };

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

        {/* Botón traducir para desktop (compacto) */}
        <button
          onClick={() => handleTranslate("en", false)}
          className="hidden md:inline-flex ml-0 bg-white text-green-800 px-2 py-0.5 rounded text-sm h-8 items-center justify-center hover:opacity-90 transition"
          aria-label="Traducir a Inglés"
        >
          Traducir
        </button>

        {/* Botón traducir para móvil (pequeño): visible solo en < md */}
        <button
          onClick={() => handleTranslate("en", false)}
          className="md:hidden ml-2 bg-white text-green-800 w-8 h-8 p-0.5 rounded flex items-center justify-center text-xs hover:opacity-90 transition"
          aria-label="Traducir a Inglés"
        >
          EN
        </button>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-white focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
            <li>
              <button
                onClick={() => handleTranslate("en")}
                className="block w-full text-left py-2 hover:bg-green-400 hover:text-black transition-colors"
              >
                Traducir a Inglés
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}