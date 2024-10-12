import React, { useState } from 'react';
import { BarChart, Users, FileText, Settings, Search, Bell, ChevronDown, LogOut } from 'lucide-react';

interface DashboardProps {
  onSignOut: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSignOut }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const clients = [
    { id: 1, name: 'Acme Corp', email: 'contact@acmecorp.com', status: 'Active' },
    { id: 2, name: 'Globex Inc', email: 'info@globexinc.com', status: 'Inactive' },
    { id: 3, name: 'Initech', email: 'support@initech.com', status: 'Active' },
    { id: 4, name: 'Umbrella Corp', email: 'info@umbrellacorp.com', status: 'Active' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
        </div>
        <nav className="mt-4">
          <a
            href="#"
            className={`block py-2 px-4 ${activeTab === 'dashboard' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'} flex items-center`}
            onClick={() => setActiveTab('dashboard')}
          >
            <BarChart className="mr-2" size={20} />
            Dashboard
          </a>
          <a
            href="#"
            className={`block py-2 px-4 ${activeTab === 'clients' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'} flex items-center`}
            onClick={() => setActiveTab('clients')}
          >
            <Users className="mr-2" size={20} />
            Clients
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
            <FileText className="mr-2" size={20} />
            Projects
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
            <Settings className="mr-2" size={20} />
            Settings
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              {activeTab === 'dashboard' ? 'Dashboard Overview' : 'Client Management'}
            </h1>
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
              <button className="ml-4 p-2 text-gray-400 hover:text-gray-500">
                <Bell size={20} />
              </button>
              <div className="ml-4 relative">
                <button className="flex items-center focus:outline-none">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User avatar"
                  />
                  <ChevronDown size={20} className="ml-1 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Active Projects</h3>
                <p className="text-3xl font-bold text-blue-600">12</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Total Clients</h3>
                <p className="text-3xl font-bold text-green-600">48</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Revenue This Month</h3>
                <p className="text-3xl font-bold text-purple-600">$52,750</p>
              </div>
            </div>
          )}

          {activeTab === 'clients' && (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clients.map((client) => (
                    <tr key={client.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{client.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          client.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</a>
                        <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>

        {/* Sign Out button */}
        <div className="absolute bottom-4 left-4">
          <button
            onClick={onSignOut}
            className="flex items-center text-red-500 hover:text-red-700"
          >
            <LogOut className="mr-2" size={20} />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;