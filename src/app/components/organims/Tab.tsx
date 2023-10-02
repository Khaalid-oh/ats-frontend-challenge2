import LeftArrow from '@/app/resources/LeftArrow';
import React, { useState } from 'react'
import DetailCard from '../molecules/DetailCard';
import OtherCard from '../molecules/OtherCard';

function Tab() {

  const tabItem = [
    { id: 0, tabName: "Profile" },
    { id: 1, tabName: "Video" },
    { id: 2, tabName: "Evaluation" },
    { id: 3, tabName: "Placement" },
    { id: 4, tabName: "Compliance" },
    { id: 5, tabName: "Notes" }
  ];
  const [selectTab, setSelectedTab] = useState(0);

  const handleSwitchTab = (tab: number) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-col mt-9 w-full ">
      <div className="flex items-center justify-between w-full text-sm font-[500]">
        {tabItem.map((tab, i) => (
          <div
            onClick={() => handleSwitchTab(i)}
            key={i}
            className={`p-2 ${
              selectTab === i
                ? "text-blue-600 after:absolute after:bg-blue-600 relative after:w-[110%] after:h-1 after:content-[''] after:top-8 after:-left-[2px] after:rounded-full "
                : ""
            } `}
          >
            {tab.tabName}
          </div>
        ))}
        <div className="bg-white p-2 px-3 rounded-lg opacity-90 shadow-md">
          <LeftArrow />
        </div>
      </div>
      {selectTab === 0 ? <DetailCard/> : <OtherCard/>}
    </div>
  );
}

export default Tab
