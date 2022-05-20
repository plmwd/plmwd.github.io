import Line from "./Line";

export default function Section({ children, title, number, selected }) {
  return (
    <Line selected={selected} number={number}>
      <div className="flex flex-col ">
        <p className="font-mono capitalize text-4xl">{title}</p>
        <div className="mt-2 ml-2">
          {children}
        </div>
      </div>
    </Line>
  );
}
