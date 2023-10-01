// App.tsx
import React, { useState } from "react";
import Dropdown from "./Dropdown";

function App() {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="flex items-center justify-center">
      <Dropdown
        options={options}
        selected={selectedOption}
        onSelect={setSelectedOption}
      />
    </div>
  );
}

export default App;
