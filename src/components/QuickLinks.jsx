//Importar link de react-router-dom para navegación
import { Link } from "react-router-dom"

export default function QuickLinks() {
  // Componente QuickLinks que renderiza enlaces rápidos
  // Contiene enlaces a secciones importantes del sitio
  const links = [
    { name: "Quiénes Somos", icon: "👤", path: "/quienes-somos" },
    { name: "Noticias", icon: "📢", path: "/news" },
    { name: "Especies de Interés", icon: "🪲", path: "/especies" },
    { name: "Normatividad", icon: "📄", path: "/recursos" },
  ]

  // Renderiza una sección con enlaces rápidos
  // Cada enlace tiene un icono y un nombre descriptivo
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-2 md:px-6 md:py-4 bg-[#d9e4c5]">
      {links.map((link, idx) => (
        <Link
          key={idx}
          to={link.path}
          className="bg-white rounded-xl p-4 text-center shadow-md hover:scale-105 transition hover:bg-green-800/10"
        >
          <div className="text-2xl md:text-4xl mb-2">{link.icon}</div>
          <div className="text-sm md:text-base font-semibold text-gray-700">{link.name}</div>
        </Link>
      ))}
    </section>
  )
}
