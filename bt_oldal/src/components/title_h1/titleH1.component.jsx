import React from "react";
import './titleH1.styles.scss';


const TitleH1 = (props) => (
    <div className="title_styles">
          <h1 style={{color: props.textColor}}>{props.title.toUpperCase()}</h1>
    </div>  
)

export default TitleH1;