import UserIcon from '@/app/resources/UserIcon';
import React from 'react'
import CardFrame from '../atoms/CardFrame';

function PersonalInformation() {
  return (
    <div className="bg-white flex flex-col text-sm rounded-3xl w-full h-[30%] mt-4 p-6 gap-4">
      <div className="font-[500]">Personal Information</div>
      <div className="flex flex-col gap-10">
        <div className="flex w-[70%] justify-between">
          <CardFrame />
          <CardFrame />
        </div>
        <div className="flex w-[70%] justify-between">
          <CardFrame />
          <CardFrame />
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation
