const GraphTooltipFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-10 border-2 border-kt-red-2 bg-kt-white p-2 text-center text-kt-gray-1">
      {children}
    </div>
  );
};

export default GraphTooltipFrame;
