
import { Check, Star, Zap, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const packages = [
    {
      name: "Kickstarter Plan",
      subtitle: "\"Test The Waters\"",
      price: "$300",
      description: "Perfect for artists who want to see if ads actually work",
      features: [
        "1 Ad Campaign (Spotify, Instagram, or YouTube)",
        "Weekly reporting and optimization",
        "Campaign setup + 2 custom creatives",
        "Performance tracking dashboard",
        "30-day money-back guarantee"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-600",
      cta: "Start Small & Test",
      urgency: "Perfect for first-timers"
    },
    {
      name: "Momentum Plan",
      subtitle: "\"The Game Changer\"",
      price: "$900",
      description: "For serious artists ready to dominate their release week",
      features: [
        "3 Campaigns (Spotify + YouTube + Instagram)",
        "Weekly reporting and optimization",
        "Combined ad strategy across platforms",
        "Priority support & strategy calls",
        "Optional: +$150 for video creation"
      ],
      popular: true,
      color: "from-professional-blue to-professional-purple",
      cta: "🚀 Go All-In",
      urgency: "Most artists choose this"
    },
    {
      name: "Deluxe Plan",
      subtitle: "\"The Label Magnet\"",
      price: "$1,500",
      description: "When you're ready to get noticed by industry professionals",
      features: [
        "3 Campaigns + Spotify Playlist Submission",
        "Strategy call + 2 custom creatives",
        "100+ playlist curator submissions",
        "Full placement and performance reports",
        "Industry contact introductions"
      ],
      popular: false,
      color: "from-amber-500 to-orange-600",
      cta: "Get Industry Attention",
      urgency: "For serious career moves"
    }
  ];

  const addOns = [
    { name: "Shortform Video Creation", price: "$75-$150", description: "Viral-style Reels/TikToks that actually convert" },
    { name: "Landing Page Setup", price: "$50", description: "Professional pre-save funnel (increases conversion 3x)" },
    { name: "Extra Weekly Reporting", price: "$50/month", description: "Data nerds love this - track every metric" },
    { name: "Email Collection Setup", price: "$100", description: "Build your own fanbase you actually own" },
    { name: "Monthly Optimization Package", price: "$500/month", description: "We become your marketing department" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-light-gray" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Authority element */}
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-6 py-2 mb-6">
            <Shield className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 font-semibold text-sm">Zero Risk - 100% Money Back Guarantee</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="gradient-text">Investment Options</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            <strong>"Your next hit song is worthless if nobody hears it."</strong>
          </p>
          <div className="inline-block bg-red-50 px-6 py-3 rounded-lg border border-red-200">
            <p className="text-red-700 font-semibold">⚠️ You control your ad budget - we never touch your money</p>
          </div>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`music-card relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-professional-blue/30 scale-105 transform' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-professional-blue to-professional-purple text-white px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                <p className="text-sm text-gray-500 italic mb-3">{pkg.subtitle}</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                  {pkg.name === "Momentum Plan" && <span className="text-gray-500">/month</span>}
                </div>
                <p className="text-gray-600 font-medium">{pkg.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto space-y-3">
                <Button 
                  className={`w-full text-lg py-3 ${
                    pkg.popular 
                      ? 'glow-button' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
                  }`}
                >
                  {pkg.cta}
                </Button>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500">{pkg.urgency}</p>
                  {pkg.popular && (
                    <div className="flex items-center justify-center gap-1 text-xs text-red-600 mt-1">
                      <Clock className="w-3 h-3" />
                      <span>Only 2 spots left</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-Ons Section */}
        <div className="bg-gradient-to-r from-professional-blue/5 to-professional-purple/5 rounded-2xl p-8 mb-16 border border-gray-200">
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-900">
            <span className="gradient-text">🧩 Maximize Your Results</span>
          </h3>
          <p className="text-center text-gray-600 mb-2">
            <strong>Smart artists add these for 10x better results</strong>
          </p>
          <p className="text-center text-red-600 text-sm font-semibold mb-8">
            (We only offer these to paying clients)
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="music-card text-center hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">{addon.name}</h4>
                <p className="text-2xl font-bold gradient-text mb-3">{addon.price}</p>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Retainer Section */}
        <div className="text-center bg-gradient-to-r from-professional-blue/10 to-professional-purple/10 rounded-xl p-8 border border-gray-200 mb-16">
          <Zap className="w-12 h-12 text-professional-blue mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            📈 Ready to Go Pro? Monthly Retainer Plans
          </h3>
          <p className="text-gray-600 mb-6">
            <strong>After you see results,</strong> lock in consistent monthly growth and never worry about marketing again
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <div className="text-center">
              <p className="text-gray-700 font-semibold">2 Platforms + Strategy Calls</p>
              <p className="text-2xl font-bold gradient-text">$600-$1,000/month</p>
            </div>
            <Button className="glow-button">
              I Want Consistent Growth
            </Button>
          </div>
          <p className="text-green-600 text-sm font-semibold">
            ✅ Our retainer clients average 300% more growth than one-off campaigns
          </p>
        </div>

        {/* Enhanced Summary with objection handling */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🤔 "But Why Should I Trust You?"</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-xl">💸</span>
              </div>
              <p className="text-gray-700 font-semibold mb-1">No upfront ad spend</p>
              <p className="text-gray-500 text-sm">You control every dollar</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-xl">🛡️</span>
              </div>
              <p className="text-gray-700 font-semibold mb-1">Money-back guarantee</p>
              <p className="text-gray-500 text-sm">Zero risk to you</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-xl">📊</span>
              </div>
              <p className="text-gray-700 font-semibold mb-1">Full transparency</p>
              <p className="text-gray-500 text-sm">See exactly where every dollar goes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 text-xl">🎯</span>
              </div>
              <p className="text-gray-700 font-semibold mb-1">Proven results</p>
              <p className="text-gray-500 text-sm">500M+ streams generated</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-gray-700 font-semibold text-lg mb-2">
              "Either this works and you blow up, or you get your money back."
            </p>
            <p className="text-gray-600">
              That's literally the deal. What do you have to lose?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
