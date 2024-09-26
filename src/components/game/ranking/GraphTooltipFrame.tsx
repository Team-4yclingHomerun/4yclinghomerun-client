const GraphTooltipFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-10 border-2 border-kt-red-2 bg-kt-gray-2 p-2 text-center text-white">
      {children}
    </div>
  );
};

export default GraphTooltipFrame;
