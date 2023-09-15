import React, { useState } from 'react';

const SlotPicker = ({ createChatBotMessage, setState, actions }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const availableTimes = ['10 AM', '11 AM', '12 PM', '1 PM', '2 PM']; // Add more times as needed

  const handleTimeSelection = (time) => {
    setSelectedTime(time);

    // Send a message to the user with the selected date and time
    const botMessage = createChatBotMessage(`You selected: ${time}`);

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));
  };

  return (
    <div className="slot-picker">
      <h2>Select a Time:</h2>
      <ul>
        {availableTimes.map((time) => (
          <li
            key={time}
            onClick={() => handleTimeSelection(time)}
            className={selectedTime === time ? 'selected' : ''}
          >
            {time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlotPicker;
