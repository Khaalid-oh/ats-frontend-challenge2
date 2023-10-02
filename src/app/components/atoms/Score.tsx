import React from 'react'

function Score() {
  return (
    <div className='flex flex-col gap-[50px]'>
      <div className='flex items-center justify-between text-sm shadow-md rounded-full p-1 gap-6 font-[500]'>
        Overall score
        <span className='text-xs flex items-center justify-center bg-blue-100 h-7 w-7 rounded-full'>7</span>
      </div>
      <span className='text-[10px] text-gray-300'>Applied on 12 June 2023</span>
    </div>
  );
}

export default Score
