import React from 'react';
import './imgComponent.styles.scss';

const ImgComp = (props) => (
    <div className="img-wrapper">
        <img src={props.src} alt={props.alt}/>
    </div>
)

export default ImgComp;