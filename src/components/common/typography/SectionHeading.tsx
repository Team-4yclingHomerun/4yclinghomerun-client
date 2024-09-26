import titleImg from '@/assets/logo/logo_burst.svg';

const SectionHeading = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-2">
      <img src={titleImg} className="size-7" />
      <h1 className="mb-4 text-xl text-white">{title}</h1>
    </div>
  );
};
export default SectionHeading;
