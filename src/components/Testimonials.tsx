import { Star } from "lucide-react";
import reviewKelly from "@/assets/review-kelly.png";
import reviewBrandy from "@/assets/review-brandy.png";
import reviewBob from "@/assets/review-bob.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kelly H.",
      image: reviewKelly,
      content: "I've used it on everything from my kitchen counters to my car seats, and the results are amazing every time. It's lightweight, easy to carry, and the steam power is no joke!",
      rating: 5
    },
    {
      name: "Brandy W.",
      image: reviewBrandy,
      content: "This steam cleaner exceeded my expectations! It easily removed old stains from my sofa and made my bathroom tiles sparkle like new. Love that it's chemical-free and safe for my kids.",
      rating: 5
    },
    {
      name: "Bob S.",
      image: reviewBob,
      content: "Surprisingly strong steam for such a compact device. It's made cleaning grout and hard-to-reach places so much easier. Plus, no chemicals—just water!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join 45,000+ Happy Customers
          </h2>
          <p className="text-xl text-muted-foreground">
            Real people, real results. See why they love Solasta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl shadow-elevated hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={testimonial.image} 
                alt={`${testimonial.name} review with steam cleaner`} 
                className="w-full h-auto"
              />
              <div className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">Verified Customer</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
