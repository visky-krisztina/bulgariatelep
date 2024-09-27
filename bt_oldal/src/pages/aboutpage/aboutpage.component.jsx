import React, { useContext } from "react";
import "./aboutpage.styles.scss";
import { DataContext } from "../../contexts/DataProvider.js";

import TitleH1 from "../../components/title_h1/titleH1.component";
import Section from "../../components/section/section.component";
import Hero from "../../components/hero/hero.component.jsx";

function AboutPage() {
	const { sectionData, hero } = useContext(DataContext);
	return (
		<>
			{hero.map((obj, i) => {
				return obj.page === "about" ? (
					<Hero key={i} title={obj.heroTitle} bibleVerse={obj.bibleVerse} src={obj.image} alt={obj.headline} />
				) : null;
			})}
			<div className='aboutpageContainer'>
				{sectionData.map((obj, i) => {
					return obj.page === "about" ? (
						<Section
							key={i}
							headline={obj.headline}
							p1={obj.p1}
							{...(obj.p2 && { p2: obj.p2 })}
							src={obj.image}
							alt={obj.headline}
							to={obj.to}
							buttonLabel={obj.buttonLabel}
							cName={obj.cName}
							textColor={obj.h1TextColor}
						/>
					) : null;
				})}

				<div className='historyContainer'>
					<div className='border'>
						<div className='centerTitle'>
							<TitleH1 title='A Gyülekezetünk története' />
							<div className='underline'></div>
						</div>

						<div className='historyContent'>
							<div className='indentation'>
								Gyülekezetünk a 12 kolozsvári református gyülekezet egyike, a város észak-keleti részén.
							</div>
							<br />
							<div className='indentation'>
								Gyülekezetünk 1977 július 1-én önállósult, amikor az újalsóvárosi , azaz V. sz. gyülekezettõl elválva,
								külön gyülekezetté vált. Ez a gyülekezet-rész is, akárcsak az újalsóvárosi, korábban az alsóvárosi
								egyházközséghez tartozó külvárosi területeken szervezõdött. A város gyors ütemû kiterjedése, s ezzel
								együtt a lélekszám növekedése tette ezt szükségessé.
							</div>
							<br />
							<div className='indentation'>
								Az alsóvárosi gyülekezetnek a Bulgáriatelepen már a 20. század elsõ felében is volt hol itt, hol ott
								ideiglenesen berendezett istentiszteleti otthona, ahol az alsóvárosi lelkipásztorok rendszeresen
								szolgáltak. Ezeken az alkalmakon fõleg azok az idõs hóstáti atyafiak vettek részt, akik a távoli
								„kétágú” templomba nehezebben jutottak volna el.
							</div>
							<br />
							<div className='indentation'>
								A Bulgáriatelepen a múlt század hetvenes éveiben sikerült egy magán házat megvásárolni a Bobâlna u. 24.
								szám alatt s így állandó gyülekezeti hajlékot kialakítani. Ebben az imaházban rendszeresen szolgált az
								újalsóvárosi egyházközség segédlelkészeként 1971-tol Szõcs László, akit a gyülekezet az önállósulása
								alkalmával véglegesen lelkipásztorának választott 1977 július 1.-én.
							</div>
							<br />
							<div className='indentation'>
								A gyors ütemben épülõ környék tömbházasítása a nyolcvanas években is folytatódott. Ennek nyomán a
								gyülekezet összlélekszáma a rendszerváltás idejére már 2100 lélekre emelkedett. A rendszerváltást
								követõen, a gyülekezet egyhangú meghívás alapján az addig Visában szolgáló Visky Jánost választotta
								lelkipásztorának, aki 1990 január 1. óta szolgál a gyülekezetben.
							</div>
							<div className='indentation'>
								A megváltozott társadalmi-politikai helyzetben azonnal lehetõség nyílt egy új gyülekezeti központ
								építésére, aminek szükségét mindenki érezte, kivitelezését viszont az anyagiak hiánya miatt sokan nem
								látták lehetségesnek. Isten azonban nem csak a babiloni fogságból szabadult népének adta ki egykor a
								templom építésére vonatkozó parancsot, hanem nekünk is: „Építsétek e házat!” Biztatást is adott hozzá az
								Esdrás 6,4 által: ...”a költség a király házából adassék!” Nem véletlen, hogy ugyanezen Ige alapján
								szólt az alapkõletételi ünnepségen 1991 június 30.-án a Dr. Csiha Kálmán püspök úr igehirdetése.
							</div>
							<br />
							<div className='indentation'>
								A lelki terror sötétsége után a szellemi-lelki élet romjain új életnek kellett kibontakoznia. Ennek
								beszédes bizonyítéka az 1991-95 között megépült gyülekezeti központ, amely teljes mértékben megfelel a
								21. század komplex lelki-közösségi igényeinek. Az épületegyüttes 400 férõhelyes templomot, lelkészi,
								segédlelkészi lakást, ifjúsági termet, ovodát, gyülekezeti konyhát és vendég-szobákat foglal magába. Az
								építés ideje alatt a falak épülésével párhuzamosan nõtt a mindenség gazdag Urába vetett bizalmunk és
								hitünk, aki lépésrõl-lépésre kirendelte a hatalmas munkához szükséges anyagiakat a gyülekezeti tagok és
								külföldi testvérek áldozatából. Az avató ünnepség 1995 június 15.-én zajlott ugyancsak Dr. Csiha Kálmán
								püspök úr igehirdetésével.
							</div>
							<br />
							<div className='indentation'>
								Az épületegyüttes fõtervezõje Zakariás Attila, sepsiszentgyörgyi mérnők volt, aki harmonikusan ötvözte
								az erdélyi hagyományos és a modern építészeti vonalakat. Így született meg egy otthonos, belsõ és külsõ
								megjelenésében vonzó épületegyüttes mindnyájunk örömére. Ezzel párhuzamosan és azóta is a legfontosabb
								feladatunk a gyülekezet belsõ, lelki építése. A fordulat óta eltelt 18 év lélekszámbeli lemorzsolódást
								hozott. Ennek oka egyrészt a kivándorlás, másrészt az asszimiláció, valamint a születések számának
								drasztikus csökkenése. Gyülekezetünk jelenlegi lélekszáma 1700 körül mozog.
							</div>
							<br />
							<div className='indentation'>
								Területileg 28 presbiteri körzetre oszlik. A körzeti felelõsök munkája nyomán átlátható a gyülekezet
								élete. A lelki munka terén nagy hangsúlyt fektetünk a családlátogatások rendjén kialakítandó személyes
								kapcsolatokra, az ifjúsági munkára, a rendszeresen szervezett gyülekezeti hitmélyítõ közösségi
								alkalmakra, hétvégekre és nyári táborokra, melyeket külön szervezünk a felnõtteknek és külön az
								ifjúságnak. Hitébresztõ evangelizációs heteket is szervezünk, népünk lelki ébredésének céljából. Valljuk
								ugyanis, hogy az a nép, amely nem ismeri Istenét, elvész. Ezért tartjuk roppant fontosnak, hogy a
								Krisztussal való személyes kapcsolat nyomán Istennel és embertársaival megbékélt gyülekezeti tagok
								sokasága zárkozzon fel református anyaszentegyházunk közösségébe.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutPage;
