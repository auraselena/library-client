import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
// import BookList from "./pages/BookList";

function App() {
  return (
    <>
    <div className="flex flex-between">
      {/* <Sidebar /> */}
      <Routes>
        <Route element={<Dashboard />} path="/" />
        {/* <Route element={<BookList />} path="/book-list" /> */}
      </Routes>
    </div>
    </>
  );
}

export default App;
