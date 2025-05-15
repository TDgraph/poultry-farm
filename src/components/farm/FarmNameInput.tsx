import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { updateFarmName } from '@/features/farm/farmSlice';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FarmNameInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const farmName = useAppSelector((state) => state.farm.farmName);

  return (
    <div className="space-y-2">
      <Label htmlFor="farmName">Farm Name*</Label>
      <Input
        id="farmName"
        type="text"
        value={farmName}
        onChange={(e) => dispatch(updateFarmName(e.target.value))}
        placeholder="Enter farm name"
        className="border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200"
      />
    </div>
  );
};

export default FarmNameInput;