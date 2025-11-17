import { AlertCircle } from "lucide-react";
import reviewKatrina from "@/assets/review-katrina.png";
import reviewEmily from "@/assets/review-emily.png";
import painPoint1 from "@/assets/pain-point-1.png";
import painPoint2 from "@/assets/pain-point-2.png";
import painPoint3 from "@/assets/pain-point-3.png";

const Problem = () => {
  return (
    <section className="py-24 bg-destructive/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-5 h-5" />
            <span className="font-semibold">The Cleaning Struggle Is Real</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Tired of Harsh Chemicals, Scrubbing for Hours, and Surfaces That Never Look Clean?
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Traditional cleaning methods are exhausting, time-consuming, and expose your family to harmful chemicals. There has to be a better way...
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img 
              src={reviewKatrina} 
              alt="Before and after couch cleaning results showing dramatic dirt removal" 
              className="w-full h-auto rounded-2xl shadow-elevated"
            />
            <img 
              src={reviewEmily} 
              alt="Before and after shower tile cleaning showing spotless results" 
              className="w-full h-auto rounded-2xl shadow-elevated"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <img 
                src={painPoint1} 
                alt="Pain Point 1: Harsh chemicals around kids and pets - Steam cleaner solution provides chemical-free cleaning" 
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img 
                src={painPoint2} 
                alt="Pain Point 2: Can't reach tight corners - 22.4-inch bendable hose reaches difficult areas" 
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src={painPoint3} 
                alt="Pain Point 3: Heavy equipment - Compact handheld design with 9-foot power cord" 
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
