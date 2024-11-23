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
import Modal from "../../components/modal/CreateBetModal/Modal";
import CreateBetModalContent from "../../components/modal/CreateBetModal/CreateBetModalContent";
import useModal from "../../components/modal/CreateBetModal/useModal";

const LandingPage = () => {
  const router = useRouter();
  const { isOpen, modalStep, closeModal, nextStep, openModal } = useModal();

  return (
    <div>
      <div className="z-10 fixed flex">
        <LazyLandingHeader openModal={openModal} />
      </div>
      <div className="flex flex-col justify-between items-center mt-20 px-28">
        <HeroSection />
        <Card1Section />
        <TabsMenu />
        <Card2Section />
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <CreateBetModalContent />
      </Modal>
      {/* <LandingFooter /> */}
    </div>
  );
};

export default LandingPage;
