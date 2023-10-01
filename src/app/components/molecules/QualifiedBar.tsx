import React, { useState } from "react";
import Qualified from "./Qualified";
import Task from "./Task";
import Disqualified from "./Disqualified";

function QualifiedBar() {
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
    <div>
      <div className="bg-white text-sm text-label flex items-center justify-evenly w-1/3 rounded-md rounded-b-none py-3">
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
      {selectBar === 0 ? <Qualified /> : null}
      {selectBar === 1 ? <Task/> : null}
      {selectBar === 2 ? <Disqualified /> : null}
    </div>
  );
}

export default QualifiedBar;
