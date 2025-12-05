import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Specialties</h2>
          <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl">Comprehensive Healthcare Services</h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            From routine checkups to specialized treatments, we provide a wide range of services tailored to your needs.
          </p>
        </div>

        {/* 
          Responsive Layout Strategy:
          Mobile: horizontal scroll (snap-x) 
          Desktop: Grid 
        */}
        <div className="
          flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 -mx-4 
          md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 md:px-0 md:mx-0
          no-scrollbar
        ">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="
                flex-shrink-0 w-[85vw] sm:w-[350px] md:w-auto 
                snap-center 
                bg-slate-50 rounded-2xl p-8 
                border border-slate-100 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50 
                transition-all duration-300 group
              "
            >
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="flex justify-center mt-4 md:hidden gap-1">
          <div className="w-2 h-2 rounded-full bg-teal-600"></div>
          <div className="w-2 h-2 rounded-full bg-teal-200"></div>
          <div className="w-2 h-2 rounded-full bg-teal-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;