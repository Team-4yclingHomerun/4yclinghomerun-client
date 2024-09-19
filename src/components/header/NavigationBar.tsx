import NavigationBarAuth from './NavigationBarAuth';
import NavigationBarMenu from './NavigationBarMenu';
import NavigationBarLogo from './NavigationBarLogo';

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-center bg-[#231F20] px-10 py-6 text-white">
      <NavigationBarMenu />
      <NavigationBarLogo />
      <NavigationBarAuth />
    </nav>
  );
};

export default NavigationBar;
