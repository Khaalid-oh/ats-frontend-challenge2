import Exclam from '@/app/resources/Exclam';
import Filtericon from '@/app/resources/FilterIcon';
import SearchIcon from '@/app/resources/SearchIcon'
import React, { useState } from 'react'

function Search() {
   const [isFocused, setIsFocused] = useState(false);


  return (
    <div className="flex justify-between w-full text-sm gap-2">
      <div
        className={`flex items-center justify-between w-full px-4 bg-white rounded-md ${
          isFocused ? "ring-2 ring-blue-500" : ""
        }`}
      >
        <SearchIcon />
        <input
          placeholder="Search by name, edu, exp or #tag"
          className="flex flex-1 w-full p-3 bg-opacity-0 focus:outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Exclam />
      </div>

      <div className="bg-white p-4 rounded-md">
        <Filtericon />
      </div>
    </div>
  );
}

export default Search
