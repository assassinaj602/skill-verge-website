import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // EmailJS integration (requires setup at https://www.emailjs.com/)
      // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID with your EmailJS credentials
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'YOUR_SERVICE_ID',
          template_id: 'YOUR_TEMPLATE_ID',
          user_id: 'YOUR_USER_ID',
          template_params: {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
            to_email: 'asadullahaj602@gmail.com',
          },
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg space-y-6">
        <h1 className="text-3xl font-bold text-center text-primary-700 mb-4">Contact Us</h1>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Subject</label>
          <input type="text" name="subject" value={form.subject} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400" />
        </div>
        <button type="submit" disabled={status === 'sending'} className="w-full bg-gradient-primary text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300">
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && <div className="text-green-600 text-center font-medium">Message sent successfully!</div>}
        {status === 'error' && <div className="text-red-600 text-center font-medium">Failed to send message. Please try again.</div>}
      </form>
    </div>
  );
};

export default Contact; 