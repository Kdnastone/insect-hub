//importar los componentes necesarios
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../layouts/Layout';


import Home from '../pages/Home';
import About from '../pages/About';
import Api from '../pages/Api';
import NotFound404 from '../pages/NotFound404';
import Project from '../pages/Project';
import Regulations from '../pages/Regulations';
import Species from '../pages/Species';
import Team from '../pages/Team';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/About"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/Api"
          element={
            <Layout>
              <Api />
            </Layout>
          }
        />
        <Route
          path="/Project"
          element={
            <Layout>
              <Project />
            </Layout>
          }
        />
        <Route
          path="/Regulations"
          element={
            <Layout>
              <Regulations />
            </Layout>
          }
        />
        <Route
          path="/Species"
          element={
            <Layout>
              <Species />
            </Layout>
          }
        />
        <Route
          path="/Team"
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />
        {/* Página especial sin layout general (si quieres usarlo así) */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
};

export default App;
