import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import FarmRegistrationForm from "../components/FarmRegistrationForm";
import FarmNavigation from '../components/farm/FarmNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Farm Registration System</h1>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Complete the form below to register your farm and manage your poultry operations efficiently.
          </p>
          <div className="mt-8">
            <Link to="/farm-management">
              <Button className="bg-green-700 hover:bg-green-800">
                Go to Farm Management
              </Button>
            </Link>
          </div>
        </div>
        <FarmNavigation />
        <FarmRegistrationForm />
        
        <div className="mt-16 text-center text-sm text-gray-500">
          <p>© 2025 Farm Management System. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
