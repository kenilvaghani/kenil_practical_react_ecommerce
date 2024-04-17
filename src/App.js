import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./view/ProductList";
import ProductDetails from "./view/ProductDetails";
import Register from "./view/Register";
import Login from "./view/Login";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <ProductList />
            </>
          }
        />
        <Route
          path="/products/:id"
          element={
            <>
              <Navbar />
              <ProductDetails />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
