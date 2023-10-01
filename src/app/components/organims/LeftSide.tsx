import React from 'react'
import ProgramTitle from '../molecules/ProgramTitle'
import Search from '../molecules/Search'
import QualifiedBar from '../molecules/QualifiedBar'

function LeftSide() {
  return (
    <div className='flex flex-col gap-3'>
      <ProgramTitle/>
      <Search/>
      <QualifiedBar/>
    </div>
  )
}

export default LeftSide
