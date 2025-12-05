import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MobileStickyBar from './components/MobileStickyBar';
import AppointmentModal from './components/AppointmentModal';
import GeminiChat from './components/GeminiChat';
import { CLINIC_INFO, TESTIMONIALS } from './constants';
import { MapPin, Mail, Phone, Star } from 'lucide-react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBookClick={openModal} />
      
      <main>
        <Hero onBookClick={openModal} />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">About The Clinic</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Patient-Centered Philosophy</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We believe that true health comes from understanding the whole person, not just the symptoms. Our clinic provides a calming environment where cutting-edge medical technology meets compassionate, human-centric care.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                   <div className="text-3xl font-bold text-teal-600 mb-1">15+</div>
                   <div className="text-sm text-slate-500 font-medium">Years Experience</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                   <div className="text-3xl font-bold text-teal-600 mb-1">5k+</div>
                   <div className="text-sm text-slate-500 font-medium">Happy Patients</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                   <div className="text-3xl font-bold text-teal-600 mb-1">24/7</div>
                   <div className="text-sm text-slate-500 font-medium">Emergency Support</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                   <div className="text-3xl font-bold text-teal-600 mb-1">4.9</div>
                   <div className="text-sm text-slate-500 font-medium">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        
        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold mb-16">What Our Patients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-teal-800/50 backdrop-blur-lg p-8 rounded-2xl border border-teal-700/50">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-teal-50 mb-6 italic leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-teal-300">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <footer id="contact" className="bg-slate-900 text-slate-300 py-16 mb-20 md:mb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <h4 className="text-white text-lg font-bold mb-6">Dr. Veran Akamah</h4>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Providing world-class integrative medicine with a personal touch. Your health is our priority.
                </p>
              </div>
              
              <div>
                <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="#home" onClick={(e) => handleFooterLinkClick(e, 'home')} className="hover:text-teal-400 transition-colors">Home</a></li>
                  <li><a href="#services" onClick={(e) => handleFooterLinkClick(e, 'services')} className="hover:text-teal-400 transition-colors">Services</a></li>
                  <li><a href="#about" onClick={(e) => handleFooterLinkClick(e, 'about')} className="hover:text-teal-400 transition-colors">About Us</a></li>
                  <li>
                    <button 
                      onClick={openModal} 
                      className="hover:text-teal-400 transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-inherit font-inherit"
                    >
                      Book Appointment
                    </button>
                  </li>
                </ul>
              </div>
              
              <div>
                 <h4 className="text-white text-lg font-bold mb-6">Contact Info</h4>
                 <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                     <MapPin className="text-teal-500 mt-1 flex-shrink-0" size={18} />
                     <span>{CLINIC_INFO.address}</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <Phone className="text-teal-500 flex-shrink-0" size={18} />
                     <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-teal-400">{CLINIC_INFO.phone}</a>
                   </li>
                   <li className="flex items-center gap-3">
                     <Mail className="text-teal-500 flex-shrink-0" size={18} />
                     <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-teal-400">{CLINIC_INFO.email}</a>
                   </li>
                 </ul>
              </div>

              <div>
                <h4 className="text-white text-lg font-bold mb-6">Hours</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-white">9:00 AM - 5:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span> <span className="text-white">10:00 AM - 2:00 PM</span></li>
                  <li className="flex justify-between"><span>Sunday</span> <span className="text-teal-500">Closed</span></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Dr. Veran Akamah Clinic. All rights reserved.
            </div>
          </div>
        </footer>
      </main>

      <MobileStickyBar onBookClick={openModal} />
      {isModalOpen && <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />}
      <GeminiChat />
    </div>
  );
};

export default App;