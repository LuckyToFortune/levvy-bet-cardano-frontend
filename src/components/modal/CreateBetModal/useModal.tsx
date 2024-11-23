"use client";
import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalStep, setModalStep] = useState<number>(0);

  const openModal = (step = 0) => {
    setIsOpen(true);
    setModalStep(step);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalStep(0);
  };

  const nextStep = () => setModalStep((prev) => prev + 1);
  const previousStep = () => setModalStep((prev) => (prev > 0 ? prev - 1 : 0));

  return {
    isOpen,
    modalStep,
    openModal,
    closeModal,
    nextStep,
    previousStep,
  };
};

export default useModal;
