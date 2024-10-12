import React from 'react';

interface SkillSectionProps {
  title: string;
  description: string;
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default SkillSection;