import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { updateOwnerName } from '@/features/farm/farmSlice';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const OwnerNameInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const ownerName = useAppSelector((state) => state.farm.ownerName);

  return (
    <div className="space-y-2">
      <Label htmlFor="ownerName">Owner Name*</Label>
      <Input
        id="ownerName"
        type="text"
        value={ownerName}
        onChange={(e) => dispatch(updateOwnerName(e.target.value))}
        placeholder="Enter owner name"
        className="border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200"
      />
    </div>
  );
};

export default OwnerNameInput;