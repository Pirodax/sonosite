// components/Calendar.tsx
import React from 'react';
import { Calendar as BigCalendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

interface CalendarProps {
  onDateSelect?: (slotInfo: SlotInfo) => void;
  events: any[];
}

const localizer = momentLocalizer(moment);

const Calendar: React.FC<CalendarProps> = ({ onDateSelect, events }) => {
  const handleSelectSlot = (slotInfo: SlotInfo) => {
    if (onDateSelect) {
      onDateSelect(slotInfo);
    }
  };

  return (
    <div style={{ height: '500px', marginBottom: '20px' }}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default Calendar;
