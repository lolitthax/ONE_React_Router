import { BrowserRouter, Routes, Route } from "react-router-dom"
import SobreMim from "./paginas/SobreMmim";
import Inicio from "./paginas/inicio";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="sobremim" element={<SobreMim/>}/>
      <Route path="*" element={<div>Página não encontrada</div>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
