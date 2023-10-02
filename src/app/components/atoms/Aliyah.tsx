import CirclePlus from '@/app/resources/CirclePlus';
import React from 'react'

function Aliyah() {

  const PersonalInfo = [
    {
      fName: "Aaliyah Sanderson",
      country: "Saudi Arabia",
      gMail: "aaliyahs@gmail.com",
      phone: "+00 000 000 0000",
      hashTag: ['#top_candidate', '#marketing_june'],
      tags: ["New York", "Marketing", "London"]
    },
  ];

  return (
    <div>
      {PersonalInfo.map((pInfo, i) => (
        <div key={i} className="flex items-start flex-col gap-5">
          <div className="flex gap-2">
            <span className="font-[500]">{pInfo.fName}</span>
            <div className="flex gap-3 text-[10px]">
              {Object.values(pInfo.tags).map((tagC, i) => (
                <span
                  className="bg-blue-50 py-[2px] flex items-center px-2 text-gray-500 rounded-full "
                  key={i}
                >
                  {tagC}
                </span>
              ))}
            </div>
          </div>
          <div className="flex text-xs gap-2 ">
            <span className="border-r-[1px] border-gray-700 pr-3">
              {pInfo.country}
            </span>
            <span className="border-r-[1px] border-gray-700 pr-3">
              {pInfo.gMail}
            </span>
            <span>{pInfo.phone}</span>
          </div>
          <div>
            <div className="flex gap-3 text-xs">
              {Object.values(pInfo.hashTag).map((tagD, i) => (
                <span
                  className="bg-blue-50 p-[3px] px-4 text-gray-500 rounded-full "
                  key={i}
                >
                  {tagD}
                </span>
              ))}
              <span className='flex items-center gap-1 text-xs text-gray-300'>
              <CirclePlus/>
                Add tag
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Aliyah
