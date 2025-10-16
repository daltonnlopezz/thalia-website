import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-serif font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              I'd love to hear from you! Whether you have questions about pilates classes, 
              my clothing line, or just want to say hello, I'm here to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6" />
                <span>Always Happy to Help</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-6 w-6" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Send className="h-6 w-6" />
                <span>Multiple Ways to Connect</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">hello@thalia.com</p>
              <p className="text-sm text-gray-500">I typically respond within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">(555) 123-4567</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Studio Location</h3>
              <p className="text-gray-600 mb-2">123 Wellness Street</p>
              <p className="text-sm text-gray-500">Downtown, City 12345</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="pilates-classes">Pilates Classes</option>
                    <option value="clothing-line">Clothing Line</option>
                    <option value="blog-collaboration">Blog Collaboration</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell me how I can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary inline-flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Studio Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700">Monday - Friday: 6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700">Saturday: 8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700">Sunday: 9:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/thalia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-100 text-pink-600 p-3 rounded-full hover:bg-pink-200 transition-colors duration-200"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://facebook.com/thalia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors duration-200"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://twitter.com/thalia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-100 text-sky-600 p-3 rounded-full hover:bg-sky-200 transition-colors duration-200"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-gray-600 mt-4">
                  Follow me for daily pilates tips, behind-the-scenes content, and updates on new products!
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Quick Questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  For quick questions about class schedules, pricing, or general information, 
                  feel free to call or text me directly.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Pilates Classes:</strong> (555) 123-4567</p>
                  <p><strong>Clothing Orders:</strong> (555) 123-4568</p>
                  <p><strong>General Info:</strong> hello@thalia.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-16">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Visit My Studio
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of downtown, my studio is easily accessible and welcoming.
            </p>
          </div>
          <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map would go here</p>
              <p className="text-sm text-gray-500 mt-2">123 Wellness Street, Downtown, City 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-max text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Book your first pilates class or explore my clothing line. I can't wait to meet you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Book a Class
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Shop Clothing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
