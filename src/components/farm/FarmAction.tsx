import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { resetForm } from '@/features/farm/farmSlice';
import { Button } from '../../components/ui/button';

interface FormActionsProps {
  onSubmit: () => void;
}

const FormActions: React.FC<FormActionsProps> = ({ onSubmit }) => {
  const dispatch = useAppDispatch();
  const isSubmitting = useAppSelector((state) => state.farm.isSubmitting);

  return (
    <div className="pt-4 flex flex-col sm:flex-row gap-3">
      <Button 
        type="button"
        onClick={onSubmit}
        className="bg-green-600 hover:bg-green-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Register Farm"}
      </Button>
      <Button 
        type="button" 
        variant="outline"
        onClick={() => dispatch(resetForm())}
        disabled={isSubmitting}
      >
        Clear Form
      </Button>
    </div>
  );
};

export default FormActions;