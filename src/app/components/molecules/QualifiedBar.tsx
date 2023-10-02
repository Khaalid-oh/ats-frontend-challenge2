import React, { useState } from "react";
import Qualified from "./Qualified";
import Task from "./Task";
import Disqualified from "./Disqualified";

type QualifiedBarProps = {
  setActiveCandidate: React.Dispatch<React.SetStateAction<number | null>>;
  activeCandidate: number | null;
};


function QualifiedBar({
  setActiveCandidate,
  activeCandidate,
}: QualifiedBarProps) {
  
  const qualifiedBar = [
    { status: "Qualified", count: 247 },
    { status: "Task", count: 25 },
    { status: "Disqualified", count: 78 },
  ];

  const [selectBar, setSelectedBar] = useState<number | null>(0);

  const handleSwitchTab = (tab: number) => {
    setSelectedBar(tab);
  };
  return (
    <div className="w-full">
      <div className="bg-white text-sm text-label flex items-center justify-evenly rounded-md rounded-b-none py-3 w-full">
        <div className="flex items-center justify-center relative after-stroke px-4 h-8">
          <label className="hidden" htmlFor="checkItem">
            input
          </label>
          <input id="checkItem" type="checkbox" />
        </div>
        {qualifiedBar.map((bar, i) => (
          <div
            key={i}
            onClick={() => setSelectedBar(i)}
            className={`px-4 flex items-center justify-center gap-2 after-stroke transition-all ${
              i !== qualifiedBar.length - 1 ? "relative" : ""
            } ${selectBar === i ? "text-blue-600" : " "}`}
          >
            {bar.status}
            <span
              className={`flex h-7 w-7 items-center justify-center bg-gray-100 text-xs place-content-center rounded-full ${
                selectBar === i ? "bg-blue-200" : ""
              }`}
            >
              {bar.count}
            </span>
          </div>
        ))}
      </div>
      {selectBar === 0 ? (
        <Qualified
          setActiveCandidate={setActiveCandidate}
          activeCandidate={activeCandidate}
        />
      ) : null}
      {selectBar === 1 ? <Task /> : null}
      {selectBar === 2 ? <Disqualified /> : null}
    </div>
  );
}

export default QualifiedBar;
