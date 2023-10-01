import React, { useState } from "react";
// import { Select, ConfigProvider } from "antd";
import Role from "./Role";
import Carret from "@/app/resources/Carret";
import Select from "./Select";


const options = [
  { option: "Applied", count: 12 },
  { option: "Shortlisted", count: 9 },
  { option: "video interviw", count: 0 },
  { option: "Group interview", count: 9 },
  { option: "Placement", count: 6 },
  { option: "Invisble stage", count: 1 },
  { option: "Hired", count: 0 },
  { option: "Invisible video stage", count: 0 },
  { option: "Withdrawn", count:1 },
];

const OptionList: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const filteredOptions = options.filter((o) => !selectedItems.includes(o));

  return (
    <Select options={options} />
    // <ConfigProvider
    //   theme={{
    //     components: {
    //       Select: {
    //         fontSize: 12,
    //         optionPadding: "8px 12px",
    //       },
    //     },
    //   }}
    // >
    //   <div
    //     className="flex justify-between items-center cursor-pointer bg-white w-[80%] p-2 px-3 h-10 rounded-md gap-1"
    //     onClick={() => setDropdownOpen(!isDropdownOpen)}
    //   >
    //     <div>
    //       <Role />
    //     </div>

    //     <Select
    //       className="customSelect"
    //       placeholder={
    //         <span className=" border-2 border-y-0 border-r-0 px-3">
    //           Opportunity browsing
    //         </span>
    //       }
    //       suffixIcon={null}
    //       bordered={false}
    //       onChange={setSelectedItems}
    //       style={{ width: "300px", height: "40px", fontSize: "13px" }}
    //       dropdownStyle={{ width: "350px", position: "absolute", left: "85px" }}
    //       options={filteredOptions.map((item) => ({
    //         value: item,
    //         label: item,
    //       }))}
    //     />
    //     <span className="text-xs border-2 px-3 border-y-0">2325</span>

    //     <Carret />
    //   </div>
    // </ConfigProvider>
  );
};

export default OptionList;
