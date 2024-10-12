import React from 'react';
import { Briefcase, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Our Agency</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Briefcase className="mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">10+ Years Experience</h3>
            <p className="text-gray-300">A decade of delivering exceptional digital solutions</p>
          </div>
          <div className="text-center">
            <Users className="mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">50+ Expert Team Members</h3>
            <p className="text-gray-300">Skilled professionals dedicated to your success</p>
          </div>
          <div className="text-center">
            <Award className="mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">100+ Satisfied Clients</h3>
            <p className="text-gray-300">Trusted by businesses worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;