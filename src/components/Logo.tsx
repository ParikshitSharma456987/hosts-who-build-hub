import logoImage from "@/assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <img 
        src={logoImage} 
        alt="Hosts Who Build" 
        className="h-20 md:h-24 w-auto"
      />
    </div>
  );
};

export default Logo;
