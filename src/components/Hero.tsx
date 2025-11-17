import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import fastHeating from "@/assets/fast-heating.png";

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="animate-fade-in">
                <div className="text-accent text-xl md:text-2xl font-semibold mb-4">SOLASTA</div>
                <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                  Professional Steam Cleaning <span className="text-accent">Made Simple</span>
                </h1>
              </div>
              
              <div className="animate-fade-in-up">
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Chemical-free deep cleaning power in 3-5 minutes. Join 45,000+ happy customers who've transformed their homes!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-scale-in">
                <Button size="lg" variant="cta" className="text-lg px-8 py-6 h-auto" onClick={scrollToPricing}>
                  Claim 50% Off Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center md:justify-start gap-6 text-primary-foreground/80 animate-fade-in">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">45,000+</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
                <div className="h-12 w-px bg-primary-foreground/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">30 Days</div>
                  <div className="text-sm">Money Back</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <img 
                src={fastHeating} 
                alt="Solasta Steam Cleaner - Fast heating in 3-5 minutes with 500ML tank capacity" 
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
