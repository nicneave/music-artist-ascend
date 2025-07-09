
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Calendar, Clock, CheckCircle, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-light-gray to-white">
      <div className="absolute inset-0 bg-gradient-to-r from-professional-blue/5 to-professional-purple/5"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Urgency header */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <div className="flex items-center justify-center gap-2 text-red-700 font-semibold mb-2">
            <Clock className="w-5 h-5" />
            <span>TIME-SENSITIVE OPPORTUNITY</span>
          </div>
          <p className="text-red-600">
            We're only accepting 10 new artists this month. After that, there's a waitlist.
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Ready to <span className="gradient-text">10x Your Music Career?</span>
        </h2>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Here's Exactly What Happens Next...
        </h3>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="music-card text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-xl">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Free Strategy Call</h3>
            <p className="text-gray-500 text-sm">We analyze your music & create a custom growth plan (15 mins)</p>
          </div>
          
          <div className="music-card text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold text-xl">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Campaign Launch</h3>
            <p className="text-gray-500 text-sm">We set everything up & launch within 48 hours</p>
          </div>
          
          <div className="music-card text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 font-bold text-xl">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Watch Growth</h3>
            <p className="text-gray-500 text-sm">Weekly reports show exactly how many new fans you're gaining</p>
          </div>
        </div>

        {/* Social proof testimonial */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1,2,3,4,5].map((star) => (
              <span key={star} className="text-yellow-400 text-xl">⭐</span>
            ))}
          </div>
          <p className="text-gray-700 font-semibold mb-2">
            "I was skeptical about ads, but these guys delivered. Went from 1,000 monthly listeners to 45,000 in 2 months. My label is now interested in a deal."
          </p>
          <p className="text-gray-500 text-sm">- Marcus J., Hip-Hop Artist</p>
        </div>

        {/* Main CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="glow-button text-xl px-12 py-6">
            📞 Book My Free Strategy Call Now
          </Button>
          <div className="text-center sm:text-left">
            <p className="text-gray-500 text-sm">✅ No commitment required</p>
            <p className="text-gray-500 text-sm">✅ Instant calendar booking</p>
            <p className="text-gray-500 text-sm">✅ Same-day availability</p>
          </div>
        </div>

        {/* Alternative contact options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Button variant="outline" className="flex items-center gap-2 py-3">
            <MessageCircle className="w-4 h-4" />
            Live Chat (Instant Response)
          </Button>
          <Button variant="outline" className="flex items-center gap-2 py-3">
            <Mail className="w-4 h-4" />
            Email (24hr Response)
          </Button>
          <Button variant="outline" className="flex items-center gap-2 py-3">
            <Phone className="w-4 h-4" />
            Call Direct: (555) 123-4567
          </Button>
        </div>

        {/* Objection handling */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h4 className="font-semibold text-gray-900 mb-4">❓ "What If I'm Not Ready?"</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-gray-700 font-semibold mb-1">✅ If you have at least 1 song on Spotify</p>
              <p className="text-gray-700 font-semibold mb-1">✅ If you want more listeners</p>
              <p className="text-gray-700 font-semibold mb-1">✅ If you're serious about music</p>
            </div>
            <div>
              <p className="text-gray-600">Then you're ready. We've worked with bedroom producers and Grammy winners.</p>
              <p className="text-gray-600 font-semibold mt-2">The only requirement? You want to grow.</p>
            </div>
          </div>
        </div>

        {/* Final urgency */}
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h4 className="text-red-700 font-bold text-lg mb-2">⚠️ FAIR WARNING</h4>
          <p className="text-red-600 mb-4">
            Every month we get full. Every month artists who waited wish they hadn't. 
            <strong> Don't be one of them.</strong>
          </p>
          <Button className="glow-button text-lg px-8 py-3">
            🔥 Secure My Spot Now (Free Call)
          </Button>
          <p className="text-red-500 text-sm mt-2 font-semibold">
            Only 3 consultation spots left this week
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
