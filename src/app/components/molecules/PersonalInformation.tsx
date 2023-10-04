import UserIcon from '@/app/resources/UserIcon';
import React from 'react'
import CardFrame from './CardFrame';
import UserFrame from '../atoms/UserFrame';
import Education from '../atoms/Education';
import ExpIcon from '@/app/resources/ExperienceIcon';

function PersonalInformation() {
  return (
    <div className="">
      <CardFrame title="Personal information" noLine={true} dupliChild={true}>
        <div>
          <UserFrame />
        </div>
      </CardFrame>

      <CardFrame title="Education">
        <div className="flex items-center gap-x-4">
          <div className="bg-white flex items-center justify-center border-[1px] rounded-md h-7  w-7">
            <Education />
          </div>
          <div className="flex flex-col gap-y-4">
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

      <CardFrame title="Work Experience">
        <div className="flex items-center gap-x-4">
          <div className="bg-white flex items-center justify-center border-[1px] rounded-md h-7  w-7">
            <ExpIcon />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="font-[500]">Cyber Security Intern</span>
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

      <CardFrame title='Resume' noLine={true} dupliChild={true}>
          <div className='h-[800px] p-4 w-[80%] text-white rounded-md bg-gray-300'>Resume</div>
      </CardFrame>
    </div>
  );
}

export default PersonalInformation
