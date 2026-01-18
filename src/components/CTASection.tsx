import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="max-w-xl mx-auto">
        <div className="flex flex-col gap-4 items-center">
          <Button 
            variant="cta" 
            size="xl" 
            className="w-full sm:w-auto animate-fade-up animation-delay-200"
            asChild
          >
            <a 
              href="https://chat.whatsapp.com/HiQh3q5HY2F4r4nPuzIiFP" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Users className="w-5 h-5" />
              Join the WhatsApp Community
            </a>
          </Button>
          
          <Button 
            variant="cta-outline" 
            size="lg" 
            className="w-full sm:w-auto animate-fade-up animation-delay-300"
            asChild
          >
            <a 
              href="https://api.whatsapp.com/send?phone=916366577393" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Reach Out on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
