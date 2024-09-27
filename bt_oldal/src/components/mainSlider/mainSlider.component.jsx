import React, { useEffect, useRef, useState, useContext } from "react";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { AuthContext } from "../../contexts/AuthContext.js";
import { ModalContext } from "../../contexts/ModalContext";
import EditableComponent from "../editAndDeleteButtons/EditableComponent.jsx";
import "./mainSlider.styles.scss";

const MainSlider = ({ slides }) => {
	const { isLoggedIn, username } = useContext(AuthContext);
	const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
	const [current, setCurrent] = useState(0);
	const length = slides.length;
	const timeout = useRef(null);

	const startAutoSlide = () => {
		if (timeout.current) clearTimeout(timeout.current); // Clear previous timeout
		timeout.current = setTimeout(() => {
			setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
		}, 8000);
	};

	useEffect(() => {
		if (!isModalOpen) {
			startAutoSlide();
		}

		return () => {
			if (timeout.current) clearTimeout(timeout.current); // Cleanup on unmount or modal open
		};
	}, [isModalOpen, length]);

	const handleModalClose = () => {
		setIsModalOpen(false); // Close the modal
		startAutoSlide(); // Restart auto-slide
	};

	const nextSlide = () => {
		if (isModalOpen) return; // Prevent slide change if modal is open
		setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		if (isModalOpen) return; // Prevent slide change if modal is open
		setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className='heroSection'>
			<div className='heroWrapper'>
				{slides.length > 0 ? (
					slides.map((slide, index) => {
						return (
							<div className='heroSlide' key={index}>
								{index === current && (
									<div className='heroSlider'>
										<img className='heroImage' src={slide.imgUrl} alt={slide.title} />
										<div className='heroContent'>
											<EditableComponent
												itemId={slide.id}
												modelType='MainSliderData'
												apiText='other/mainSlider'
												onClose={handleModalClose}
											>
												<h1>{slide.title}</h1>
												<p>{slide.subTitle}</p>
												{isLoggedIn ? <h2>Szia, {username.toUpperCase()}!</h2> : null}
											</EditableComponent>
										</div>
									</div>
								)}
							</div>
						);
					})
				) : (
					<p>No slides available</p>
				)}
				<div className='sliderButtons'>
					<IoArrowBack className='arrowButtons' onClick={prevSlide} />
					<IoArrowForward className='arrowButtons' onClick={nextSlide} />
				</div>
			</div>
		</section>
	);
};

export default MainSlider;
