import { Routes, Route } from "react-router"
import {HomePage} from "./pages/HomePage"

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
      <Route path="Checkout" element={<div>Test Checkout page</div>}>

      </Route>
    </Routes>
    
  )
}

export default App
