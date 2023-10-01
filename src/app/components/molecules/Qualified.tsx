import React, { useState } from 'react'

function Qualified() {

  const qualifiedCandidate = [
    {
      fName: "Frances R. Kostka",
      country: "Saudi Arabia",
      degree: "Bachelor in Information...",
      yRange: "(2019 - 2023)",
      hashTag: "top_candidate",
      tags: { tag1: "New York", tag2: "Marketing", tag3: "London" },
    },
    {
      fName: "Aaliyah Sanderson",
      country: "Saudi Arabia",
      degree: "Bachelor in Marketing",
      yRange: "(2019 - 2023)",
      hashTag: "top_candidate",
      tags: { tag1: "New York", tag2: "Marketing", tag3: "London" },
    },
    {
      fName: "Michael D. McKee",
      country: "Saudi Arabia",
      degree: "Bachelor in Finance",
      yRange: "(2019 - 2023)",
      hashTag: "top_candidate",
      tags: { tag1: "New York", tag2: "Marketing", tag3: "London" },
    },
    {
      fName: "Christel R. Sclafani",
      country: "Saudi Arabia",
      degree: "Bachelor in Bio-chemical... ",
      yRange: "(2019 - 2023)",
      hashTag: "top_candidate",
      tags: { tag1: "New York", tag2: "Marketing", tag3: "London" },
    },
    {
      fName: "Jerry S. Pollock",
      country: "Saudi Arabia",
      degree: "Bachelor in Marketing",
      yRange: "(2019 - 2023)",
      hashTag: "top_candidate",
      tags: { tag1: "New York", tag2: "Marketing", tag3: "London" },
    },
    {
      fName: "Muhammad Biryani",
      country: "Saudi Arabia",
      degree: "Bachelor in Statistics",
      yRange: "(2019 - 2023)",
      hashTag: "top_candidate",
      tags: { tag1: "New York", tag2: "Marketing", tag3: "London" },
    },
  ];
  
  const [activeCandidate, setActiveCandidate] = useState <number | null>(1)

  const handleActiveCandidate = (val :number) => {
    setActiveCandidate(val)
  }

  const getInitials = (name :string) => {
    const names = name.split(" ");
    return names[0].charAt(0) + names[1].charAt(0);
  };


  return (
    <div className="bg-white w-1/3 mt-2 flex flex-col gap-4 h-full text-sm">
      {qualifiedCandidate.map((candidate, i) => (
        <div className={`flex items-center gap-4 border-b-[1px] px-4`}>
          <div>
            <label className="hidden" htmlFor="checkItem">
              input
            </label>
            <input id="checkItem" type="checkbox" />
          </div>
          <div
            onClick={() => setActiveCandidate(i)}
            className={`flex items-center gap-2 transition-colors rounded-md pr-8 p-2 ${
              activeCandidate === i ? "bg-blue-50" : ""
            }`}
          >
            <div
              className={``}
            >
              <span className="h-10 w-10 rounded-full bg-blue-200 text-lg text-gray-50 font-[500] p-3">
                {getInitials(candidate.fName)}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[16px] font-[500]">{candidate.fName}</span>
              <span className="font-[500]"> {candidate.country}</span>
              <div className="flex gap-4">
                {candidate.degree} <span>{candidate.yRange}</span>
              </div>
              <div className="text-xs text-gray-400 space-x-3">
                <span>#{candidate.hashTag}</span>{" "}
                <span>#{candidate.hashTag}</span>
              </div>
              <div className="flex gap-3 text-xs">
                {Object.values(candidate.tags).map((tagC, i) => (
                  <span
                    className="bg-blue-50 p-[3px] px-4 text-gray-500 rounded-full "
                    key={i}
                  >
                    {tagC}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Qualified
