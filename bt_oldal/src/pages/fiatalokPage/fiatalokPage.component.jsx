import React, { useContext } from "react";
import "./fiatalokPage.styles.scss";
import Section from "../../components/section/section.component";
import Hero from "../../components/hero/hero.component";
import { DataContext } from "../../contexts/DataProvider.js";

function FiatalokPage() {
	const { sectionData, hero } = useContext(DataContext);
	return (
		<>
			{hero.map((obj, i) => {
				return obj.page === "fiatalok" ? (
					<Hero key={i} title={obj.heroTitle} bibleVerse={obj.bibleVerse} src={obj.image} alt={obj.headline} />
				) : null;
			})}
			{sectionData.map((obj) => {
				return obj.page === "fiatalok" ? (
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
		</>
	);
}

export default FiatalokPage;
