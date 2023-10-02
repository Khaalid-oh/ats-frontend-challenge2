import React from 'react'
import VideoClip from '../atoms/VideoClip'
import Aliyah from '../atoms/Aliyah'
import Score from '../atoms/Score'

function Profile() {
  return (
    <div className="bg-white flex items-center gap-x-2 px-4 h-36 rounded-md">
      <VideoClip />
      <div className='flex justify-between gap-2 w-full'>
        <Aliyah />
        <Score />
      </div>
    </div>
  );
}

export default Profile
