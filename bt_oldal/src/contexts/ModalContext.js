// contexts/ModalContext.js
import React, { createContext, useState } from "react";

// Create the ModalContext
export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
};
