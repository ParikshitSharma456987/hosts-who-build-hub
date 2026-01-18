import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full pt-8 px-6 md:pt-12 lg:pt-16 pb-0">
      <div className="max-w-5xl mx-auto flex justify-center">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
