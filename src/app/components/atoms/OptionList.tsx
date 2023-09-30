import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Select, ConfigProvider } from "antd";
import Role from "./Role";

const OPTIONS = [
  "Applied",
  "Shortlisted",
  "Video interview",
  "Group interview",
  "Placement",
  "Invisible stage",
  "Hired",
  "Invisible video stage",
  "Withdrawn",
];

const OptionList: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            fontSize: 12,
            optionPadding: "8px 12px",
          },
        },
      }}
    >
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
      <Role />
      <Select
        className="customSelect"
        placeholder="Opportunity browsing"
        suffixIcon={<CaretDownOutlined className="text-gray-700" />}
        onChange={setSelectedItems}
        style={{ width: "82%", height: "40px", fontSize: "13px" }}
        options={filteredOptions.map((item) => ({
          value: item,
          label: item,
        }))}
      />
      <span>2325</span>
      </div>
    </ConfigProvider>
  );
};

export default OptionList;
