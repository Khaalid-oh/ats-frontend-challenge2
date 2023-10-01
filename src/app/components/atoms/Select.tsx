import Carret from "@/app/resources/Carret";
import React, { useState } from "react";
import clsx from "clsx";

const Select = ({
  options,
}: {
  options: { option: string; count: number }[];
}) => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const [toggleList, setToggleList] = useState<boolean>(false);

  const handleOptionSelect = (val: string) => setSelectedItem(val);

  const handleToggleList = () => setToggleList((prev) => !prev);

  return (
    <div
      className="grid grid-cols-[0.2fr_1fr_0.25fr_0.05fr] items-center w-1/3 bg-white py-2 px-4 rounded-md text-label relative text-sm"
      onClick={handleToggleList}
    >
      <>
        <span className="  uppercase text-sm font-semibold relative after-stroke">
          <span className="rounded-full h-8 w-8 grid place-content-center bg-bg-1 p-2 uppercase text-sm font-semibold">
            sip
          </span>
        </span>
        <span className="capitalize font-medium pl-3 pr-11">
          {selectedItem || "opportunity browsing"}
        </span>
        <span className="px-4 relative before-stroke font-medium py-[1px]">
          2325
        </span>
        <span className={clsx("pl-3 relative before-stroke py-[1px]")}>
          <Carret style={toggleList ? "transform rotate-180" : ""} />
        </span>
      </>
      <div
        className={clsx(
          "absolute top-14 w-full left-0 cursor-pointer transition-all duration-150 transform origin-top",
          toggleList
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 cursor-none pointer-events-none"
        )}
      >
        {options.map(({ option, count }) => (
          <div
            key={option}
            className={clsx(
              "flex items-center justify-between py-3 px-4 border-1 border-b last:border-0  last:rounded-b-md hover:bg-gray-100",
              option === selectedItem ? "bg-[#edf3ff]" : "bg-white"
            )}
            onClick={() => handleOptionSelect(option)}
          >
            <span className="text-label">{option}</span>
            <span
              className={clsx(
                "rounded-full text-xs grid place-content-center w-5 h-5 text-label font-medium",
                option === selectedItem
                  ? "bg-blue-200  text-blue-700"
                  : "bg-gray-100"
              )}
            >
              {count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
