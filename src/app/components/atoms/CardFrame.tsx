import React from 'react'
import UserIcon from "@/app/resources/UserIcon";

function CardFrame() {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-white flex items-center justify-center border-[1px] rounded-md h-7  w-7">
        <UserIcon />
      </div>

      <div className="flex flex-col items-center gap-3">
        <span className="text-gray-500">Nationality</span>
        <span>Sri Lankan</span>
      </div>
    </div>
  );
}

export default CardFrame
