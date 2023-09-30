'use client'
import React from "react";
import SideNav from "./components/organims/SideNav";
import LeftSide from "./components/organims/LeftSide";

function App() {
  return (
    <div className="flex max-w-full h-screen bg-blue-50">
      <SideNav />
      <div className="w-1/3 p-5 bg-transparent">
      <LeftSide/>
      </div>
    </div>
  );
}

export default App;
