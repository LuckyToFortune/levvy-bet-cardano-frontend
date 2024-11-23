"use client";
import LandingFooter from "../../components/navigation/footer";
import React, { lazy } from "react";
import { useRouter } from "next/navigation";

import HeroSection from "../../components/home/HeroSection";
import Card1Section from "../../components/home/Card1Section";
import TabsMenu from "../../components/home/TabsMenu";
import Card2Section from "../../components/home/Card2Section";

const LandingPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col justify-between items-center px-28 pt-20">
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
