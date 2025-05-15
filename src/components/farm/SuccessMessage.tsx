
import React from 'react';
import { useAppDispatch } from '@/app/hooks';
import { resetForm } from '@/features/farm/farmSlice';
import { Button } from '@/components/ui/button';

const SuccessMessage: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="p-8 text-center">
      <div className="bg-green-50 p-6 rounded-lg">
        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <h3 className="text-xl font-semibold text-green-700 mb-2">Registration Successful!</h3>
        <p className="text-gray-600 mb-6">Your farm has been registered successfully.</p>
        <Button 
          onClick={() => dispatch(resetForm())} 
          className="bg-green-600 hover:bg-green-700"
        >
          Register Another Farm
        </Button>
      </div>
    </div>
  );
};

export default SuccessMessage;