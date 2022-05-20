export default function Line({ children, number, selected, onClick }) {
  return (
    <div 
      className={`flex px-5 py-1 mx-20 mt-10 w-300 ${selected ? "bg-gray-300" : ""}`}
      onClick={onClick}
    >
      <p className="pr-2 mr-3 font-mono font-normal text-white-400 border-r-4 border-magenta-400 flex items-center">
        {number || 0}
      </p>
      {children}
    </div>
  );
}
