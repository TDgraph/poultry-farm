
import React from 'react';
import FarmRegistrationForm from '../components/FarmRegistrationForm';
import FarmNavigation from '../components/farm/FarmNavigation';

const FarmManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Farm Management Dashboard</h1>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Register and manage your poultry farm operations efficiently.
          </p>
        </div>
        <FarmNavigation />
        <FarmRegistrationForm />
      </div>
    </div>
  );
};

export default FarmManagement;