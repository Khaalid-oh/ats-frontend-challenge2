import UserIcon from '@/app/resources/UserIcon';
import React from 'react'
import CardFrame from './CardFrame';
import UserFrame from '../atoms/UserFrame';
import Education from '../atoms/Education';

function PersonalInformation() {
  return (
    <div className="">
      <CardFrame title="Personal information" noLine={true} dupliChild={true}>
        <div>
          <UserFrame />
        </div>
      </CardFrame>

      <CardFrame title="Education">
        <div className='flex items-center gap-x-4'>
          <Education /> 
          <div className='flex flex-col gap-y-4'>
            <span className="font-[500]">Bachelor in Chemistry</span>
            <div className="text-sm flex  gap-4">
              <span>King Saud University</span>
              <span className="text-gray-400 border-x-[2px] px-4">
                Saudi Arabia
              </span>
              <span className="text-gray-400">Jan 2018 - Jan 2023</span>
            </div>
          </div>
        </div>
      </CardFrame>
    </div>
  );
}

export default PersonalInformation
