import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route element={<Dashboard />} path="/" />
        </Routes>
      </div>
    </>
  );
}

export default App;
