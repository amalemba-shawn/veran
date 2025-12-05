import React from 'react';
import { ArrowRight, Award, ShieldCheck } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-10 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content - Order 2 on mobile, Order 1 on Desktop */}
          <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/50 text-teal-700 text-sm font-semibold mb-6">
              <Award size={16} />
              <span>Voted Top GP 2024</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Modern Care with a <span className="text-teal-600">Personal Touch</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Dr. Veran Akamah combines evidence-based medicine with holistic wellness strategies to help you achieve your best health. Experience healthcare that listens.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={onBookClick}
                className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-200/50 cursor-pointer"
              >
                Schedule Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a 
                href="#about"
                onClick={handleScrollToAbout}
                className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all hover:border-slate-300 cursor-pointer"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-teal-500" size={20} />
                <span>Board Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-teal-500" size={20} />
                <span>15+ Years Exp</span>
              </div>
            </div>
          </div>

          {/* Image Content - Order 1 on mobile, Order 2 on Desktop */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center relative">
             <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem]">
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-full h-full rounded-full bg-teal-100 mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-full h-full rounded-full bg-blue-100 mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
                
                {/* Doctor Image */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  {/* 
                      TO REPLACE THIS IMAGE AFTER EXPORTING:
                      1. Place your image file (e.g., 'profile.jpg') in the 'public' folder of your project.
                      2. Change the src below to: src="/profile.jpg"
                      
                      OR (Recommended for React):
                      1. Place image in 'src/assets/'
                      2. Import it at the top: import doctorImg from '../assets/profile.jpg'
                      3. Use the variable: src={doctorImg}
                  */}
                  <img 
                    src={profileImg}
                    alt="Dr. Veran Akamah" 
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                       <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                       <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                       <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Trusted by</p>
                      <p className="text-sm font-bold text-slate-900">5,000+ Patients</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;