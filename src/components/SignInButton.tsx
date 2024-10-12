import React, { useState } from 'react';

interface SignInButtonProps {
  onSignIn: (email: string, password: string) => void;
}

const SignInButton: React.FC<SignInButtonProps> = ({ onSignIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleModal = () => setIsOpen(!isOpen);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn(email, password);
    toggleModal();
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Sign In
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign In</h2>
            <form onSubmit={handleSignIn}>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 border border-gray-300 rounded text-gray-800"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-2 border border-gray-300 rounded text-gray-800"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Sign In
              </button>
            </form>
            <button
              onClick={toggleModal}
              className="mt-4 text-sm text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInButton;