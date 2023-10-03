import React from 'react'

type CardFrameProps = {
  title: string;
  noLine?: boolean;
  children?: React.ReactNode;
  dupliChild?: boolean;
};




const CardFrame: React.FC<CardFrameProps> = ({
    title,
    noLine,
    dupliChild,
    children,
}) => {
  return (
    <div className="flex text-sm w-full h-[30%] flex-col gap-6 bg-white p-6 mt-4 rounded-3xl">
      <div className="font-[500]">{title}</div>
      <div>{children}</div>
      <span
        className={`h-[1px] bg-gray-200 w-full ${noLine ? "hidden" : ""}`}
      ></span>
      <div className={`${dupliChild ? 'hidden' : ''}`}>{children}</div>
    </div>
  );
}

export default CardFrame

