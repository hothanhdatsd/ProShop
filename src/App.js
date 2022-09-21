import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen/>} exact  />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<HomeScreen />} />
            <Route path="/login" element={<HomeScreen />} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
