//importar React y otros módulos necesarios
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import QuienesSomos from "./pages/QuienesSomos"
import Especies from "./pages/Especies"
import Team from "./pages/Team"
import Recursos from "./pages/Recursos"
import Contacto from "./pages/Contacto"
import NotFound404 from "./pages/NotFound404"
import Project from "./pages/Project"
import Api from "./pages/Api"
import News from "./pages/News"

function App() {
  // Componente principal de la aplicación
  // Aquí se define la estructura de la aplicación y las rutas
  // Se utiliza React Router para manejar la navegación entre páginas
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Contenido principal */}
        <main className="flex-1 pt-16 px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/team" element={<Team />} />
            <Route path="/news" element={<News />} />
            <Route path="/especies" element={<Especies />} />
            <Route path="/api" element={<Api />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/project" element={<Project />} />
          {/* Página especial sin layout general (si quieres usarlo así) */}
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main>
        
        {/* Pie de página */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
