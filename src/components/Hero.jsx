export default function Hero({ title, description, image }) {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex flex-col justify-center items-center py-10">
        <p className="text-7xl font-mono text-center font-black text-cyan-400">{title}</p>
        <p className="text-2xl font-mono text-center">{description}</p>
      </div>
      <div className="flex self-center">
        <img src={image} className="scale-75 h-auto shadow-2xl"/>
      </div>
    </div>
  );
}
