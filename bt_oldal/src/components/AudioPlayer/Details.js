import React from 'react';
import zenecsapat from '../../assets/zenecsapat.jpg';


function Details(props) {
    return (
        <div className="c-player--details">
            <div className="details-img">
                <img src={zenecsapat} alt="zenecsapat" />
            </div>
            <div className="details-text">
                <h3 className="details-title">{props.song.title}</h3>
                <h4 className="details-artist">Szolgál: {props.song.artist}</h4>    
            </div>    
        </div>
    )
}

export default Details;