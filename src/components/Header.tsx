import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full py-6 px-6 md:py-8">
      <div className="max-w-4xl mx-auto flex justify-center">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
