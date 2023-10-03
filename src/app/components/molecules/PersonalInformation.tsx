import UserIcon from '@/app/resources/UserIcon';
import React from 'react'
import CardFrame from './CardFrame';
import UserFrame from '../atoms/UserFrame';

function PersonalInformation() {
  return (
   <CardFrame title='Personal information' noLine={true} dupliChild={true}>
    <div>
      <UserFrame/>
    </div>
   </CardFrame>
  );
}

export default PersonalInformation
