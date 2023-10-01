import React, { useState } from "react";
import Select from "./Select";


const options = [
  { option: "Applied", count: 12 },
  { option: "Shortlisted", count: 9 },
  { option: "Video interview", count: 0 },
  { option: "Group interview", count: 9 },
  { option: "Placement", count: 6 },
  { option: "Invisble stage", count: 1 },
  { option: "Hired", count: 0 },
  { option: "Invisible video stage", count: 0 },
  { option: "Withdrawn", count:1 },
];

const OptionList: React.FC = () => {

  return (
    <Select options={options} />
  );
};

export default OptionList;
