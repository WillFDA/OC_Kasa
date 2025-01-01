import { useState } from "react";
import Arrow from "../../assets/arrow.svg";
type DropdownProps = {
  title: string;
  description: string | string[];
};
const Dropdown = ({ title, description }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="w-full">
      <div className="relative flex items-center justify-between bg-primary text-white rounded-[10px] w-full cursor-pointer lg:p-3 p-2 z-10">
        <span className="font-bold lg:text-2xl text-sm">{title}</span>
        <img
          className={`${isOpen ? "rotate-180" : ""} lg:size-8 size-4`}
          src={Arrow}
          alt="arrow"
        />
      </div>
      {isOpen && (
        <div className="bg-gray-100 rounded-b-[10px] p-3 pt-7 -translate-y-4 flex flex-col lg:text-lg text-xs leading-none  ">
          {typeof description === "string" ? (
            <p>{description}</p>
          ) : (
            description.map((item) => <p className="mt-2">{item}</p>)
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
