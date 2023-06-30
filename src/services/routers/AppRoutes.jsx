import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
import Home from "../../pages/dashboard/views/home";
import NotFound from "../../pages/dashboard/views/NotFound";
import Dashboard from "../../pages/dashboard/Dashboard.tsx";

function AppRoutes() {
  const scrollToSection = (sectionId) => {
    const sectionRef = refs[sectionId];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const refs = {
    inicioRef: useRef(null),
    osNoivosRef: useRef(null),
    cerimoniaRef: useRef(null),
    confirmacaoRef: useRef(null),
    listaRef: useRef(null),
    recadosRef: useRef(null),
    dressRef: useRef(null),
  };

  return (
    <Routes>
      <Route path="" element={<Dashboard scrollToSection={scrollToSection} />}>
        <Route path="" element={<Home refs={refs} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
