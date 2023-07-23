import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/Layout";
import "./App.css";
import HomePage from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
