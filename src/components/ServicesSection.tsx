import { Music2, Youtube, Instagram, ListMusic, Zap, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: <Music2 className="w-8 h-8" />,
      title: "Spotify Growth Ads Package",
      emoji: "📀",
      description: "The same system that took Sarah M. from 2K to 200K monthly listeners in 3 months.",
      features: [
        "Custom Meta ads targeting Spotify (profile, single, or presave)",
        "Genre-based audience targeting (e.g., 'Fans of Ed Sheeran, Lil Baby, etc')",
        "Retargeting engaged fans (if available)",
        "10-15 ad creatives using your music or visuals",
        "Weekly report: Streams gained, saves, CPC, CTR, CPM"
      ],
      price: "$300",
      adSpend: "$100–$500/month",
      color: "from-green-500 to-emerald-600",
      testimonial: "\"Went from 500 to 50,000 streams in 6 weeks!\" - Jake R."
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      title: "YouTube Growth Ads Package",
      emoji: "🎥",
      description: "Turn your music videos into view magnets (like we did for 500+ artists).",
      features: [
        "YouTube in-stream or Shorts ad campaigns",
        "Keyword & channel targeting (e.g. 'Fans of Hip Hop, etc')",
        "Performance tracking: views, retention rate, avg watch time"
      ],
      price: "$300",
      adSpend: "$150–$500/month",
      color: "from-red-500 to-rose-600",
      testimonial: "\"Hit 1M views in 30 days!\" - Maria L."
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram Follower Growth Campaign",
      emoji: "📸",
      description: "Build a tribe of real fans who actually buy your music and merch.",
      features: [
        "Ads to your top post or directly to profile",
        "Audience targeting: age, location, interests",
        "Cost-per-follow optimization",
        "Campaign report: follower growth, engagement rate"
      ],
      price: "$300",
      adSpend: "$100–$300/month",
      color: "from-pink-500 to-purple-600",
      testimonial: "\"Gained 10K real followers in 2 months!\" - Alex T."
    },
    {
      icon: <ListMusic className="w-8 h-8" />,
      title: "Spotify Playlisting Campaign",
      emoji: "🎯",
      description: "Get your music in front of playlist curators who can change your career overnight.",
      features: [
        "Submission to 100+ verified curators (SubmitHub, Groover, private lists)",
        "Niche targeting based on genre and vibe",
        "Full placement report with playlist name, follower count, estimated reach"
      ],
      price: "$500",
      adSpend: "No ad spend required",
      color: "from-orange-500 to-amber-600",
      note: "(Note: playlist inclusion not guaranteed, but submission volume is maximized for success)",
      testimonial: "\"Landed on 15 playlists, gained 75K streams!\" - Chris M."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-light-gray to-white" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Authority positioning */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Used by Major Label A&Rs to Discover New Talent</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="gradient-text">Choose Your Growth Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Each service has been battle-tested with 10,000+ artists. Pick what fits your goals.
          </p>
          
          {/* Social proof */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-green-700 font-semibold">
              🔥 <strong>PROOF:</strong> Our clients have been featured on Spotify Editorial Playlists, signed to labels, and quit their day jobs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="music-card h-full flex flex-col relative overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Popular badge for first service */}
              {index === 0 && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                  🔥 MOST POPULAR
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                  {service.icon}
                </div>
                <div>
                  <span className="text-2xl mr-2">{service.emoji}</span>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed font-medium">
                {service.description}
              </p>

              {/* Testimonial */}
              {service.testimonial && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
                  <p className="text-gray-700 text-sm italic">{service.testimonial}</p>
                </div>
              )}

              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-professional-blue mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto space-y-4">
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500">Investment:</span>
                    <span className="text-2xl font-bold gradient-text">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Your Ad Budget:</span>
                    <span className="text-gray-700 font-medium">{service.adSpend}</span>
                  </div>
                </div>

                {service.note && (
                  <p className="text-xs text-gray-500 italic">{service.note}</p>
                )}

                <Button className="w-full glow-button text-lg py-3">
                  🚀 Claim This Package Now
                </Button>
                
                {/* Urgency */}
                <div className="flex items-center justify-center gap-2 text-xs text-red-600">
                  <Clock className="w-3 h-3" />
                  <span>Only 3 spots left this month</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Full Funnel section */}
        <div className="mt-16 text-center">
          <div className="music-card max-w-4xl mx-auto relative overflow-hidden ring-2 ring-professional-blue/30 animate-pulse-glow">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-professional-blue to-professional-purple text-white px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
              <Zap className="w-4 h-4" />
              MAXIMUM IMPACT
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-lg bg-gradient-to-br from-professional-blue to-professional-purple text-white">
                <Zap className="w-10 h-10" />
              </div>
              <div>
                <span className="text-3xl mr-2">🚀</span>
                <h3 className="text-2xl font-bold text-gray-900">Full Artist Growth Funnel (All-in-One)</h3>
              </div>
            </div>

            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              <strong>This is what separates the pros from the amateurs.</strong> Hit all platforms simultaneously for explosive growth.
            </p>

            {/* Social proof for full funnel */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-700 font-semibold">
                "Went from bedroom producer to label deal in 4 months with the Full Funnel" - David K.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-white mb-4">What's Included:</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-electric-purple mt-1">•</span>
                    Combined ad strategy across all platforms
                  </li>
                  <li className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-electric-purple mt-1">•</span>
                    Weekly optimization & creative updates
                  </li>
                  <li className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-electric-purple mt-1">•</span>
                    Full-funnel analytics tracking
                  </li>
                  <li className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-electric-purple mt-1">•</span>
                    Ideal for artists launching a single or building long-term growth
                  </li>
                </ul>
              </div>
              
              {/* Enhanced CTA */}
              <div className="text-center md:text-right">
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">$300</span>
                  <span className="text-gray-700 ml-2">per platform per month</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  (Example: all 3 platforms = $900/month + your ad budget)
                </p>
                <Button className="glow-button text-lg px-8 py-3 mb-2">
                  🔥 I Want The Full System
                </Button>
                <p className="text-red-600 text-xs font-semibold">
                  ⚠️ Limited to 5 Full Funnel clients per month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
