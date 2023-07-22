import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="m-4">
      <div
        className="flex justify-between my-2 py-2 hover:shadow-sm hover:shadow-gray-300 items-center"
        onClick={() => setIsActive(!isActive)}
      >
        <h4 className="font-semibold">{title}</h4>
        <h4 className="font-semibold pr-4">{isActive ? "-" : "+"}</h4>
      </div>
      {isActive && <div>{content}</div>}
    </div>
  );
};

export default Accordion;
