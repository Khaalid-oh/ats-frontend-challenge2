import React from 'react'
import ProgramTitle from '../molecules/ProgramTitle'
import Search from '../molecules/Search'

function LeftSide() {
  return (
    <div className='flex flex-col gap-3'>
      <ProgramTitle/>
      <Search/>
    </div>
  )
}

export default LeftSide
