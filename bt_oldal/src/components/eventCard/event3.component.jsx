import React from "react";
import "./event3.styles.scss";
import { FiCalendar } from "react-icons/fi";
import { ImLocation } from "react-icons/im";

const EventCard3 = (props) => {
	return (
		<div className='eventsItem-Container'>
			<>
				<img id='eventItem-image' src={props.eventImage} alt='event' />
			</>

			<div className='eventItem-details'>
				<div className='eventDate-block'>
					<div>{props.eventDateMonth}</div>
					<div>{props.eventDateDay}</div>
				</div>
				<div className='eventItem-content'>
					<div className='eventItem-title'>{props.eventTitle}</div>
					<div className='eventItem-description'>
						<div className='eventItem-hours'>
							<div className='eventItem-icon'>
								<FiCalendar icon={FiCalendar} />
							</div>
							{props.eventDateTime}
						</div>
						<div className='eventItem-location'>
							<div className='eventItem-icon'>
								<ImLocation icon={ImLocation} />
							</div>
							{props.eventLocation}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventCard3;
