
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const packages = [
    {
      name: "Kickstarter Plan",
      price: "$300",
      description: "Perfect for testing new singles or promos",
      features: [
        "1 Ad Campaign (Spotify, Instagram, or YouTube)",
        "Weekly reporting and optimization",
        "Campaign setup + 2 custom creatives",
        "Performance tracking dashboard"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Momentum Plan",
      price: "$900",
      description: "Best for new releases or first-week push",
      features: [
        "3 Campaigns (Spotify + YouTube + Instagram)",
        "Weekly reporting and optimization",
        "Combined ad strategy across platforms",
        "Optional: +$150 for video creation"
      ],
      popular: true,
      color: "from-professional-blue to-professional-purple"
    },
    {
      name: "Deluxe Plan",
      price: "$1,500",
      description: "Ideal for rollout months or label pitches",
      features: [
        "3 Campaigns + Spotify Playlist Submission",
        "Strategy call + 2 custom creatives",
        "100+ playlist curator submissions",
        "Full placement and performance reports"
      ],
      popular: false,
      color: "from-amber-500 to-orange-600"
    }
  ];

  const addOns = [
    { name: "Shortform Video Creation", price: "$75-$150", description: "1-3 Reels/TikToks based on your track" },
    { name: "Landing Page Setup", price: "$50", description: "Simple Linktree-style page or pre-save funnel" },
    { name: "Extra Weekly Reporting", price: "$50/month", description: "More frequent insights for serious artists" },
    { name: "Email Collection Setup", price: "$100", description: "Lead capture form for fan email list" },
    { name: "Monthly Optimization Package", price: "$500/month", description: "4 campaigns per month optimization" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-light-gray" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="gradient-text">💸 Simple, Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            "Flat fee entry. Long-term scale."
          </p>
          <div className="inline-block bg-professional-blue/10 px-6 py-3 rounded-lg border border-professional-blue/20">
            <p className="text-gray-700 font-semibold">⚠️ Ad spend not included — you control your own budget</p>
          </div>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`music-card relative overflow-hidden ${
                pkg.popular ? 'ring-2 ring-professional-blue/30 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-professional-blue to-professional-purple text-white px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                  {pkg.name === "Momentum Plan" && <span className="text-gray-500">/month</span>}
                </div>
                <p className="text-gray-600">{pkg.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-professional-blue mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${
                  pkg.popular 
                    ? 'glow-button' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
                }`}
              >
                Choose {pkg.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Add-Ons Section */}
        <div className="bg-gradient-to-r from-professional-blue/5 to-professional-purple/5 rounded-2xl p-8 mb-16 border border-gray-200">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            <span className="gradient-text">🧩 Easy Add-Ons & Upsells</span>
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Enhance your campaign with these proven add-on services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="music-card text-center">
                <h4 className="font-semibold text-gray-900 mb-2">{addon.name}</h4>
                <p className="text-2xl font-bold gradient-text mb-3">{addon.price}</p>
                <p className="text-gray-500 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Retainer Section */}
        <div className="text-center bg-gradient-to-r from-professional-blue/10 to-professional-purple/10 rounded-xl p-8 border border-gray-200">
          <Zap className="w-12 h-12 text-professional-blue mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            📈 Ready to Scale? Transition to Monthly Retainers
          </h3>
          <p className="text-gray-600 mb-6">
            After 2-3 successful campaigns, lock in consistent growth with our monthly retainer packages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <p className="text-gray-700 font-semibold">2 Platforms + Strategy</p>
              <p className="text-2xl font-bold gradient-text">$600-$1,000/month</p>
            </div>
            <Button className="glow-button">
              Learn About Retainers
            </Button>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">📌 Why Our Pricing Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-professional-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-professional-blue text-xl">💸</span>
              </div>
              <p className="text-gray-700 font-semibold mb-1">$300 flat fee</p>
              <p className="text-gray-500 text-sm">Low-risk entry point</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-professional-purple/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-professional-purple text-xl">🎯</span>
              </div>
              <p className="text-gray-700 font-semibold mb-1">High-value add-ons</p>
              <p className="text-gray-500 text-sm">Better results & revenue</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-professional-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-professional-blue text-xl">📦</span>
              </div>
              <p className="text-gray-700 font-semibold mb-1">Bundled plans</p>
              <p className="text-gray-500 text-sm">More momentum for artists</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-professional-purple/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-professional-purple text-xl">🔄</span>
              </div>
              <p className="text-gray-700 font-semibold mb-1">Retainers available</p>
              <p className="text-gray-500 text-sm">Scale without burnout</p>
            </div>
          </div>
          <p className="text-gray-700 font-semibold mt-8 text-lg">
            No hidden fees, no percentage cuts — just real growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
