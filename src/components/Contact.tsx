import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <form>
              <input type="text" placeholder="Name" className="w-full mb-4 p-2 rounded bg-gray-700 text-white" required />
              <input type="email" placeholder="Email" className="w-full mb-4 p-2 rounded bg-gray-700 text-white" required />
              <textarea placeholder="Message" rows={4} className="w-full mb-4 p-2 rounded bg-gray-700 text-white" required></textarea>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center mb-4">
              <Mail className="mr-2" size={20} />
              <span>info@youragency.com</span>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="mr-2" size={20} />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" size={20} />
              <span>123 Agency Street, City, Country</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;