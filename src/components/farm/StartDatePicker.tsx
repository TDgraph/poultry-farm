import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { updateStartDate } from '@/features/farm/farmSlice';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

const StartDatePicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const startDate = useAppSelector((state) => state.farm.startDate);

  return (
    <div className="space-y-2">
      <Label>Start Date*</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !startDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {startDate ? format(new Date(startDate), "PPP") : <span>Select a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={startDate ? new Date(startDate) : undefined}
            onSelect={(date) => dispatch(updateStartDate(date ? date.toISOString() : ''))}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default StartDatePicker;