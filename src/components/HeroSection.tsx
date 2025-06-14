
import { Music, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/20 via-transparent to-electric-blue/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Music className="w-12 h-12 text-electric-purple/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <TrendingUp className="w-10 h-10 text-electric-blue/30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Users className="w-14 h-14 text-electric-purple/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <Target className="w-11 h-11 text-electric-blue/30" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          Amplify Your{" "}
          <span className="gradient-text">Music Career</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Professional digital marketing services designed specifically for music artists. 
          Grow your Spotify streams, YouTube views, and social media following with proven ad strategies.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button className="glow-button text-lg px-10 py-4">
            View Our Services
          </Button>
          <Button 
            variant="outline" 
            className="text-lg px-10 py-4 border-white/20 hover:border-electric-purple/50 bg-transparent hover:bg-electric-purple/10"
          >
            Get Free Consultation
          </Button>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="music-card text-center animate-pulse-glow">
            <div className="text-4xl font-bold gradient-text mb-2">500M+</div>
            <div className="text-gray-400">Streams Generated</div>
          </div>
          <div className="music-card text-center animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
            <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
            <div className="text-gray-400">Artists Served</div>
          </div>
          <div className="music-card text-center animate-pulse-glow" style={{ animationDelay: '1s' }}>
            <div className="text-4xl font-bold gradient-text mb-2">95%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
