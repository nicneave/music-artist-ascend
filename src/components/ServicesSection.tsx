
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
    }
  ];

  return (
    <section className="py-20 px-6 relative" id="services">
      {/* Background image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/lovable-uploads/7e9da3cc-8686-43cb-8560-3cdc272d0a52.png" 
          alt="Music store background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">🎯 Label Ready Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Choose the perfect service to get your music label ready. All services include detailed reporting and proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 h-full flex flex-col relative overflow-hidden animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                  {service.icon}
                </div>
                <div>
                  <span className="text-2xl mr-2">{service.emoji}</span>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-4">What's Included:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto space-y-4">
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Service Fee:</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Recommended Ad Spend:</span>
                    <span className="text-foreground font-medium">{service.adSpend}</span>
                  </div>
                </div>

                {service.note && (
                  <p className="text-xs text-muted-foreground italic">{service.note}</p>
                )}

                <Button className="w-full bg-card hover:bg-card/80 text-foreground border border-border hover:border-primary/50 transition-all duration-300">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Full Funnel */}
        <div className="mt-16 text-center">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 max-w-4xl mx-auto relative overflow-hidden ring-2 ring-primary/50 animate-pulse-glow">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary/70 text-primary-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
              <Zap className="w-4 h-4" />
              MAXIMUM IMPACT
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-lg bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
                <Zap className="w-10 h-10" />
              </div>
              <div>
                <span className="text-3xl mr-2">🚀</span>
                <h3 className="text-2xl font-bold text-foreground">Full Artist Growth Funnel (All-in-One)</h3>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Run ads for Spotify, YouTube, and Instagram together for maximum momentum.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">What's Included:</h4>
                <ul className="space-y-2">
                  <li className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Combined ad strategy across all platforms
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Weekly optimization & creative updates
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Full-funnel analytics tracking
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Ideal for artists launching a single or building long-term growth
                  </li>
                </ul>
              </div>
              
              <div className="text-center md:text-right">
                <div className="mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">$300</span>
                  <span className="text-foreground ml-2">per platform per month</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  (Example: all 3 platforms = $900/month + ad spend)
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 hover:scale-105 transition-all duration-300">
                  Launch Full Funnel Campaign
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
