export default function Hero({ title, description }) {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <p className="text-7xl font-mono font-black text-cyan-400">{title}</p>
      <p className="text-2xl font-mono">{description}</p>
    </div>
  );
}
