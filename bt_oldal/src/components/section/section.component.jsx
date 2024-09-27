import React from "react";
import Button from "../button/button.component";
import ImgComp from "../imgComponent/imgComponent.component";
import TitleH1 from "../title_h1/titleH1.component";
import "./section.styles.scss";

const Section = (props) => {
	const extractVerseAndReference = (text) => {
		const match = text.match(/\(([^)]+)\)/);
		if (match) {
			return {
				verse: text.split(" (")[0],
				reference: match[1],
			};
		}
		return {
			verse: text,
			reference: null,
		};
	};

	const { verse1, verse2 } = props;

	const verse1Data = verse1 ? extractVerseAndReference(verse1) : { verse: "", reference: null };
	const verse2Data = verse2 ? extractVerseAndReference(verse2) : { verse: "", reference: null };

	return (
		<div className='sectionGlobal'>
			<div className='sectionContainer'>
				<div className='centerElement'>
					<TitleH1 title={props.headline.toUpperCase()} />
				</div>
				<div className='underline'></div>

				<div className={`sectionInfo ${props.cName}`}>
					<div className='paragraphs'>
						<p>{props.p1}</p>
						{props.p2 && <p>{props.p2}</p>}
						{props.buttonLabel === "Lelki táplálék." &&
							(verse1Data.verse ? (
								<div className='utmutatos-section'>
									<span className='verse-style'>Reggeli útravaló:</span>

									<h4>
										{verse1Data.verse}
										{verse1Data.reference && <span className='verse-reference'> ~ {verse1Data.reference}</span>}
									</h4>
									<span className='verse-style'>Esti útravaló:</span>
									<h4>
										{verse2Data.verse}
										{verse2Data.reference && <span className='verse-reference'> ~ {verse2Data.reference}</span>}
									</h4>
								</div>
							) : null)}
					</div>

					<div className='sectionImage'>
						{props.src ? (
							<div className='imageButton-style'>
								<ImgComp src={props.src} alt={props.alt} />
							</div>
						) : null}
						<div className='buttons'>
							<div className='buttons'>
								{!props.to || !props.buttonLabel ? null : (
									<div className='buttonStyle'>
										<Button buttonLabel={props.buttonLabel} to={props.to} />
									</div>
								)}
								{props.buttonLabel === "Lelki táplálék." ? (
									<div className='buttonStyle'>
										<Button buttonLabel='Bibliaolvasó kalauz.' to='/utmutato' />
									</div>
								) : null}
								{props.to === "/zenesIstentiszteletek" ? (
									<div className='buttonStyle'>
										<Button
											buttonLabel='Énekeink a Youtube-on'
											to='https://www.youtube.com/playlist?list=PL4DZ2tI1sKfV67J3ciau-HmmeaXoUp2AI'
										/>
									</div>
								) : null}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section;
