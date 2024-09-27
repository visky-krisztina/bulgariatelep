import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../contexts/DataProvider.js";
import "./homepage.styles.scss";
import MainSlider from "../../components/mainSlider/mainSlider.component";
import Card from "../../components/smallCard/smallCard.component";
import Section from "../../components/section/section.component";
import TitleH1 from "../../components/title_h1/titleH1.component";
import Button from "../../components/button/button.component";
import EventCard3 from "../../components/eventCard/event3.component";

import axios from "axios";
import EditableComponent from "../../components/editAndDeleteButtons/EditableComponent.jsx";

function HomePage() {
	const { sectionData } = useContext(DataContext);
	const [events, setEvents] = useState([]);
	const [mainSliderData, setMainSliderData] = useState([]);
	const [dailyVerses, setDailyVerses] = useState({});

	useEffect(() => {
		async function fetchData() {
			try {
				const mainSliderDataResponse = await axios.get("/api/other/mainSlider");
				setMainSliderData(mainSliderDataResponse.data);

				const eventsResponse = await axios.get("/api/other/events/");
				setEvents(eventsResponse.data);
			} catch (error) {
				console.error("Error fetching data", error);
			}
		}
		fetchData();
	}, []);

	useEffect(() => {
		axios
			.get("/api/other/dailyVerses/")
			.then((response) => {
				const todayVerse = response.data.find((verse) => verse.date === new Date().toISOString().split("T")[0]);
				setDailyVerses(todayVerse || {});
			})
			.catch((error) => console.error("Error fetching daily verses:", error));
	}, []);

	return (
		<div className='homepageContainer'>
			<MainSlider slides={mainSliderData} />

			<div className='card-container'>
				{sectionData.map((item) => {
					return item.page === "home_sm_card" ? (
						<Card
							key={item.id}
							title={item.headline}
							subTitle={item.p1}
							src={item.image}
							alt={item.to}
							styleMargin={item.cName}
						/>
					) : null;
				})}
			</div>

			<div className='events-Container'>
				<div className='centerTitle'>
					<TitleH1 title='Gyülekezetünk következő eseményei' />
				</div>
				<div className='underline'></div>
				<div className='linkTo-events-calendar'>
					<h3>Gyülekezetünk alkalmai naptárban is láthatóak</h3>
					<div style={{ marginTop: "0rem" }}>
						<Button buttonLabel='ide kattintva.' to='/alkalmaink' />
					</div>
				</div>

				<div className='events-holder'>
					{events.map((obj, i) => {
						return (
							<EventCard3
								key={i}
								eventImage={obj.imgUrl}
								eventDateMonth={obj.eventDateMonth}
								eventDateDay={obj.eventDateDay}
								eventDateTime={obj.eventDateTime}
								eventTitle={obj.eventTitle}
								eventLocation={obj.eventLocation}
							/>
						);
					})}
				</div>
			</div>

			{sectionData.map((obj) => {
				return obj.page === "home" ? (
					<EditableComponent itemId={obj.id} modelType='Item' apiText='items'>
						<Section
							key={obj.id}
							headline={obj.headline}
							p1={obj.p1}
							{...(obj.p2 && { p2: obj.p2 })}
							src={obj.image}
							alt={obj.headline}
							to={obj.to}
							buttonLabel={obj.buttonLabel}
							cName={obj.cName}
							verse1={obj.buttonLabel === "Lelki táplálék." ? dailyVerses.verse1 : null}
							verse2={obj.buttonLabel === "Lelki táplálék." ? dailyVerses.verse2 : null}
						/>
					</EditableComponent>
				) : null;
			})}
		</div>
	);
}

export default HomePage;
