import { Home } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
        <Home className="w-6 h-6 text-primary" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-semibold tracking-tight text-foreground font-serif">
          Hosts Who Build
        </span>
      </div>
    </div>
  );
};

export default Logo;
