import { AlertCircle } from "lucide-react";
import reviewKatrina from "@/assets/review-katrina.png";
import reviewEmily from "@/assets/review-emily.png";

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
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl border border-destructive/20">
              <div className="text-4xl mb-3">🧪</div>
              <h3 className="font-bold text-foreground mb-2">Harsh Chemicals</h3>
              <p className="text-muted-foreground text-sm">Toxic cleaners that harm your family and the environment</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-destructive/20">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="font-bold text-foreground mb-2">Endless Scrubbing</h3>
              <p className="text-muted-foreground text-sm">Hours of exhausting physical labor that leaves you drained</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-destructive/20">
              <div className="text-4xl mb-3">😞</div>
              <h3 className="font-bold text-foreground mb-2">Poor Results</h3>
              <p className="text-muted-foreground text-sm">Dirt and stains that just won't come out no matter what you try</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
