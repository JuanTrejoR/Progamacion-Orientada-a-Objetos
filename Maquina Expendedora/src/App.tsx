import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Ventas from "./pages/Ventas"
import ProductosProvider from "./utils/Context"

function App() {
  return (
    <ProductosProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ventas" element={<Ventas />} />
      </Routes>
    </ProductosProvider>
  )
}

export default App
