"use client";
import React from "react";
import SideNav from "./components/organims/SideNav";
import LeftSide from "./components/organims/LeftSide";

function App() {
  return (
    <div className="flex max-w-full h-screen bg-blue-50">
      <SideNav />
      <div className="flex-1 w-full p-5 bg-red">
        <LeftSide />
      </div>
    </div>
  );
}

export default App;
