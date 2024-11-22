import React from "react";
import Card2 from "../card/Card2";

const Card2Section = () => {
  const cards = [
    {
      imageURL: "/img/man1.png",
      description: "Popular Vote Winner",
      options: ["Ronaldo", "Messi", "Mbappe", "Salah"],
      infos: [{ Volumn: " 1,282, 192 ADA" }, { Date: "Nov 4, 2024" }],
    },
    {
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
      imageURL: "/img/man2.png",
      description: "Popular Vote Winner",
      options: ["Ronaldo", "Messi", "Mbappe"],
      infos: [{ Volumn: " 1,282, 192 ADA" }, { Date: "Nov 4, 2024" }],
    },
    {
      imageURL: "/img/man1.png",
      description: "Popular Vote Winner",
      options: ["Ronaldo", "Messi", "Mbappe", "Salah"],
      infos: [{ Volumn: " 1,282, 192 ADA" }, { Date: "Nov 4, 2024" }],
    },
    {
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
      imageURL: "/img/man2.png",
      description: "Popular Vote Winner",
      options: ["Ronaldo", "Messi", "Mbappe"],
      infos: [{ Volumn: " 1,282, 192 ADA" }, { Date: "Nov 4, 2024" }],
    },
    {
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
