import React from "react";

const DeleteModal = ({ onClose, onDelete }) => {
	return (
		<div className='modal'>
			<div className='modal-content'>
				<h2>Are you sure you want to delete this item?</h2>
				<button onClick={onDelete}>Yes, Delete</button>
				<button onClick={onClose}>Cancel</button>
			</div>
		</div>
	);
};

export default DeleteModal;
