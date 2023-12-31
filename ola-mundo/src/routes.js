import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />

          {/* 
              Na rota "/" a estrutura a ser renderizada é:
              <paginapadrao>
              <inicio />
              </paginapadrao>

                    Na rota "/sobremim" a estrutura a ser renderizada é:
              <paginapadrao>
              <sobremim/>
              </paginapadrao>
           */}
        </Route>
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Rodape></Rodape>
    </BrowserRouter>
  );
}

export default AppRoutes;
