import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Sparkles } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-white relative overflow-hidden">
      {/* Light Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

      {/* Light Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-semibold text-cyan-600 tracking-wide">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 outline-none text-gray-900 placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 outline-none text-gray-900 placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-4 text-gray-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 outline-none text-gray-900 placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-2xl border border-cyan-100 hover:border-cyan-300 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-100">
                <div className="inline-flex p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-600 mb-3">Drop me a line anytime</p>
                <a
                  href="mailto:mridhulkrishnatk@gmail.com"
                  className="text-cyan-600 hover:text-cyan-700 font-medium inline-flex items-center gap-2 group/link"
                >
                  mridhulkrishnatk@gmail.com
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-100">
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Phone</h4>
                <p className="text-gray-600 mb-3">Let's have a chat</p>
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2 group/link"
                >
                  +91 95672 522212
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 group hover:shadow-xl">
              <div className="inline-flex p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Location</h4>
              <p className="text-gray-600 mb-3">Based in beautiful</p>
              <p className="text-gray-800 font-medium">Kozhikode, Kerala</p>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute"></div>
                  <div className="w-3 h-3 bg-emerald-500 rounded-full relative"></div>
                </div>
                <span className="text-emerald-600 font-semibold">Currently Available</span>
              </div>
              <p className="text-gray-600">
                I'm currently open to new opportunities and collaborations.
                Typically respond within 24 hours.
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', url: 'https://github.com/Mridhul2k03/' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mridhulkrishnatk/' },
                  { name: 'Instagram', url: 'https://www.instagram.com/__.mridhul.____/' }
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    className="flex-1 py-3 px-4 bg-gray-50 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 border border-gray-200 hover:border-cyan-300 rounded-xl text-center font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 hover:shadow-md"
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Contact;