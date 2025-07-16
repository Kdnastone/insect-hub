import Hero from "../components/Hero"
import QuickLinks from "../components/QuickLinks"

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-[50vh] overflow-hidden">
        <Hero />
      </div>
  
      <div className="bg-white px-4 py-2">
        <QuickLinks />
      </div>
          {/* Enlaces externos a plataformas clave */}
      <div className="flex justify-center space-x-10 mb-2">
        <a
          href="https://www.gbif.org/es/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-green-800 text-white rounded-lg hover:bg-[#79a72a] transition-colors text-xl"
        >
          Explorar en GBIF
        </a>

        <a
          href="https://ipt.biodiversidad.co/sib/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-green-800 text-white rounded-lg hover:bg-[#79a72a] transition-colors text-xl"
        >
          Conectar con SiB Colombia
        </a>
      </div>

    
    </div>
  )
}
