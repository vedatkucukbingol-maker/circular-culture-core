import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-emerald-950 text-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <p className="text-emerald-200 text-center mb-12">
            Ready to start your circular journey? Contact us for a consultation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-emerald-200/70">hello@circularculture.com.tr</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office</h3>
                  <p className="text-emerald-200/70">Istanbul, Turkey</p>
                </div>
              </div>
            </div>

            {/* İletişim Formu */}
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors text-white placeholder:text-white/40"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors text-white placeholder:text-white/40"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors text-white placeholder:text-white/40"
              ></textarea>
              <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-lg flex items-center justify-center space-x-2 transition-all">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
