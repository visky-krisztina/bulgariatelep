import React, { useContext } from "react";
import "./bankDetails.styles.scss";
import { DataContext } from "../../contexts/DataProvider.js";
import Hero from "../../components/hero/hero.component";

function BankiAdatok() {
	const { hero } = useContext(DataContext);

	return (
		<>
			{hero.map((obj, i) => {
				return obj.page === "bankiAdatok" ? (
					<Hero key={i} title={obj.heroTitle} bibleVerse={obj.bibleVerse} src={obj.image} alt={obj.headline} />
				) : null;
			})}
			<div className='bankDetailsContainer'>
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
		</>
	);
}

export default BankiAdatok;
