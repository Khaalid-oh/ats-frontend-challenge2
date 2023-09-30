import Arrow from "@/app/resources/Arrow";
import BoardSVG from "@/app/resources/Board";
import Calendar from "@/app/resources/Calendar";
import DP from "@/app/resources/DP";
import FileSVG from "@/app/resources/File";
import Home from "@/app/resources/Home";
import Love from "@/app/resources/Love";
import People from "@/app/resources/People";
import SettingsSVG from "@/app/resources/SettingSVG";
import ShareSVG from "@/app/resources/Share";
import UserName from "@/app/resources/UserName";
import React from "react";

const sideItem = [
  { id: 0, icon: <DP /> },
  { id: 1, icon: <Home /> },
  { id: 2, icon: <People /> },
  { id: 3, icon: <Calendar /> },
  { id: 4, icon: <ShareSVG /> },
  { id: 5, icon: <FileSVG /> },
  { id: 6, icon: <BoardSVG /> },
  { id: 7, icon: <Love /> },
  { id: 8, icon: <Arrow /> }
];


function SideBar() {
  return (
    <div className="h-screen w-16 flex flex-col items-center bg-white shadow-lg gap-5 pt-4 ">
      {sideItem.map((navItem, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center h-10 w-10 group hover:bg-blue-50 rounded-md transition-all"
        >
          {navItem.icon}
        </div>
      ))}
      <div className="flex flex-col items-center justify-between h-28 mt-24">
        <div className="flex items-center justify-center group hover:bg-blue-50 h-10 w-10 rounded-md transition-all">
          <SettingsSVG />
        </div>
        <UserName />
      </div>
    </div>
  );
} 

export default SideBar;
