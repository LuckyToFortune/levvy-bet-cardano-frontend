"use client";
import React from "react";
import { useParams } from "next/navigation";
import TitleSection from "@/components/item/TitleSection";
import AccordionSection from "@/components/item/AccordionSection";
import HolderSection from "@/components/item/HolderSection";
import BetSection from "@/components/item/BetSection";

function Page() {
  const params = useParams();
  const id = params?.id;

  const data = {
    imageUrl: "/img/Ronaldo.png",
    title: "Popular Vote Winner 2024",
    volume: "1,282,192",
    date: "Nov 4, 2024",
    items: [
      {
        imageUrl: "/img/Ronaldo.png",
        title: "Ronaldo",
        chance: "75%",
        chartData: {
          labels: [
            "Oct 3",
            "Oct 4",
            "Oct 5",
            "Oct 6",
            "Oct 7",
            "Oct 8",
            "Oct 9",
          ],
          values: [60, 65, 70, 68, 72, 74, 75],
        },
      },
      {
        imageUrl: "/img/Messi.png",
        title: "Messi",
        chance: "25%",
        chartData: {
          labels: [
            "Oct 3",
            "Oct 4",
            "Oct 5",
            "Oct 6",
            "Oct 7",
            "Oct 8",
            "Oct 9",
          ],
          values: [40, 35, 30, 32, 28, 26, 25],
        },
      },
      {
        imageUrl: "/img/Mbappe.png",
        title: "Mbappe",
        chance: "15%",
        chartData: {
          labels: [
            "Oct 3",
            "Oct 4",
            "Oct 5",
            "Oct 6",
            "Oct 7",
            "Oct 8",
            "Oct 9",
          ],
          values: [60, 65, 70, 68, 72, 74, 75],
        },
      },
      {
        imageUrl: "/img/Haaland.png",
        title: "Haaland",
        chance: "5%",
        chartData: {
          labels: [
            "Oct 3",
            "Oct 4",
            "Oct 5",
            "Oct 6",
            "Oct 7",
            "Oct 8",
            "Oct 9",
          ],
          values: [40, 35, 30, 32, 28, 26, 25],
        },
      },
    ],
    holders: [
      {
        imageUrl: "/img/Ronaldo.png",
        userName: "Ronaldo7",
        shares: "1293",
        type: "First Option",
      },
      {
        imageUrl: "/img/Messi.png",
        userName: "Messi10",
        shares: "1293",
        type: "Second Option",
      },
      {
        imageUrl: "/img/Mbappe.png",
        userName: "Mbappe10",
        shares: "1293",
        type: "First Option",
      },
      {
        imageUrl: "/img/Haaland.png",
        userName: "Haaland9",
        shares: "1293",
        type: "Third Option",
      },
      {
        imageUrl: "/img/Messi.png",
        userName: "Messi10",
        shares: "1293",
        type: "Second Option",
      },
      {
        imageUrl: "/img/Mbappe.png",
        userName: "Mbappe10",
        shares: "1293",
        type: "First Option",
      },
      {
        imageUrl: "/img/Haaland.png",
        userName: "Haaland9",
        shares: "1293",
        type: "Second Option",
      },
    ],
    betOptions: ["First Option", "Second Option", "Third Option"],
  };

  return (
    <div className="flex md:flex-row flex-col justify-between gap-8 p-8 md:p-32 w-full">
      <div id="left" className="flex flex-col gap-6 w-full md:w-2/3">
        <TitleSection
          imageUrl={data.imageUrl}
          title={data.title}
          volume={data.volume}
          date={data.date}
        />
        <AccordionSection items={data.items} />
        <HolderSection holders={data.holders} />
      </div>

      <div id="right" className="w-full md:w-1/3">
        <BetSection options={data.betOptions} />
      </div>
    </div>
  );
}

export default Page;
