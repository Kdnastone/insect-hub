// Impostar React y dependencias necesarias
import { useState, useEffect } from "react";
import fondo1 from "../assets/images/cima01.jpg";
import fondo2 from "../assets/images/cima02.jpg";
import fondo3 from "../assets/images/cima03.jpg";
import fondo4 from "../assets/images/cima04.jpg";
import fondo5 from "../assets/images/cima05.jpg";
import fondo6 from "../assets/images/cima06.jpg";
import fondo7 from "../assets/images/cima07.jpg";
import BotonEscarabajo from "./Button";

//Se crea una constante para llamar a las imágenes importadas
const images = [fondo1, fondo2, fondo3, fondo4, fondo5, fondo6, fondo7];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

//Intervalo de cambio cada 30 seg
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, 30000); 

  return () => clearInterval(interval);
}, []);

  //Propiedades de la imagen en el fondo
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] overflow-hidden flex items-start pt-8">
      {/* Imagen de fondo */}
      <img
        src={images[currentIndex]}
        alt="Fondo dinámico"
        className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
      />

      {/* Capa oscura para contraste de texto */}
      <div className="relative z-10 w-full text-white px-6 flex items-center justify-start">
        <div className="flex flex-col space-y-6 text-left max-w-3xl bg-green-800/60 p-4 rounded-lg backdrop-blur-md">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Centro de Investigación de Artrópodos Terrestres
          </h1>
          <p className="mt-2 text-base md:text-xl drop-shadow-md">
            Investigación, conservación y uso sostenible de insectos en Colombia


        {/* llamar a Button codificado*/}
          </p>
          <BotonEscarabajo />
        </div>
      </div>
    </section>
  );
}
