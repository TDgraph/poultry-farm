import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { updateFlockType } from '@/features/farm/farmSlice';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const FlockTypeSelect: React.FC = () => {
  const dispatch = useAppDispatch();
  const flockType = useAppSelector((state) => state.farm.flockType);

  return (
    <div className="space-y-2">
      <Label htmlFor="flockType">Flock Type*</Label>
      <Select
        value={flockType}
        onValueChange={(value) => dispatch(updateFlockType(value))}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select flock type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Layers">Layers</SelectItem>
          <SelectItem value="Broilers">Broilers</SelectItem>
          <SelectItem value="Breeders">Breeders</SelectItem>
          <SelectItem value="Free Range">Free Range</SelectItem>
          <SelectItem value="Organic">Organic</SelectItem>
          <SelectItem value="Other">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FlockTypeSelect;