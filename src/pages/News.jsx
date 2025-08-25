//Importar React y otros hooks necesarios
import { useState } from "react";
import { CalendarDays, Rocket, BookOpen, FileText } from "lucide-react";

// Importar los componentes de cada pestaña
import ProyectosTab from "../components/tabs/ProyectosTab";
import NormatividadTab from "../components/tabs/NormatividadTab";
import EventosTab from "../components/tabs/EventosTab";
import PublicacionesTab from "../components/tabs/PublicacionesTab";

export default function News() {
  // Estado para manejar la pestaña activa
  const [tab, setTab] = useState("proyectos");

  // Función para renderizar el contenido según la pestaña activa
  const renderTabContent = () => {
    switch (tab) {
      case "proyectos":
        return <ProyectosTab />;
      case "normatividad":
        return <NormatividadTab />;
      case "eventos":
        return <EventosTab />;
      case "publicaciones":
        return <PublicacionesTab />;
      default:
        return <ProyectosTab />;
    }
  };

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
        {renderTabContent()}
      </div>
    </div>
  );
}