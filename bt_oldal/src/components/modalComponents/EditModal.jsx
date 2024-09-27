import React, { useState } from "react";
import "./EditModal.styles.scss";

const EditModal = ({ itemData, modelType, onClose, onSave }) => {
	const [formData, setFormData] = useState(itemData || {});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setFormData({ ...formData, image: file || null }); // Store file directly or null
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const formDataToSend = new FormData();

			// Append fields to FormData
			Object.keys(formData).forEach((key) => {
				if (formData[key] !== undefined && formData[key] !== null) {
					if (key === "image" && !formData.image) {
						// Skip adding the image field if no new image is uploaded
						return;
					}
					formDataToSend.append(key, formData[key]);
				}
			});

			// Log FormData content for debugging
			for (const [key, value] of formDataToSend.entries()) {
				console.log(`${key}: ${value instanceof File ? value.name : value}`);
			}

			await onSave(formDataToSend); // Save updated data
			onClose();
		} catch (error) {
			console.error("Failed to save changes:", error);
		}
	};

	if (!itemData) return null;

	return (
		<div className='modal'>
			<div className='modal-content'>
				<h2 style={{ color: "black" }}>Edit Item</h2>

				{modelType === "Item" && (
					<>
						<label>Headline</label>
						<input type='text' name='headline' value={formData.headline || ""} onChange={handleChange} />
						<label>p1</label>
						<input type='text' name='p1' value={formData.p1 || ""} onChange={handleChange} />
						{formData.p2 !== undefined && (
							<>
								<label>p2</label>
								<input type='text' name='p2' value={formData.p2 || ""} onChange={handleChange} />
							</>
						)}
						<label>Image</label>
						<input type='file' name='image' onChange={handleImageChange} />
						{formData.image && <p>Current file: {formData.image.name}</p>}
						<label>Button Label</label>
						<input type='text' name='buttonLabel' value={formData.buttonLabel || ""} onChange={handleChange} />
					</>
				)}

				{modelType === "MainSliderData" && (
					<>
						{/* <label>Image URL</label>
						<input type='text' name='imgUrl' value={formData.imgUrl || ""} onChange={handleChange} /> */}
						<label>Image</label>
						<input type='file' name='imgUrl' onChange={handleImageChange} />
						<label>Title</label>
						<input type='text' name='title' value={formData.title || ""} onChange={handleChange} />
						<label>Subtitle</label>
						<input type='text' name='subtitle' value={formData.subTitle || ""} onChange={handleChange} />
					</>
				)}

				{/* Add more model types as needed */}

				<button onClick={handleSubmit}>Save</button>
				<button onClick={onClose}>Cancel</button>
			</div>
		</div>
	);
};

export default EditModal;
