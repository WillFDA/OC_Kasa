type DropdownProps = {
  title: string;
  description: string;
};
const Dropdown = ({ title, description }: DropdownProps) => {
  return (
    <div className="bg-primary text-white h-14 rounded-md p-2 flex items-center justify-between">
      <span className="font-bold">{title}</span>
    </div>
  );
};

export default Dropdown;
