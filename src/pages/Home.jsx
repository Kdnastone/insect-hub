import Hero from "../components/Hero"
import QuickLinks from "../components/QuickLinks"

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <Hero />
      </div>
  
      <div className="bg-white">
        <QuickLinks />
      </div>
      
      {/* Enlaces externos responsive */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-10 p-4 sm:p-6">
        <a
          href="https://www.gbif.org/es/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-green-800 text-white rounded-lg hover:bg-[#79a72a] transition-colors text-base sm:text-lg lg:text-xl text-center"
        >
          Explorar en GBIF
        </a>

        <a
          href="https://ipt.biodiversidad.co/sib/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-green-800 text-white rounded-lg hover:bg-[#79a72a] transition-colors text-base sm:text-lg lg:text-xl text-center"
        >
          Conectar con SiB Colombia
        </a>
      </div>
    </div>
  )
}