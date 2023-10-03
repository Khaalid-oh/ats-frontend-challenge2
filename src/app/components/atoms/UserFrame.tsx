import React from "react";
import UserIcon from "@/app/resources/UserIcon";
import CountryIcon from "@/app/resources/CountryIcon";
import GenderIcon from "@/app/resources/GenderIcon";
import DateIcon from "@/app/resources/DateIcon";

function UserFrame() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between w-[65%]">
        <div className="flex items-center gap-4">
          <div className="bg-white flex items-center justify-center border-[1px] rounded-md h-7 w-7">
            <UserIcon />
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-gray-500">Nationality</span>
            <span>Sri Lankan</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white flex items-center justify-center border-[1px] rounded-md h-7  w-7">
            <CountryIcon />
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-gray-500">National ID</span>
            <span>000000000</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-[65%]">
        <div className="flex items-center gap-4">
          <div className="bg-white flex items-center justify-center border-[1px] rounded-md h-7 w-7">
            <GenderIcon/>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-gray-500">Gender</span>
            <span>Female</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white flex items-center justify-center border-[1px] rounded-md h-7  w-7">
            <DateIcon />
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-gray-500">Date of birth</span>
            <span>00-00-0000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFrame;
