// Importa React (necesario para trabajar con JSX)
import React from 'react';

// Importa el componente de navegación (parte superior de la página)
import Navbar from '../components/basics/Navbar';

// Importa el componente del pie de página
import Footer from '../components/basics/Footer';

// Define un componente funcional llamado "Layout" que actúa como un contenedor general para toda la aplicación o página
function Layout({ children }) {
  return (
    <>
      {/* Renderiza el componente Navbar (barra de navegación) */}
      <Navbar />

      {/* Renderiza el contenido principal recibido como 'children' */}
      {/* Aplica padding con Tailwind (p-4) para dar espacio interior */}
      <main className="p-4">
        {children}
      </main>

      {/* Renderiza el componente Footer (pie de página) */}
      <Footer />
    </>
  );
}

export default Layout;
