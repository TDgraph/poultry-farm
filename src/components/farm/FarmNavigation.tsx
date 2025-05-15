
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button';

const FarmNavigation: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
      <Link to="/">
        <Button variant="outline" className="w-full sm:w-auto border-green-600 text-green-700 hover:bg-green-50">
          Back to Home
        </Button>
      </Link>
      <Link to="/farm-management">
        <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
          Farm Management
        </Button>
      </Link>
    </div>
  );
};

export default FarmNavigation;
