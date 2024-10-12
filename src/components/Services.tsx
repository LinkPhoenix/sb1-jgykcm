import React from 'react';
import { Code, Smartphone, Palette, Cloud, Database, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Code size={40} />, title: 'Web Development', description: 'Custom websites and web applications' },
    { icon: <Smartphone size={40} />, title: 'Mobile App Development', description: 'iOS and Android app solutions' },
    { icon: <Palette size={40} />, title: 'UI/UX Design', description: 'Intuitive and engaging user experiences' },
    { icon: <Cloud size={40} />, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure' },
    { icon: <Database size={40} />, title: 'Data Analytics', description: 'Insights from your business data' },
    { icon: <Shield size={40} />, title: 'Cybersecurity', description: 'Protecting your digital assets' },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;