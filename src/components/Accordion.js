const Accordion = ({ title, content, isActive, setIsActive }) => {
  return (
    <div className="w-9/12 mx-auto sm:w-11/12 sm:mx-4">
      <div
        className="flex justify-between bg-gray-100 my-2 py-2 px-2 hover:shadow-sm hover:shadow-gray-400 items-center hover:cursor-pointer"
        onClick={() => setIsActive(isActive)}
      >
        <h4 className="font-semibold">{title}</h4>
        <h4 className="font-semibold pr-4">
          {isActive ? "\u2B06\uFE0F" : "\u2B07\uFE0F"}
        </h4>
      </div>
      {isActive && <div>{content}</div>}
    </div>
  );
};

export default Accordion;
