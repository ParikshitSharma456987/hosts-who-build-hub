import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const links = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/hostswhobuild/",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:info@hostswhobuild.com",
    },
  ];

  return (
    <footer className="px-6 py-12 md:py-16 mt-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-6 animate-fade-up animation-delay-400">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
                <span className="text-sm hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-border" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Hosts Who Build. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
