import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CardProvider } from "./Context/CardProvider";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  return (
    // 4. Envolvemos toda a aplicação com o CardProvider para que o contexto esteja 
    // disponível em qualquer lugar da aplicação
    <CardProvider>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="products/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;
