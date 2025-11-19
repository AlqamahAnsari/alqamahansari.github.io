// src/layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Header />
      <main className="pt-24">
        <Outlet />
      </main>
    </div>
  );
}
