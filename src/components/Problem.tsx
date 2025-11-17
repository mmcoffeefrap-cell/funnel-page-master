import { AlertCircle, TrendingDown, Clock } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Struggling with Results?",
      description: "Traditional methods are outdated and ineffective. You deserve better outcomes without the frustration."
    },
    {
      icon: TrendingDown,
      title: "Wasting Time & Money?",
      description: "Stop throwing resources at solutions that don't work. Get real results that justify your investment."
    },
    {
      icon: Clock,
      title: "Running Out of Time?",
      description: "Every day without the right solution is a missed opportunity. The longer you wait, the harder it gets."
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Are You Facing These Challenges?
          </h2>
          <p className="text-xl text-muted-foreground">
            You're not alone. These common problems have been holding people back for too long.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-elevated hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
