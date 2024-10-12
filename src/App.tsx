import React, { lazy, Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Dashboard from './components/Dashboard';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const SkillSection = lazy(() => import('./components/SkillSection'));

const skills = [
  { title: 'Web Development', description: 'Creating responsive and dynamic websites' },
  { title: 'Mobile App Development', description: 'Building native and cross-platform mobile applications' },
  { title: 'UI/UX Design', description: 'Crafting intuitive and visually appealing user interfaces' },
  { title: 'Cloud Solutions', description: 'Implementing scalable cloud infrastructure' },
  { title: 'Data Analytics', description: 'Extracting insights from complex datasets' },
  { title: 'Cybersecurity', description: 'Protecting digital assets and ensuring data privacy' },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = (email: string, password: string) => {
    // Simple authentication logic (replace with actual authentication in production)
    if (email === 'user@example.com' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <Dashboard onSignOut={handleSignOut} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar onSignIn={handleSignIn} />
      <Hero />
      <About />
      <Services />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Suspense key={index} fallback={<div>Loading...</div>}>
              <SkillSection title={skill.title} description={skill.description} />
            </Suspense>
          ))}
        </div>
      </div>
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;