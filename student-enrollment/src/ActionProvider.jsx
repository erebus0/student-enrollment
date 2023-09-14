import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, ...props }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Pick a slot!', { widget: 'slotPicker' });

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));
  };

  const handleName = (name) => {
    const botMessage = createChatBotMessage(`Enter your Age, ${name}`, {
      widget: 'agePicker',
    });

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));
  };

  const handleAge = (age) => {
    const botMessage = createChatBotMessage('Thank you. In 5 seconds, bot will exit.');

    // Add a delay before redirecting to page 3
    setTimeout(() => {
      // Implement the redirection logic to Page 3 here
    }, 5000);

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleName,
            handleAge,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
