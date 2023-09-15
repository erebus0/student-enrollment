import React from 'react';

// const GotItButton = ({ setState }) => {
//   const handleClick = () => {
//     setState((prevState) => ({ ...prevState, gotItClicked: true }));
//   };

//   return (
//     <button onClick={handleClick} className="got-it-button">
//       Got it!
//     </button>
//   );
// };

const GotItButton = (props) => {
  const options = [
    { text: "Got It", handler: () => {}, id: 1 }
  ];
  const optionsMarkup = options.map((option) => (
    <button
       className="GotItButton"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="GotItButtonr">{optionsMarkup}</div>;

}

export default GotItButton;
