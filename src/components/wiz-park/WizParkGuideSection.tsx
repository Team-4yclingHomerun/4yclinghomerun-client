const WizParkGuideSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h2 className="mb-4 border-l-2 border-kt-red-1 pl-3 text-xl font-bold">
        {title}
      </h2>
      <div className="grid grid-cols-3 gap-4">{children}</div>
    </div>
  );
};
export default WizParkGuideSection;
