export default function Guides({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Grid Overlay */}
      <div className="pointer-events-none max-w-6xl mx-auto absolute inset-0 z-50 ">
        {/* Left solid border */}
        <div className="absolute left-0  top-0 h-full border-l border-gray-200" />
        {/* Right solid border */}
        <div className="absolute right-0  top-0 h-full border-r border-gray-200" />
        <div className="absolute inset-y-0 left-4 right-4 lg:left-22 lg:right-22  ">
          {/* Empty divs just to place the grid lines */}
          <div className="" />
          <div className="border-l border-dashed border-gray-100" />
          <div className="border-l border-dashed border-gray-100" />
          <div className="border-l border-dashed border-gray-100" />
          {/* The last column stays empty (so we only get 4 gridlines inside) */}
        </div>
      </div>

      {/* Page Content */}
      <div className="relative z-10  ">{children}</div>
    </div>
  );
}
