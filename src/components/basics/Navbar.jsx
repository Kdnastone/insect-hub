//importar los componentes necesarios
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/icon-app.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Principal", description: "Inicio y novedades del CINAT" },
    { to: "/About", label: "Conócenos", description: "Quiénes somos y qué hacemos" },
    { to: "/Api", label: "API de Insectos", description: "Consulta técnica de especies en línea" },
    { to: "/Regulations", label: "Normatividad", description: "Avances regulatorios y legislación" },
    { to: "/Species", label: "Insectos de Interés", description: "Especies priorizadas por su valor bioeconómico" },
    { to: "/Team", label: "Equipo CINAT", description: "Conoce al grupo humano detrás del proyecto" },
    { to: "/Project", label: "Sobre la Página", description: "Objetivo, herramientas y datos abiertos" },
  ];

  return (
    <nav className="bg-[#D9ED92] shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
        {/* Logo y título */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="CINAT Logo"
            className="h-14 w-14 object-cover rounded-full"
          />
          <span className="text-xl font-bold text-[#475C22] hidden lg:inline">
            Centro de Investigación de Artrópodos Terrestres – CINAT
          </span>
        </NavLink>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#475C22] hover:text-[#a7df46] ml-auto"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Enlaces del menú (pantalla grande) */}
        <div className="hidden md:flex flex-wrap items-center justify-end gap-5 w-full md:w-auto mt-4 md:mt-0">
          {links.map(({ to, label, description }) => (
            <NavLink
              key={to}
              to={to}
              title={description}
              className={({ isActive }) =>
                `text-sm lg:text-base text-[#475C22] hover:text-[#a7df46] transition-colors ${
                  isActive ? "font-bold border-b-2 border-[#475C22]" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Enlaces del menú (pantalla pequeña) */}
        {menuOpen && (
          <div className="md:hidden mt-4 w-full flex flex-col gap-4">
            {links.map(({ to, label, description }) => (
              <NavLink
                key={to}
                to={to}
                title={description}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base text-[#475C22] hover:text-[#a7df46] transition-colors ${
                    isActive ? "font-bold border-b-2 border-[#475C22]" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
