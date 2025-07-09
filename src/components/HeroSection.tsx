import { Music, TrendingUp, Users, Target, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-light-gray to-blue-50">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-professional-blue/5 via-transparent to-professional-purple/5"></div>
      
      {/* Urgency banner */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-2 z-20">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold">
          <Clock className="w-4 h-4" />
          🔥 LIMITED TIME: Free $200 Strategy Audit with Your First Campaign (Ends This Month!)
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Music className="w-12 h-12 text-professional-blue/20" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <TrendingUp className="w-10 h-10 text-professional-purple/20" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Users className="w-14 h-14 text-professional-blue/20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <Target className="w-11 h-11 text-professional-purple/20" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-16">
        {/* Social proof banner */}
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-6 py-2 mb-6">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="text-green-700 font-semibold text-sm">Trusted by 10,000+ Independent Artists</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-gray-900">
          From <span className="text-red-500">Unknown</span> to{" "}
          <span className="gradient-text">Unstoppable</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          The Exact Same System That Helped Artists Go From 0 to 1M+ Streams
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          <strong>WARNING:</strong> This isn't for artists who want "overnight success." This is for serious musicians ready to invest in proven ad strategies that actually work.
        </p>

        {/* Risk reversal */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
          <p className="text-gray-800 font-semibold">
            ✅ <strong>100% Risk-Free Guarantee:</strong> If we don't deliver the results promised in your campaign report, you get your money back. Period.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button className="glow-button text-xl px-12 py-6">
            🚀 YES! I Want More Streams (Book Free Call)
          </Button>
          <div className="text-center">
            <p className="text-gray-500 text-sm">⚡ Free 15-min strategy call</p>
            <p className="text-gray-500 text-sm">💰 No upfront payment required</p>
          </div>
        </div>

        {/* Scarcity element */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-12 max-w-lg mx-auto">
          <p className="text-red-700 font-semibold text-sm">
            ⚠️ We only take on 10 new artists per month to ensure quality results
          </p>
        </div>

        {/* Enhanced stats with social proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="music-card text-center animate-pulse-glow">
            <div className="text-4xl font-bold gradient-text mb-2">500M+</div>
            <div className="text-gray-500 mb-2">Streams Generated</div>
            <div className="text-xs text-gray-400">For artists just like you</div>
          </div>
          <div className="music-card text-center animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
            <div className="text-4xl font-bold gradient-text mb-2">$2M+</div>
            <div className="text-gray-500 mb-2">Artist Revenue Generated</div>
            <div className="text-xs text-gray-400">Proven ROI track record</div>
          </div>
          <div className="music-card text-center animate-pulse-glow" style={{ animationDelay: '1s' }}>
            <div className="text-4xl font-bold gradient-text mb-2">95%</div>
            <div className="text-gray-500 mb-2">Client Satisfaction</div>
            <div className="text-xs text-gray-400">Would recommend to others</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
