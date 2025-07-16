//Importar React y otros hooks necesarios
import { useState } from "react";
import { CalendarDays, Rocket, BookOpen } from "lucide-react";

export default function News() {
    // Estado para manejar la pestaña activa
  const [tab, setTab] = useState("proyectos"); 

  return (
    // Componente principal que renderiza la página de noticias
    <div className="pt-5 px-4 md:px-16 max-w-screen-xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-green-900">
        Actividades del Grupo CINAT UNAL
      </h1>
      <p className="text-center text-green-800 max-w-2xl mx-auto mb-12">
        Conoce los proyectos desarrollados, próximos eventos y publicaciones destacadas del grupo.
      </p>

      {/* Botones para cambiar entre tabs */}
      <div className="flex justify-center gap-4 mb-6">
        <button className={`px-4 py-2 border rounded-md text-green-800 hover:bg-green-100 ${tab === "proyectos" ? "bg-green-100" : ""}`} onClick={() => setTab("proyectos")}>
          <Rocket className="inline mr-2 w-4 h-4" /> Proyectos
        </button>
        <button className={`px-4 py-2 border rounded-md text-green-800 hover:bg-green-100 ${tab === "normatividad" ? "bg-green-100" : ""}`} onClick={() => setTab("normatividad")}>
          <CalendarDays className="inline mr-2 w-4 h-4" /> Normatividad
        </button>
        <button className={`px-4 py-2 border rounded-md text-green-800 hover:bg-green-100 ${tab === "eventos" ? "bg-green-100" : ""}`} onClick={() => setTab("eventos")}>
          <BookOpen className="inline mr-2 w-4 h-4" /> Eventos
        </button>
        <button className={`px-4 py-2 border rounded-md text-green-800 hover:bg-green-100 ${tab === "publicaciones" ? "bg-green-100" : ""}`} onClick={() => setTab("publicaciones")}>
          <BookOpen className="inline mr-2 w-4 h-4" /> Publicaciones
        </button>
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Contenido de cada tab */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {tab === "proyectos" && (
          <div className="border rounded-xl p-4 shadow-sm">
            <h2 className="font-semibold text-lg text-green-800">Web y API de especies de interés</h2>
            <p className="text-sm text-gray-600 mt-2">
              Proyecto para la divulgación estructurada de especies de insectos con valor científico y productivo.
            </p>
          </div>
        )}

        {tab === "normatividad" && (
          <div className="border rounded-xl p-4 shadow-sm">
            <h2 className="font-semibold text-lg text-green-800">Análisis normativo para la cría de insectos</h2>
            <p className="text-sm text-gray-600 mt-2">
              Propuesta regulatoria para categorizar especies y facilitar el marco legal de producción insectil.
            </p>
          </div>
        )}

        {tab === "eventos" && (
          <div className="border rounded-xl p-4 shadow-sm">
            <h2 className="font-semibold text-lg text-green-800">Presentación Avances Normativos 2025</h2>
            <p className="text-sm text-gray-600 mt-2">Agosto 22, 2025 · Universidad Nacional de Colombia</p>
            <p className="text-sm text-gray-600">Discusión sobre el avance en la regulación, producción y aplicación de algunos insectos.</p>
          </div>
        )}

        {tab === "publicaciones" && (
          <div className="border rounded-xl p-4 shadow-sm">
            <h2 className="font-semibold text-lg text-green-800">Estado del arte de Tenebrio molitor en Colombia</h2>
            <p className="text-sm text-gray-600 mt-2">Publicado en .</p>
          </div>
        )}
      </div>
    </div>
  );
}
