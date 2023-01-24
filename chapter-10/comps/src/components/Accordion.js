import { useState } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDropdownCircle,
} from "react-icons/io";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="mr-1 text-xl">
        {isExpanded ? <IoMdArrowDropdownCircle /> : <IoMdArrowDropleftCircle />}
      </span>
    );

    return (
      <div className="" key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-100 text-lg border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && (
          <div className="p-3 text-md border-b">{item.content}</div>
        )}
      </div>
    );
  });

  return <div className="border-x border-t rounded-md">{renderedItems}</div>;
}

export default Accordion;
