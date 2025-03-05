// components/Calendar.tsx
import React from 'react';

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateSelect }) => {
  const handleSelect = () => {
    if (onDateSelect) {
      onDateSelect(new Date());
    }
  };

  return (
    <div>
      <h2>Calendrier (Placeholder)</h2>
      <button onClick={handleSelect}>Sélectionner la date actuelle</button>
    </div>
  );
};

export default Calendar;
