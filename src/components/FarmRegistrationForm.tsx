import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { submitForm, submitFormSuccess } from '../features/farm/farmSlice';
// import { useToast } from '@/hooks/use-toast';
import FarmNameInput from './farm/FarmNameInput';
import OwnerNameInput from './farm/OwnerNameInput';
import LocationInput from './farm/LocationInput';
import FlockTypeSelect from './farm/FlockTypeSelect';
import BirdCountInput from './farm/BirdCountInput';
import StartDatePicker from './farm/StartDatePicker';
import FormActions from './farm/FormActions';
import SuccessMessage from './farm/SuccessMessage';

const FarmRegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const farm = useAppSelector((state) => state.farm);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateAndSubmit();
  };

  const validateAndSubmit = () => {
    // Basic validation
    if (!farm.farmName || !farm.ownerName || !farm.location.latitude || 
        !farm.location.longitude || !farm.flockType || !farm.birdCount || !farm.startDate) {
      toast({
        title: "Validation Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    dispatch(submitForm());
    
    // Simulate API call
    setTimeout(() => {
      dispatch(submitFormSuccess());
      toast({
        title: "Success!",
        description: "Farm registration submitted successfully!",
      });

          }, 1000);
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-green-700 text-white p-6">
        <h2 className="text-2xl font-bold">Farm Registration Form</h2>
        <p className="text-green-100">Register your farm details below</p>
      </div>
      
      {farm.isSubmitted ? (
        <SuccessMessage />
      ) : (
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FarmNameInput />
            <OwnerNameInput />
          </div>
          
          <LocationInput />
          
          <div className="grid md:grid-cols-3 gap-6">
            <FlockTypeSelect />
            <BirdCountInput />
            <StartDatePicker />
          </div>
          
          <FormActions onSubmit={() => validateAndSubmit()} />
        </form>
      )}
    </div>
  );
};

export default FarmRegistrationForm;