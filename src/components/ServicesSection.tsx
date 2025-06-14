
import { Music2, Youtube, Instagram, ListMusic, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: <Music2 className="w-8 h-8" />,
      title: "Spotify Growth Ads Package",
      emoji: "📀",
      description: "Drive real streams, followers, and saves using Instagram and Facebook ads.",
      features: [
        "Custom Meta ads targeting Spotify (profile, single, or presave)",
        "Genre-based audience targeting (e.g., 'Fans of Ed Sheeran, Lil Baby, etc')",
        "Retargeting engaged fans (if available)",
        "10-15 ad creatives using your music or visuals",
        "Weekly report: Streams gained, saves, CPC, CTR, CPM"
      ],
      price: "$300",
      adSpend: "$100–$500/month",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      title: "YouTube Growth Ads Package",
      emoji: "🎥",
      description: "Boost video views and watch time using precision Google Ads.",
      features: [
        "YouTube in-stream or Shorts ad campaigns",
        "Keyword & channel targeting (e.g. 'Fans of Hip Hop, etc')",
        "Performance tracking: views, retention rate, avg watch time"
      ],
      price: "$300",
      adSpend: "$150–$500/month",
      color: "from-red-500 to-rose-600"
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram Follower Growth Campaign",
      emoji: "📸",
      description: "Grow your following with real, genre-specific fans via ads.",
      features: [
        "Ads to your top post or directly to profile",
        "Audience targeting: age, location, interests",
        "Cost-per-follow optimization",
        "Campaign report: follower growth, engagement rate"
      ],
      price: "$300",
      adSpend: "$100–$300/month",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: <ListMusic className="w-8 h-8" />,
      title: "Spotify Playlisting Campaign",
      emoji: "🎯",
      description: "Get pitched to real playlist curators—no bots or fake streams.",
      features: [
        "Submission to 100+ verified curators (SubmitHub, Groover, private lists)",
        "Niche targeting based on genre and vibe",
        "Full placement report with playlist name, follower count, estimated reach"
      ],
      price: "$500",
      adSpend: "No ad spend required",
      color: "from-orange-500 to-amber-600",
      note: "(Note: playlist inclusion not guaranteed, but submission volume is maximized for success)"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Full Artist Growth Funnel (All-in-One)",
      emoji: "🚀",
      description: "Run ads for Spotify, YouTube, and Instagram together for maximum momentum.",
      features: [
        "Combined ad strategy across all platforms",
        "Weekly optimization & creative updates",
        "Full-funnel analytics tracking",
        "Ideal for artists launching a single or building long-term growth"
      ],
      price: "$300",
      adSpend: "per platform per month",
      color: "from-electric-purple to-electric-blue",
      note: "(Example: all 3 platforms = $900/month + ad spend)",
      premium: true
    }
  ];

  return (
    <section className="py-20 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">🎯 Services Overview</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package to amplify your music career. All services include detailed reporting and proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`music-card h-full flex flex-col relative overflow-hidden ${
                service.premium ? 'ring-2 ring-electric-purple/50 animate-pulse-glow' : ''
              }`}
            >
              {service.premium && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-electric-purple to-electric-blue text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                  {service.icon}
                </div>
                <div>
                  <span className="text-2xl mr-2">{service.emoji}</span>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex-1">
                <h4 className="font-semibold text-white mb-4">What's Included:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-electric-purple mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto space-y-4">
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Service Fee:</span>
                    <span className="text-2xl font-bold gradient-text">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Recommended Ad Spend:</span>
                    <span className="text-white font-medium">{service.adSpend}</span>
                  </div>
                </div>

                {service.note && (
                  <p className="text-xs text-gray-400 italic">{service.note}</p>
                )}

                <Button 
                  className={`w-full ${
                    service.premium 
                      ? 'glow-button' 
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
