import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    } else if (message.includes('Enter your Name')) {
      // Extract the user's name from the message (You'll need to implement this)
      const name = 'Gowtham'; // Replace with the extracted name
      actions.handleName(name);
    } else if (message.includes('Enter your Age')) {
      // Extract the user's age from the message (You'll need to implement this)
      const age = '27'; // Replace with the extracted age
      actions.handleAge(age);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
