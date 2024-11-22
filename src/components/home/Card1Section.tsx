import React from "react";
import Card1 from "../card/Card1";

const Card1Section = () => {
  const cards = [
    {
      imageURL: "/img/card1.png",
      description: "Will Liverpool FC beat Manchester City?",
      buttonText: "Bet Now",
    },
    {
      imageURL: "/img/card1.png",
      description: "Will Liverpool FC beat Manchester City?",
      buttonText: "Bet Now",
    },
    {
      imageURL: "/img/card1.png",
      description: "Will Liverpool FC beat Manchester City?",
      buttonText: "Bet Now",
    },
  ];

  return (
    <div className="flex flex-row gap-4 m-4 w-full h-64 overflow-hidden">
      {cards.map((card) => (
        <div className="flex w-1/3 h-full">
          <Card1
            imageURL={card.imageURL}
            description={card.description}
            buttonText={card.buttonText}
          />
        </div>
      ))}
    </div>
  );
};

export default Card1Section;
