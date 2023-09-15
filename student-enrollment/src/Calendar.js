import React, { useState } from 'react';

const Calendar = ({ onSelectSlot }) => {
  const availableSlots = [
    '15 MAY, MON 11AM',
    '16 MAY, TUE 2PM',
    '17 MAY, WED 3PM',
    // Add more available slots here
  ];

  const handleSlotClick = (slot) => {
    onSelectSlot(slot);
  };

  return (
    <div className="calendar-slot">
      <h2>Select a Slot:</h2>
      <ul>
        {availableSlots.map((slot) => (
          <li key={slot} onClick={() => handleSlotClick(slot)}>
            {slot}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
