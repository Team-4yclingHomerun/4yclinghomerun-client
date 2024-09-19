type SectionLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const SectionLayout = ({ title, children }: SectionLayoutProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <div className="mr-3 h-6 w-1 bg-kt-red-2"></div>
        <h2 className="text-xl font-extrabold">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default SectionLayout;
