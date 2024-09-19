import NavigationBarMenu from './NavigationBarMenu';
import NavigationBarLogo from './NavigationBarLogo';

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-center bg-[#231F20] px-40 py-6 text-white">
      <NavigationBarMenu />
      <NavigationBarLogo />
      {/* TODO: 로그인, 회원가입 버튼 비활성화 추후 검토 필요 */}
      {/* <NavigationBarAuth /> */}
    </nav>
  );
};

export default NavigationBar;
