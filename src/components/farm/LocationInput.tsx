import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { updateLatitude, updateLongitude } from '@/features/farm/farmSlice';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LocationInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.farm.location);

  return (
    <div className="space-y-2">
      <Label>Location (Coordinates)*</Label>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Input
            type="text"
            placeholder="Latitude"
            value={location.latitude}
            onChange={(e) => dispatch(updateLatitude(e.target.value))}
            className="border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200"
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Longitude"
            value={location.longitude}
            onChange={(e) => dispatch(updateLongitude(e.target.value))}
            className="border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationInput;