import React, { useContext, useState, useEffect } from "react";
import "./contactpage.styles.scss";
import terkep from "../../assets/terkep.jpg";
import MemberCard from "../../components/teamCard/memberCard";
import TitleH1 from "../../components/title_h1/titleH1.component";
import { DataContext } from "../../contexts/DataProvider.js";
import Hero from "../../components/hero/hero.component.jsx";
import axios from "axios";

function ContactPage() {
	const { hero } = useContext(DataContext);
	const [lelkeszek, setLelkeszek] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const lelkeszDataResponse = await axios.get("/api/other/preachers");
				setLelkeszek(lelkeszDataResponse.data);
			} catch (error) {
				console.error("Error fetching data", error);
			}
		}
		fetchData();
	}, []);
	return (
		<>
			{hero.map((obj, i) => {
				return obj.page === "contact" ? (
					<Hero key={i} title={obj.heroTitle} bibleVerse={obj.bibleVerse} src={obj.image} alt={obj.headline} />
				) : null;
			})}
			<div className='contactContainer'>
				<div className='address-info'>
					<div className='map-img'>
						<img src={terkep} alt='map of church' />
					</div>
					<div className='address'>
						<h1>Bulgáriatelepi Református Gyülekezet</h1>

						<div>
							<p>400628 Kolozsvár - Cluj Napoca</p>
							<p>Arad út 8-10 szám</p>
							<p>tel: 0264 - 415 756</p>
						</div>
						<div id='megkozelites'>
							<h3>Megközelítés:</h3>
							<p>Templomunkat a város központjából a 36B,36L 50, 50L, 52 és 52L buszokkal lehet megközelíteni.</p>
							<p>A Marasti-tér felől gyalog 15-20 perc alatt lehet elérni.</p>
						</div>
					</div>
				</div>

				<div className='centerTitle'>
					<TitleH1 title='Elérhetőségeink:' />
					<div className='underline'></div>
				</div>
				<div className='contact-person'>
					{lelkeszek.map((person, index) => {
						return (
							<div className='memberContainer'>
								<MemberCard key={index} person={person} contactPage='contactPage' />
							</div>
						);
					})}
				</div>
				<div className='otherContactDetails'>
					<div className='centerTitle'>
						<TitleH1 title='BANKI ADATOK' />
						<div className='underline'></div>
					</div>
					<p className='bold'>PAROHIA REFORMATA NR IX CLUJ</p>
					<p>str. Arad nr. 10, Cluj-Napoca</p>
					<p>BANCA TRANSILVANIA</p>
					<p className='bold'>IBAN:RO74BTRL01301205951455XX</p>
					<p>CF: 4349144</p>
					<br />
					<p>
						Arra kérjük, hogy az utalás céljánál (Scopul platii vagy Detalii) tüntessék fel a cél megnevezésén
						(egyházfenntartói járulék, adomány, szeretetszolgállati adomány, stb.) túl azt is, hogy kinek vagy kiknek a
						nevében történik a befizetés.
					</p>
				</div>
			</div>
		</>
	);
}

export default ContactPage;
