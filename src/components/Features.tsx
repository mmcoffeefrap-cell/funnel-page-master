import { Zap, Droplets, Flame, Shield, PackageOpen, Sparkles } from "lucide-react";
import tankCapacity from "@/assets/tank-capacity.png";
import accessories from "@/assets/accessories.png";
import productFeatures from "@/assets/product-features.png";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Heating in 3-5 Minutes",
      description: "Pressurized steam cleaner heats up quickly and releases 275°F high-temperature steam with 3 BAR pressure and 1050W power."
    },
    {
      icon: Droplets,
      title: "500ML Large Water Tank",
      description: "Extended cleaning sessions with 350ml recommended fill. Continuous steam for 10-15 minutes without refills."
    },
    {
      icon: Flame,
      title: "Chemical-Free Deep Cleaning",
      description: "High-temperature steam deeply sanitizes and eliminates dirt and grime. Perfect for grout, tiles, upholstery, and more."
    },
    {
      icon: Shield,
      title: "Safe & Lightweight",
      description: "Portable design that's easy to carry anywhere. Safe for your family, pets, and the environment - just water!"
    },
    {
      icon: PackageOpen,
      title: "13+ Premium Attachments",
      description: "Complete cleaning kit with extension nozzle, brushes, cloths, funnel, and measuring cup. Ready for any surface."
    },
    {
      icon: Sparkles,
      title: "Multi-Surface Versatility",
      description: "Works on walls, windows, mattresses, cabinets, furniture, couches, cars, showers, and more. One tool, endless uses."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for Professional Cleaning
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful steam technology meets versatile design for spotless results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <img 
              src={tankCapacity} 
              alt="500ML water tank with measurement markings - recommended 350ML capacity" 
              className="w-full h-auto rounded-2xl shadow-elevated"
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <img 
              src={accessories} 
              alt="Complete 13+ accessories kit including nozzles, brushes, and cleaning cloths" 
              className="w-full h-auto rounded-2xl shadow-elevated"
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src={productFeatures} 
              alt="Lightweight portable steam cleaner with chemical-free cleaning up to 220°F" 
              className="w-full h-auto rounded-2xl shadow-elevated"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
