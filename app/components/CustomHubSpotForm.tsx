// app/components/CustomHubSpotForm.tsx
'use client';

import React, {useState } from 'react';
import { motion } from 'framer-motion';

type CustomHubSpotFormProps = {
  portalId: string;
  formId: string;
  variant?: 'contact' | 'newsletter';
};

export default function CustomHubSpotForm({ portalId, formId, variant = 'contact' }: CustomHubSpotFormProps) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    services: '',
    insurance: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const fields = [
      { name: 'firstname', value: formData.firstname },
      { name: 'lastname', value: formData.lastname },
      { name: 'email', value: formData.email },
      { name: 'phone', value: formData.phone },
      { name: 'services', value: formData.services },
      { name: 'insurance', value: formData.insurance }
    ];
    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    try {
      const response = await fetch(hubspotUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields, context: { pageUri: window.location.href, pageName: document.title } })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstname: '', lastname: '', email: '', phone: '', services: '', insurance: '' });
      } else {
        const errorData = await response.json();
        setStatus('error');
        setErrorMessage(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };
  
  // --- NEWSLETTER FORM VARIANT (SIMPLE) ---
  if (variant === 'newsletter') {
    if (status === 'success') {
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <div className="text-green-600 text-5xl mb-4">✓</div>
          <h3 className="text-xl font-bold text-green-800">Welcome!</h3>
          <p className="text-green-700">You've been successfully subscribed.</p>
        </motion.div>
      );
    }
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name*" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name*" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
        </div>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
        {status === 'error' && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
        <button type="submit" disabled={status === 'loading'} className="w-full bg-[#FEC102] text-[#103040] font-bold py-3 px-6 rounded-lg disabled:opacity-50 transition-colors hover:bg-[#ffdb4d]">
          {status === 'loading' ? 'Subscribing...' : 'Join Now'}
        </button>
      </form>
    );
  }

  // --- CONTACT FORM VARIANT (DETAILED) ---
  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-6 bg-green-50 rounded-lg">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-green-800">Thank You!</h3>
        <p className="text-green-700"> We'll be in touch soon.</p>
      </motion.div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
          <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
        </div>
        <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
          <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
      </div>
       <div>
        <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-1">What services are you looking for (or what are your primary concerns?)</label>
        <textarea id="services" name="services" value={formData.services} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-green-500" />
      </div>
       <div>
        <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-1">What Insurance do you have? Do you plan to use Step Up or Private Pay instead?</label>
        <textarea id="insurance" name="insurance" value={formData.insurance} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-green-500" />
      </div>
      {status === 'error' && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
      <button type="submit" disabled={status === 'loading'} className="w-full bg-[#FEC102] hover:bg-[#ffe680]  font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50">
        {status === 'loading' ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}