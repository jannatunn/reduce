import React from "react";
import AddProducts from "./components/addProducts";
import ShowProduct from "./components/showProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProducts from "./components/EditProducts";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="" element={<ShowProduct />} />
          <Route path="add" element={<AddProducts />} />
          <Route path="edit/:id" element={<EditProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
