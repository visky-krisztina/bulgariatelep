import React, { useContext } from "react";
import "./felnottekPage.styles.scss";
import Hero from "../../components/hero/hero.component";
import Section from "../../components/section/section.component";
import { DataContext } from "../../contexts/DataProvider.js";

function FelnottekPage() {
	const { sectionData, hero } = useContext(DataContext);

	return (
		<>
			{hero.map((obj, i) => {
				return obj.page === "felnottek" ? (
					<Hero key={i} title={obj.heroTitle} bibleVerse={obj.bibleVerse} src={obj.image} alt={obj.headline} />
				) : null;
			})}
			{sectionData.map((obj) => {
				return obj.page === "felnottek" ? (
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

export default FelnottekPage;
