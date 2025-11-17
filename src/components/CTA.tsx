import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTA = () => {
  const benefits = [
    "30-Day Money-Back Guarantee",
    "Instant Access - Start Today",
    "24/7 Priority Support",
    "Free Bonus Resources Included"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Results?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Join thousands of successful customers who made the smart choice. Limited spots available at this special price!
          </p>
          
          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 mb-8 inline-block">
            <div className="text-primary-foreground/80 text-lg mb-2">Special Offer - Save 50%</div>
            <div className="flex items-baseline justify-center gap-3 mb-4">
              <span className="text-4xl md:text-6xl font-bold text-primary-foreground">$47</span>
              <span className="text-2xl text-primary-foreground/60 line-through">$97</span>
            </div>
            <div className="text-primary-foreground/80">One-time payment • Lifetime access</div>
          </div>

          <div className="mb-8">
            <Button size="lg" variant="cta" className="text-xl px-12 py-8 h-auto">
              Get Instant Access Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-primary-foreground">
                <CheckCircle className="w-6 h-6 flex-shrink-0 text-accent" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-primary-foreground/70 text-sm">
            🔒 Secure checkout • 256-bit SSL encryption
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
