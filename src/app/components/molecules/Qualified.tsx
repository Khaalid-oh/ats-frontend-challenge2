import React from 'react'

function Qualified() {
  
  const qualifiedCandidate = [
    {
      fName: "Frances R. Kostka",
      country: "Saudi Arabia",
      degree: "Bachelor in Information Technology and ...",
      yRange: "2019 - 2023",
      hashTag: "top_candidate",
      tags: { tag1: "New York", tag2: "Marketing", tag3: "London" },
    },
    {
      fName: "Aaliyah Sanderson",
      country: "Saudi Arabia",
      degree: "Bachelor in Marketing",
      yRange: "2019 - 2023",
      hashTag: "top_candidate",
      tags: { tag1: "New York", tag2: "Marketing", tag3: "London" },
    },
    {
      fName: "Michael D. McKee",
      country: "Saudi Arabia",
      degree: "Bachelor in Finance",
      yRange: "2019 - 2023",
      hashTag: "top_candidate",
      tags: { tag1: "New York", tag2: "Marketing", tag3: "London" },
    },
    {
      fName: "Christel R. Sclafani",
      country: "Saudi Arabia",
      degree: "Bachelor in Bio-chemical Engineering ",
      yRange: "2019 - 2023",
      hashTag: "top_candidate",
      tags: { tag1: "New York", tag2: "Marketing", tag3: "London" },
    },
    {
      fName: "Jerry S. Pollock",
      country: "Saudi Arabia",
      degree: "Bachelor in Marketing",
      yRange: "2019 - 2023",
      hashTag: "top_candidate",
      tags: { tag1: "New York", tag2: "Marketing", tag3: "London" },
    },
    {
      fName: "Muhammad Biryani",
      country: "Saudi Arabia",
      degree: "Bachelor in Statistics",
      yRange: "2019 - 2023",
      hashTag: "top_candidate",
      tags: { tag1: "New York", tag2: "Marketing", tag3: "London" },
    },
  ];
  
  const getInitials = (name :string) => {
    const names = name.split(" ");
    return names[0].charAt(0) + names[1].charAt(0);
  };


  return (
    <div className="bg-white w-1/3 mt-2 flex flex-col gap-4 h-screen text-sm">
      {qualifiedCandidate.map((candidate, i) => (
        <div className='flex items-center border-b-[1px] '>
          <div>
            <label className="hidden" htmlFor="checkItem">
              input
            </label>
            <input id="checkItem" type="checkbox" />
          </div>
          <div className='flex flex-col'>
            <span className='h-10 w-10 rounded-full bg-blue-200 text-lg text-gray-50 font-semibold p-3'>{getInitials(candidate.fName)}</span>
            <span className='text-[16px] font-semibold'>{candidate.fName}</span>
            <span>{candidate.country}</span>
            <div>
              {candidate.degree} <span>{candidate.yRange}</span>
            </div>
            <div>
              <span>{candidate.hashTag}</span> <span>{candidate.hashTag}</span>
            </div>
            <div>
              {Object.values(candidate.tags).map((tagC, i) => (
                <span key={i}>{tagC}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Qualified
