import React from "react";
import Card2 from "../card/Card2";

const Card2Section = () => {
  const cards = [
    {
      id: 1,
      imageURL: "/img/man1.png",
      description: "Popular Vote Winner",
      options: ["Ronaldo", "Messi", "Mbappe", "Salah"],
      infos: [{ Volumn: " 1,282, 192 ADA" }, { Date: "Nov 4, 2024" }],
    },
    {
      id: 2,
      imageURL: "/img/man2.png",
      description: "Popular Vote Winner",
      options: ["Ronaldo", "Messi", "Mbappe"],
      infos: [
        { Chance: "57%" },
        { Volumn: " 1,282, 192 ADA" },
        { Date: "Nov 4, 2024" },
      ],
    },
    {
      id: 3,
      imageURL: "/img/man1.png",
      description: "Popular Vote Winner",
      options: ["Ronaldo", "Messi", "Mbappe", "Salah"],
      infos: [
        { Chance: "57%" },
        { Volumn: " 1,282, 192 ADA" },
        { Date: "Nov 4, 2024" },
      ],
    },
    {
      id: 4,
      imageURL: "/img/man2.png",
      description: "Popular Vote Winner",
      options: ["Ronaldo", "Messi", "Mbappe"],
      infos: [{ Volumn: " 1,282, 192 ADA" }, { Date: "Nov 4, 2024" }],
    },
    {
      id: 5,
      imageURL: "/img/man1.png",
      description: "Popular Vote Winner",
      options: ["Ronaldo", "Messi", "Mbappe", "Salah"],
      infos: [{ Volumn: " 1,282, 192 ADA" }, { Date: "Nov 4, 2024" }],
    },
    {
      id: 6,
      imageURL: "/img/man2.png",
      description: "Popular Vote Winner",
      options: ["Ronaldo", "Messi"],
      infos: [
        { Chance: "57%" },
        { Volumn: " 1,282, 192 ADA" },
        { Date: "Nov 4, 2024" },
      ],
    },
    {
      id: 7,
      imageURL: "/img/man2.png",
      description: "Popular Vote Winner",
      options: ["Ronaldo", "Messi"],
      infos: [
        { Chance: "57%" },
        { Volumn: " 1,282, 192 ADA" },
        { Date: "Nov 4, 2024" },
      ],
    },
    {
      id: 8,
      imageURL: "/img/man2.png",
      description: "Popular Vote Winner",
      options: ["Ronaldo", "Messi", "Mbappe"],
      infos: [{ Volumn: " 1,282, 192 ADA" }, { Date: "Nov 4, 2024" }],
    },
    {
      id: 9,
      imageURL: "/img/man1.png",
      description: "Popular Vote Winner",
      options: ["Ronaldo", "Messi", "Mbappe", "Salah"],
      infos: [{ Volumn: " 1,282, 192 ADA" }, { Date: "Nov 4, 2024" }],
    },
  ];

  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mb-8 w-full h-full">
      {cards.map((card, index) => (
        <div className="h-64">
          <Card2
            key={index}
            id={card.id.toString()}
            imageURL={card.imageURL}
            description={card.description}
            options={card.options}
            infos={card.infos}
          />
        </div>
      ))}
    </div>
  );
};

export default Card2Section;
