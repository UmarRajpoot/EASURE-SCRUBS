import React from "react";

const space = ({ height, width, children }) => {
  return (
    <div>
      <div className={`flex m-${height}`}>{children}</div>
      {/* <div>{children}</div>
    <div className={`h-[${height}] w-[${width}]`}></div> */}
    </div>
  );
};

export default space;
