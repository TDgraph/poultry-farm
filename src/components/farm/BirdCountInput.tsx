import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { updateBirdCount } from '@/features/farm/farmSlice';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const BirdCountInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const birdCount = useAppSelector((state) => state.farm.birdCount);

  return (
    <div className="space-y-2">
      <Label htmlFor="birdCount">Initial Bird Count*</Label>
      <Input
        id="birdCount"
        type="number"
        min="0"
        value={birdCount || ''}
        onChange={(e) => dispatch(updateBirdCount(parseInt(e.target.value) || 0))}
        placeholder="Enter bird count"
        className="border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200"
      />
    </div>
  );
};

export default BirdCountInput;