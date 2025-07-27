//Importar React y otros hooks necesarios
import { useState } from "react";
import { CalendarDays, Rocket, BookOpen, FileText } from "lucide-react";

export default function News() {
    // Estado para manejar la pestaña activa
  const [tab, setTab] = useState("proyectos"); 

  return (
    // Componente principal que renderiza la página de noticias
    <div className="pt-5 px-4 sm:px-6 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-green-900">
        Actividades del Grupo CINAT UNAL
      </h1>
      <p className="text-center text-green-800 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
        Conoce los proyectos desarrollados, próximos eventos y publicaciones destacadas del grupo.
      </p>

      {/* Botones para cambiar entre tabs - Responsive */}
      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-6">
        <button 
          className={`px-3 sm:px-4 py-2 border rounded-md text-green-800 hover:bg-green-100 transition-colors text-sm sm:text-base flex items-center justify-center ${
            tab === "proyectos" ? "bg-green-100 border-green-300" : "border-gray-300"
          }`} 
          onClick={() => setTab("proyectos")}
        >
          <Rocket className="mr-2 w-4 h-4" /> Proyectos
        </button>
        <button 
          className={`px-3 sm:px-4 py-2 border rounded-md text-green-800 hover:bg-green-100 transition-colors text-sm sm:text-base flex items-center justify-center ${
            tab === "normatividad" ? "bg-green-100 border-green-300" : "border-gray-300"
          }`} 
          onClick={() => setTab("normatividad")}
        >
          <FileText className="mr-2 w-4 h-4" /> Normatividad
        </button>
        <button 
          className={`px-3 sm:px-4 py-2 border rounded-md text-green-800 hover:bg-green-100 transition-colors text-sm sm:text-base flex items-center justify-center ${
            tab === "eventos" ? "bg-green-100 border-green-300" : "border-gray-300"
          }`} 
          onClick={() => setTab("eventos")}
        >
          <CalendarDays className="mr-2 w-4 h-4" /> Eventos
        </button>
        <button 
          className={`px-3 sm:px-4 py-2 border rounded-md text-green-800 hover:bg-green-100 transition-colors text-sm sm:text-base flex items-center justify-center ${
            tab === "publicaciones" ? "bg-green-100 border-green-300" : "border-gray-300"
          }`} 
          onClick={() => setTab("publicaciones")}
        >
          <BookOpen className="mr-2 w-4 h-4" /> Publicaciones
        </button>
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Contenido de cada tab - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        {tab === "proyectos" && (
          <div className="border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
            <h2 className="font-semibold text-lg sm:text-xl text-green-800 mb-2 sm:mb-3">
              Web y API de especies de interés
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Proyecto para la divulgación estructurada de especies de insectos con valor científico y productivo.
            </p>
          </div>
        )}

        {tab === "normatividad" && (
          <div className="border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
            <h2 className="font-semibold text-lg sm:text-xl text-green-800 mb-2 sm:mb-3">
              Análisis normativo para la cría de insectos
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Propuesta regulatoria para categorizar especies y facilitar el marco legal de producción de insectos.
            </p>
          </div>
        )}

        {tab === "eventos" && (
          <div className="border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
            <h2 className="font-semibold text-lg sm:text-xl text-green-800 mb-2 sm:mb-3">
              Presentación Avances Normativos 2025
            </h2>
            <p className="text-xs sm:text-sm text-green-600 font-medium mb-2">
              Agosto 22, 2025 · Universidad Nacional de Colombia
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Presentación de los avances en la regulación, producción y aplicación de algunos insectos en Colombia.
            </p>
          </div>
        )}

        {tab === "publicaciones" && (
          <div className="border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
            <h2 className="font-semibold text-lg sm:text-xl text-green-800 mb-2 sm:mb-3">
              Estado del arte de Tenebrio molitor en Colombia
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Publicado en proceso de revisión.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}