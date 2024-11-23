"use client";

import React, { lazy } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import AppProvider from "@/providers/AppProvider";
import useModal from "../components/modal/CreateBetModal/useModal";
import Modal from "../components/modal/CreateBetModal/Modal";
import CreateBetModalContent from "../components/modal/CreateBetModal/CreateBetModalContent";
import "react-toastify/dist/ReactToastify.css";

const LazyLandingHeader = lazy(() => import("../components/navigation/header"));

export default function RootClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen, modalStep, closeModal, nextStep, openModal } = useModal();

  return (
    <AppProvider>
      {/* Header */}
      <div className="z-10 fixed flex">
        <LazyLandingHeader openModal={openModal} />
      </div>
      {/* Main Content */}
      {children}
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <CreateBetModalContent />
      </Modal>
      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
      />
    </AppProvider>
  );
}
