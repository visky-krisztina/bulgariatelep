import React, { useContext } from "react";
import MemberCircle from "../../components/memberCircle/memberCircle.component.jsx";
import TitleH1 from "../../components/title_h1/titleH1.component.jsx";
import "./zenesIstentiszteletek.styles.scss";
import zeneszek from "../../data/zenecsapatData";
import { adminisztrativ } from "../../data/zenecsapatData";
import Hero from "../../components/hero/hero.component";
import { DataContext } from "../../contexts/DataProvider.js";

function ZenesIstentiszteletek() {
	const { hero } = useContext(DataContext);

	return (
		<>
			{hero.map((obj, i) => {
				return obj.page === "zenesIstentiszteletek" ? (
					<Hero key={i} title={obj.heroTitle} bibleVerse={obj.bibleVerse} src={obj.image} alt={obj.headline} />
				) : null;
			})}{" "}
			<div className='underline'></div>
			<div className='teamContainer'>
				<TitleH1 title='Zenecsapatunk története és tagjai' />
				<div className='underline'></div>

				<div className='historyContainer'>
					<div className='border'>
						<div className='historyContent'>
							<div className='indentation'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis enim at felis tincidunt, vel
								vehicula risus sagittis. In dictum magna eu eros aliquet rutrum. Nulla nec arcu volutpat, rhoncus nisi
								quis, lobortis dolor. Mauris iaculis facilisis sollicitudin. Curabitur semper urna diam, vitae aliquam
								odio dapibus sit amet. Aliquam at quam bibendum, lobortis turpis quis, lacinia purus. Curabitur egestas
								nulla nibh, tempor egestas sapien lobortis at. Ut convallis est sit amet aliquet maximus. Vestibulum
								luctus eleifend augue. Pellentesque justo velit, feugiat quis risus eget, tempor varius nisl. In
								tincidunt ac orci a ullamcorper. Vestibulum id nunc a ligula vehicula finibus. Morbi tempor rhoncus
								gravida. Sed tincidunt, enim rhoncus laoreet laoreet, ex mauris pellentesque lectus, consectetur pretium
								ligula metus ac neque. Proin vitae odio ex. Cras risus arcu, congue id rutrum non, ornare at lectus.
							</div>{" "}
							<br />
							<div className='indentation'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis enim at felis tincidunt, vel
								vehicula risus sagittis. In dictum magna eu eros aliquet rutrum. Nulla nec arcu volutpat, rhoncus nisi
								quis, lobortis dolor. Mauris iaculis facilisis sollicitudin. Curabitur semper urna diam, vitae aliquam
								odio dapibus sit amet. Aliquam at quam bibendum, lobortis turpis quis, lacinia purus. Curabitur egestas
								nulla nibh, tempor egestas sapien lobortis at. Ut convallis est sit amet aliquet maximus. Vestibulum
								luctus eleifend augue. Pellentesque justo velit, feugiat quis risus eget, tempor varius nisl. In
								tincidunt ac orci a ullamcorper. Vestibulum id nunc a ligula vehicula finibus. Morbi tempor rhoncus
								gravida. Sed tincidunt, enim rhoncus laoreet laoreet, ex mauris pellentesque lectus, consectetur pretium
								ligula metus ac neque. Proin vitae odio ex. Cras risus arcu, congue id rutrum non, ornare at lectus.
							</div>
						</div>
					</div>
				</div>

				<div className='teamSection'>
					<div className='theSingers'>
						{zeneszek.map((person) => {
							return (
								<div className='memberSegment'>
									<MemberCircle person={person} />
								</div>
							);
						})}
					</div>
					<div className='underline'></div>
					<div className='otherJobs'>
						{adminisztrativ.map((person) => {
							return (
								<div className='memberSegment'>
									<MemberCircle person={person} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default ZenesIstentiszteletek;
