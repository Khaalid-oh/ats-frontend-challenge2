import React from "react";
import ProgramTitle from "../molecules/ProgramTitle";
import Search from "../molecules/Search";
import QualifiedBar from "../molecules/QualifiedBar";

type LeftSideProps = {
  setActiveCandidate: React.Dispatch<React.SetStateAction<number | null>>;
  activeCandidate: number | null;
};

function LeftSide({ setActiveCandidate, activeCandidate }: LeftSideProps) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <ProgramTitle />
      <Search />
      <QualifiedBar
        setActiveCandidate={setActiveCandidate}
        activeCandidate={activeCandidate}
      />
    </div>
  );
}


export default LeftSide;
