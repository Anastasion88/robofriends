import React from 'react';

// func Card
// we're recieving props and we're destructuring props inside brackets
const Card = ({ name, email, id }) => {
  // return () - returns JSX (not html) objects in virtual DOM, we only return one Div element
  // props - properties
  return (
    <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
