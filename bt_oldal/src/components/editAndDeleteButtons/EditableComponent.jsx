import React, { useContext, useState } from "react";
import axiosInstance from "../../utils/axiosInstance"; // Ensure the correct import path
import { AuthContext } from "../../contexts/AuthContext.js";
import EditModal from "../modalComponents/EditModal.jsx";
import DeleteModal from "../modalComponents/DeleteModal.jsx";
import "./EditableComponent.styles.scss";

const EditableComponent = ({ children, itemId, onDelete, modelType, apiText }) => {
	const { isLoggedIn } = useContext(AuthContext);
	const [showEditModal, setShowEditModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [itemData, setItemData] = useState(null);
	const [error, setError] = useState(null);

	const fetchItemData = async () => {
		try {
			const response = await axiosInstance.get(`/api/${apiText}/${itemId}`);
			setItemData(response.data);
			setShowEditModal(true); // Open modal after data is fetched
		} catch (error) {
			console.error("Failed to fetch item data:", error);
		}
	};

	const handleDelete = async () => {
		await onDelete();
		setShowDeleteModal(false); // Close modal after deletion
	};

	const handleEdit = async (formDataToSend) => {
		try {
			const response = await axiosInstance.put(`/api/${apiText}/${itemId}`, formDataToSend, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log("Data fetched for edit:", response.data);
			setShowEditModal(false); // Close the modal after saving
			// window.location.reload(); // This refreshes the page
		} catch (error) {
			console.error("Axios error:", error);
			setError(error.message);
		}
	};

	return (
		<div className='editable-component'>
			{children}

			{isLoggedIn && (
				<>
					<button className='btn-editable' onClick={fetchItemData}>
						Edit
					</button>
					<button className='btn-editable' onClick={() => setShowDeleteModal(true)}>
						Delete
					</button>
				</>
			)}

			{showEditModal && (
				<EditModal
					itemData={itemData}
					modelType={modelType}
					onClose={() => setShowEditModal(false)}
					onSave={handleEdit}
				/>
			)}

			{showDeleteModal && <DeleteModal onClose={() => setShowDeleteModal(false)} onDelete={handleDelete} />}
		</div>
	);
};

export default EditableComponent;
