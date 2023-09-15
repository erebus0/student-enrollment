import React from 'react';

const MessageParser = ({ children, actions, createChatBotMessage, setState }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    } else if (message.includes('Enter your Name')) {
      // Extract the user's name from the message (You'll need to implement this)
      const name = 'Gowtham'; // Replace with the extracted name
      actions.handleName(name);
    } else if (message.includes('Pick a slot')) {
      actions.handleSlot(); // Trigger the action to display the calendar slot
    } else if (message.includes('Enter your Age')) {
      handleAge();
    }
  };

  const handleAge = () => {
    // Send a message indicating that the age has been captured
    const botMessage = createChatBotMessage('Age captured. Proceeding to the next step.');

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));

    // Call the action to handle the age input (this should trigger the action in ActionProvider)
    actions.handleAge();
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
          createChatBotMessage,
          setState,
        });
      })}
    </div>
  );
};

export default MessageParser;
