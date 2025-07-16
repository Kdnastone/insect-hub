//Importar React y otros hooks necesarios
import { useState } from "react";
import escarabajoCerrado from "../assets/escarabajo1.png";
import escarabajoAbierto from "../assets/escarabajo2.png";
import { Link } from "react-router-dom";

export default function BotonEscarabajo() {
  const [hovered, setHovered] = useState(false);

   {/* Contenedor del botón con imagen del escarabajo */}
  return (
    <div className="flex flex-col items-left">
      <Link
        to="/contacto"
        className="w-16 h-16 block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={hovered ? escarabajoAbierto : escarabajoCerrado}
          alt="Contáctanos"
          className="w-full h-full object-contain transition duration-500"
        />
      </Link>
      <p className="mt-2 text-white text-sm">Contáctanos</p>
    </div>
  );
}
