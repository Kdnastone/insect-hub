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
import RiskAssessments from "./pages/RiskAssessments"
import Methodology from "./pages/Methodology"

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />

        {/* Contenido principal: flex-1 para empujar el footer al final */}
        <main className="flex-1 pt-16 pb-28 sm:pb-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/team" element={<Team />} />
            <Route path="/news" element={<News />} />
            <Route path="/especies" element={<Especies />} />
            <Route path="/riesgos" element={<RiskAssessments />} />
            <Route path="/api" element={<Api />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/project" element={<Project />} />
            <Route path="/metodologia" element={<Methodology />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App