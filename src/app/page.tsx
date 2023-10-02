"use client";
import React, { useState } from "react";
import SideNav from "./components/organims/SideNav";
import LeftSide from "./components/organims/LeftSide";
import CandidateProfile from "./components/organims/CandidateProfile";
import NanCandidate from "./components/molecules/NanCandidate";


function App() {
  const [activeCandidate, setActiveCandidate] = useState<number | null>(null);

  return (
    <div className="flex h-screen overflow-hidden bg-blue-50">
      <SideNav />
      <div className="flex-1 w-full p-5 overflow-auto grid grid-cols-[0.3fr_1fr] gap-x-5">
        <LeftSide
          setActiveCandidate={setActiveCandidate}
          activeCandidate={activeCandidate}
        />
        <div className="w-full transition-all">
          {activeCandidate === 1 ? <CandidateProfile /> : <NanCandidate />}
        </div>
      </div>
    </div>
  );
}


export default App;
