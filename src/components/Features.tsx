import { Zap, Shield, Target, Sparkles, Rocket, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Results",
      description: "See measurable improvements from day one. No more waiting months for results that never come."
    },
    {
      icon: Shield,
      title: "100% Guaranteed",
      description: "Risk-free with our money-back guarantee. If you're not satisfied, we'll refund every penny."
    },
    {
      icon: Target,
      title: "Proven System",
      description: "Backed by research and trusted by industry leaders. This isn't theory - it's results."
    },
    {
      icon: Sparkles,
      title: "Easy to Use",
      description: "No technical skills required. Simple, intuitive, and designed for everyone."
    },
    {
      icon: Rocket,
      title: "Fast Implementation",
      description: "Get started in minutes, not hours. We've removed all the complexity and friction."
    },
    {
      icon: Heart,
      title: "24/7 Support",
      description: "Our dedicated team is always here to help. You're never alone on this journey."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Thousands Choose Us
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to succeed, all in one powerful solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      </div>
    </section>
  );
};

export default Features;
