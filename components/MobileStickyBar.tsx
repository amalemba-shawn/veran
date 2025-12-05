import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

interface MobileStickyBarProps {
  onBookClick: () => void;
}

const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex gap-4">
        <a 
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 font-semibold py-3.5 rounded-xl active:bg-slate-200 transition-colors"
        >
          <Phone size={20} />
          Call Clinic
        </a>
        <button 
          onClick={onBookClick}
          className="flex-1 flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-teal-200 active:bg-teal-700 transition-colors"
        >
          <CalendarCheck size={20} />
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MobileStickyBar;