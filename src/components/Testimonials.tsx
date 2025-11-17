import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "This product completely transformed how we operate. Within just 2 weeks, we saw a 300% increase in efficiency. Absolutely incredible!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Entrepreneur",
      content: "I was skeptical at first, but the results speak for themselves. Best investment I've made in my business this year. Highly recommend!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Freelance Consultant",
      content: "The support team is amazing and the product delivers exactly what it promises. I can't imagine going back to the old way of doing things.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hear From Our Happy Customers
          </h2>
          <p className="text-xl text-muted-foreground">
            Real people, real results. See what our customers are saying.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-elevated hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
