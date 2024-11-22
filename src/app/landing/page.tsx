"use client";
import LandingFooter from "../../components/navigation/footer";
import React, { lazy } from "react";
import { useRouter } from "next/navigation";
const LazyLandingHeader = lazy(
  () => import("../../components/navigation/header")
);
import HeroSection from "../../components/home/HeroSection";
import Card1Section from "../../components/home/Card1Section";
import TabsMenu from "../../components/home/TabsMenu";
import Card2Section from "../../components/home/Card2Section";

const LandingPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="z-10 fixed flex">
        <LazyLandingHeader />
      </div>
      <div className="flex flex-col justify-between items-center mt-20 px-28">
        <HeroSection />
        <Card1Section />
        <TabsMenu />
        <Card2Section />
      </div>
      {/* <LandingFooter /> */}
    </div>
  );
};

export default LandingPage;
