import React, { useContext } from "react";
import "./csendesNapok.styles.scss";
import Section from "../../components/section/section.component";
import Button from "../../components/button/button.component";
import { DataContext } from "../../contexts/DataProvider.js";
import Hero from "../../components/hero/hero.component";

function CsendesNapok() {
	const { sectionData, hero } = useContext(DataContext);

	return (
		<>
			{hero.map((obj, i) => {
				return obj.page === "csendesNapok" ? (
					<Hero key={i} title={obj.heroTitle} bibleVerse={obj.bibleVerse} src={obj.image} alt={obj.headline} />
				) : null;
			})}
			<div className='pageContainer'>
				{sectionData.map((obj) => {
					return obj.page === "csendesNapok" ? (
						<div style={{ marginTop: "1rem" }}>
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
							/>
						</div>
					) : null;
				})}

				<div id='forMoreInfo'>
					<h2>Csendesnapokkal kapcsolatos tudnivalókért kérjük keressék meg gyülekezetünk lelkészeit!</h2>
					<Button buttonLabel='Elérhetőség' to='/contact' />
				</div>
			</div>
		</>
	);
}

export default CsendesNapok;
