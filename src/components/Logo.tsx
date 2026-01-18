import logoImage from "@/assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <img 
        src={logoImage} 
        alt="Hosts Who Build" 
        className="h-32 md:h-40 lg:h-44 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
