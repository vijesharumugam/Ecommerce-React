import { Routes, Route } from "react-router";
import {HomePage} from "./pages/HomePage"; 
import { CheckoutPage } from "./pages/Checkoutpage";
function App() {
  

  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
      <Route path="Checkout" element={<CheckoutPage />}   >

      </Route>
    </Routes>
    
  )
}

export default App
