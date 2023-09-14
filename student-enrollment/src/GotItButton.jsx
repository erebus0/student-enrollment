import React from 'react';

const GotItButton = ({ setState }) => {
  const handleClick = () => {
    setState((prevState) => ({ ...prevState, gotItClicked: true }));
  };

  return (
    <button onClick={handleClick} className="got-it-button">
      Got it!
    </button>
  );
};

export default GotItButton;
