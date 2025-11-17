import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [selectedBundle, setSelectedBundle] = useState(1);
  const [shippingProtection, setShippingProtection] = useState(true);

  const bundles = [
    {
      id: 0,
      name: "Entry Bundle",
      steamers: 1,
      cloths: 1,
      price: 79.99,
      originalPrice: 159.98,
      savings: 50,
      badge: null
    },
    {
      id: 1,
      name: "Customer Favorite",
      steamers: 1,
      cloths: 5,
      price: 89.99,
      originalPrice: 179.98,
      savings: 50,
      badge: "Most Popular"
    },
    {
      id: 2,
      name: "Ultimate Bundle",
      steamers: 1,
      cloths: 13,
      price: 103.99,
      originalPrice: 207.98,
      savings: 50,
      badge: "Best Value"
    }
  ];

  const selectedBundleData = bundles[selectedBundle];
  const totalPrice = shippingProtection 
    ? (selectedBundleData.price + 2.99).toFixed(2)
    : selectedBundleData.price.toFixed(2);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Choose Your Bundle & Save 50%
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Limited time offer - Stock selling fast!
            </p>
          </div>

          {/* Bundle Selection */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {bundles.map((bundle) => (
              <div
                key={bundle.id}
                onClick={() => setSelectedBundle(bundle.id)}
                className={`relative bg-card/95 backdrop-blur-sm rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedBundle === bundle.id
                    ? 'ring-4 ring-accent shadow-elevated scale-105'
                    : 'hover:shadow-elevated hover:scale-102'
                }`}
              >
                {bundle.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                    {bundle.badge}
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{bundle.name}</h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    {bundle.steamers} Steam Cleaner + {bundle.cloths} Fiber Cloth{bundle.cloths > 1 ? 's' : ''}
                  </div>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-foreground">${bundle.price}</span>
                    <span className="text-lg text-muted-foreground line-through">${bundle.originalPrice}</span>
                  </div>
                  <div className="text-accent font-semibold text-sm">Save {bundle.savings}%</div>
                </div>
              </div>
            ))}
          </div>

          {/* Shipping Protection */}
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <label className="flex items-start gap-4 cursor-pointer">
              <input
                type="checkbox"
                checked={shippingProtection}
                onChange={(e) => setShippingProtection(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="font-bold text-foreground">Shipping Protection - $2.99</span>
                  <span className="text-sm text-accent">(Recommended)</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Protect your order from loss, theft, or damage during shipping. Claims processed within 24 hours.
                </p>
              </div>
            </label>
          </div>

          {/* Order Summary */}
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Order Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-foreground">
                <span>{selectedBundleData.name}</span>
                <span>${selectedBundleData.price.toFixed(2)}</span>
              </div>
              {shippingProtection && (
                <div className="flex justify-between text-foreground">
                  <span>Shipping Protection</span>
                  <span>$2.99</span>
                </div>
              )}
              <div className="border-t border-border pt-3 flex justify-between text-xl font-bold text-foreground">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>

            <Button size="lg" variant="cta" className="w-full text-xl px-8 py-8 h-auto mb-6">
              Claim Your {selectedBundleData.savings}% Discount Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-accent" />
                <span className="text-sm font-medium">30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-accent" />
                <span className="text-sm font-medium">Free Shipping on All Orders</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-accent" />
                <span className="text-sm font-medium">24/7 Customer Support</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-accent" />
                <span className="text-sm font-medium">13+ Premium Attachments</span>
              </div>
            </div>

            <div className="mt-6 text-center text-primary-foreground/70 text-sm">
              🔒 Secure checkout • 256-bit SSL encryption
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
