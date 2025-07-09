
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-light-gray to-white">
      <div className="absolute inset-0 bg-gradient-to-r from-professional-blue/5 to-professional-purple/5"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Ready to <span className="gradient-text">Amplify Your Music?</span>
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Join thousands of artists who have already boosted their careers with our proven marketing strategies. 
          Let's discuss how we can help you reach your next milestone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="music-card text-center">
            <Mail className="w-8 h-8 text-professional-blue mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-500 text-sm">Get a detailed proposal within 24 hours</p>
          </div>
          
          <div className="music-card text-center">
            <MessageCircle className="w-8 h-8 text-professional-purple mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-500 text-sm">Instant answers to your questions</p>
          </div>
          
          <div className="music-card text-center">
            <Calendar className="w-8 h-8 text-professional-blue mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Book a Call</h3>
            <p className="text-gray-500 text-sm">Free 15-minute strategy consultation</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="glow-button text-lg px-10 py-4">
            Start Your Campaign Today
          </Button>
          <Button 
            variant="outline" 
            className="text-lg px-10 py-4 border-gray-300 hover:border-professional-blue/50 bg-white hover:bg-professional-blue/5 text-gray-700"
          >
            Schedule Free Consultation
          </Button>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-professional-blue/10 to-professional-purple/10 rounded-xl border border-gray-200">
          <p className="text-gray-700 font-semibold mb-2">🎵 Special Launch Offer</p>
          <p className="text-gray-600">
            Book your first campaign this month and get a <span className="text-professional-blue font-semibold">free strategy audit</span> worth $200!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
