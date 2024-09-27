import React from 'react';
import './utmutato.styles.scss';
import TitleH1 from '../../components/title_h1/titleH1.component';
import utmutato from '../../assets/2022Nov_Dec.jpg';

function UtmutatoPage() {
    const title = 'Útmutató - Bibliaolvasó kalauz'
    return (
        <div className="spiritualPageContainer">
            <div className="centerElement">
                <TitleH1 title={title.toUpperCase()}/>
            </div>
            <div className='underline'></div>

            <div className='spiritual-image-container'>
                <div className='spiritual-image'>
                    <img src={utmutato} alt="utmutato" width='100%'/>
                </div>
                <div className='spiritual-archive'>
                    <h2>Útmutató letőltés</h2>
                    <p><strong>Figyelem!</strong> A címben szerepel az év és a hónapok, amelyekre szól a tartalom.</p>
                    <div className='monthly-spiritualContainer'>
                        <div className='month-wrapper-style'>
                            <a href={utmutato}>2022 Január - Február</a>
                        </div>
                        <div className='month-wrapper-style'>
                            <a href={utmutato}>2022 Március - Április</a>
                        </div>
                        <div className='month-wrapper-style'>
                            <a href={utmutato}>2022 Május - Június</a>
                        </div>
                        <div className='month-wrapper-style'>
                            <a href={utmutato}>2022 Július - Augusztus</a>
                        </div>
                        <div className='month-wrapper-style'>
                            <a href={utmutato}>2022 Szeptember - Október</a>
                        </div>
                        <div className='month-wrapper-style'>
                            <a href={utmutato}>2022 November - December</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
)}

export default UtmutatoPage;