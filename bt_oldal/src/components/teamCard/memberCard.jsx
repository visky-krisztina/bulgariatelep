import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import "./memberCard.scss";

const MemberCard = (props) => {
	const { name, job, image, email, phone, custom_name } = props.person;

	return (
		<div className='memberCard'>
			{props.contactPage === "contactPage" ? (
				<>
					<div className='img-container'>
						<img src={image} alt={name} className='person-img' />
					</div>

					{name === "other" ? <h4 className='author'>{custom_name}</h4> : <h4 className='author'>{name}</h4>}

					<p className='job'>{job}</p>
					<p className='info'>{email}</p>
					<p className='info'>{phone}</p>
				</>
			) : (
				<>
					<div className='img-container'>
						<img src={image} alt={name} className='person-img' />
						<span className='quote-icon'>
							<FaQuoteRight />
						</span>
					</div>
					<h4 className='author'>{name}</h4>
					<p className='job'>{job}</p>
				</>
			)}
		</div>
	);
};

export default MemberCard;
