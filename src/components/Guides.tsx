// Guides.jsx
export default function Guides() {
  const columns = 4;
  const guides = columns + 1; // 5 guides for 4 columns

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none  ">
      <div className="relative h-full max-w-full  px-22">
        {[...Array(guides)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full w-px 
                       bg-gradient-to-b from-gray-300/50 via-gray-300/50 to-transparent 
                       bg-[length:1px_8px]"
            style={{
              left: `${(i / columns) * 100}%`, // 0%, 25%, 50%, 75%, 100%
              transform: i === guides - 1 ? "translateX(-1px)" : "none", // pull last guide inside
            }}
          />
        ))}
      </div>
    </div>
  );
}
