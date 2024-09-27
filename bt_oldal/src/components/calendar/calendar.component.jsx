import React, { useState, Fragment } from "react";
import styled from "styled-components";
import "./calendar.styles.scss";

const Calendar = ({ preloadedEvents }) => {
	// const MOCK_LOADING_TIME = 1000
	const SAMPLE_META =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
	const MONTHS = [
		"Január",
		"Február",
		"Március",
		"Április",
		"Május",
		"Június",
		"Július",
		"Augusztus",
		"Szeptember",
		"Október",
		"November",
		"December",
	];
	const Button = styled.button`
		background-color: #c59d5f;
		color: white;
		font-size: 1rem;
		padding: 0 0.5rem;
		border-radius: 5px;
		border: none;
	`;
	const DAYS_SHORT = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];

	const toStartOfDay = (date) => {
		const newDate = new Date(date);
		newDate.setHours(0);
		newDate.setMinutes(0);
		newDate.setSeconds(0);
		newDate.setMilliseconds(0);
		return newDate;
	};

	const current = new Date();
	const currentMonthNumber = current.getMonth();
	const currentYear = current.getFullYear();

	//useState consts
	const [events, setEvents] = useState(preloadedEvents);

	const selectedDate = new Date(currentYear, currentMonthNumber);
	const [date, setDate] = useState(selectedDate);

	const findEventsForDate = (events, date) => {
		const dateTime = date.getTime();

		return events.filter((event) => {
			const eventFromTime = toStartOfDay(event.dateFrom).getTime();
			const eventToTime = toStartOfDay(event.dateTo).getTime();

			return dateTime >= eventFromTime && dateTime <= eventToTime;
		});
	};

	// Top bar, contains the month/year combo as well as back/forward links
	const Navigation = ({ date, setDate }) => {
		return (
			<div className='calendar-navigation'>
				<Button
					onClick={() => {
						const newDate = new Date(date);
						newDate.setMonth(newDate.getMonth() - 1);
						setDate(newDate);
					}}
				>
					{MONTHS[date.getMonth() === 0 ? 11 : date.getMonth() - 1]}
				</Button>

				<div className='monthAndYear'>
					<h2>
						{MONTHS[date.getMonth()].toUpperCase()} / {date.getFullYear()}
					</h2>
				</div>

				<Button
					onClick={() => {
						const newDate = new Date(date);
						newDate.setMonth(newDate.getMonth() + 1);
						setDate(newDate);
					}}
				>
					{MONTHS[date.getMonth() === 11 ? 0 : date.getMonth() + 1]}
				</Button>
			</div>
		);
	};

	// Week day headers: Mon, Tue, Wed etc
	const DayLabels = () => {
		return DAYS_SHORT.map((dayLabel, index) => {
			return (
				<div className='dayLabel' key={index}>
					{dayLabel}
				</div>
			);
		});
	};

	const MiniEvent = ({ event }) => {
		const eventStartingHour = event.dateFrom.split("T");
		return (
			<div className={`miniEvent ${event.type ? event.type.toLowerCase() : "alkalom"}`}>
				{eventStartingHour[1]} {event.name}
			</div>
		);
	};

	const Grid = ({ date, events, actualDate }) => {
		const ROWS_COUNT = 6;
		const currentDate = toStartOfDay(new Date());

		// Finds the closest Monday relative to the first day of
		// the target month/year combination
		// Then increment upon this day until we have a full set
		// of date objects to work with
		const startingDate = new Date(date.getFullYear(), date.getMonth(), 0);
		startingDate.setDate(startingDate.getDate() - (startingDate.getDay() - 1));

		const dates = [];
		for (let i = 0; i < ROWS_COUNT * 7; i++) {
			const date = new Date(startingDate);
			dates.push({ date, events: findEventsForDate(events, date) });
			startingDate.setDate(startingDate.getDate() + 1);
		}

		// const sunday = date.getDay()
		const SundaySermon = {
			id: 44,
			name: "Istentisztelet",
			dateFrom: "2022-11-20T10:00",
			dateTo: "2022-11-20T11:00",
			meta: SAMPLE_META,
			type: "Istentisztelet",
		};

		return (
			<Fragment>
				{dates.map((date, index) => {
					return (
						<div
							key={index}
							className={`cell ${date.date.getTime() === currentDate.getTime() ? "current" : ""} ${
								date.date.getMonth() !== actualDate.getMonth() ? "otherMonth" : ""
							}`}
						>
							<div className='date'>{date.date.getDate()}</div>

							{(date.date.getDay() === 0) & (date.date.getMonth() === actualDate.getMonth()) ? (
								<MiniEvent key={index} event={SundaySermon} />
							) : null}
							{date.date.getMonth() === actualDate.getMonth()
								? date.events.map((event, index) => <MiniEvent key={index} event={event} />)
								: null}
						</div>
					);
				})}
			</Fragment>
		);
	};

	return (
		<div className='calendar'>
			<Navigation date={date} setDate={setDate} />
			<div className='calendar-underline'></div>

			<div className='dayBoxes'>
				<DayLabels />
				<Grid date={date} actualDate={date} events={events} />
			</div>
		</div>
	);
};

export default Calendar;
