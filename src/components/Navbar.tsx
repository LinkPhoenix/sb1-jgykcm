import React from 'react';
import { Code2 } from 'lucide-react';
import SignInButton from './SignInButton';

interface NavbarProps {
  onSignIn: (email: string, password: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSignIn }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">Agency Name</span>
        <div className="flex items-center space-x-4">
          <Code2 className="w-8 h-8 text-blue-500" />
          <SignInButton onSignIn={onSignIn} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;