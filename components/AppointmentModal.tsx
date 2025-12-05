import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { AppointmentType } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: AppointmentType.CONSULTATION,
    date: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" 
          aria-hidden="true"
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          
          {/* Header */}
          <div className="bg-teal-600 px-6 py-4 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-semibold text-white" id="modal-title">
              Request Appointment
            </h3>
            <button onClick={onClose} className="text-teal-100 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="px-6 py-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                <p className="text-slate-600 mb-6">
                  Thank you, {formData.name}. Our staff will contact you shortly at {formData.phone} to confirm your appointment time.
                </p>
                <button 
                  onClick={onClose}
                  className="w-full inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-3 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full rounded-lg border-slate-300 border p-2.5 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    placeholder="Jane Doe"
                    onChange={handleChange}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full rounded-lg border-slate-300 border p-2.5 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      placeholder="jane@example.com"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="block w-full rounded-lg border-slate-300 border p-2.5 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      placeholder="(555) 000-0000"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">Visit Type</label>
                  <select
                    id="type"
                    name="type"
                    className="block w-full rounded-lg border-slate-300 border p-2.5 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    onChange={handleChange}
                  >
                    {Object.values(AppointmentType).map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="block w-full rounded-lg border-slate-300 border p-2.5 focus:ring-teal-500 focus:border-teal-500 sm:text-sm text-slate-500"
                    onChange={handleChange}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
                  >
                    Submit Request
                  </button>
                </div>
                <p className="text-xs text-center text-slate-500 mt-4">
                  For medical emergencies, please dial 911 immediately.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;