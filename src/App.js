import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Product,
  RegisterPage,
  Blog,
  SharedLayout,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<SharedLayout />}>
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="/blog/:id/:postTitle" element={<Blog />} />
          {/* <Route path="register" element={<RegisterPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
