// Dropdown.tsx
import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-startrelative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-100 px-4 py-2 rounded w-full"
      >
        {selected}
      </button>
      {isOpen && (
        <ul className="absolute mt-2 w-48 rounded-md shadow-lg bg-white z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="hover:bg-blue-500 hover:text-white cursor-pointer px-4 py-2"
            >
              <button
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
