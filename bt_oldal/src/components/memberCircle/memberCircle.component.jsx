import React from 'react';
import './memberCircle.styles.scss';

const MemberCircle = (props) => {
  const { name, image, job } = props.person;

return (
    <div className='memberCircle'>
        <div className={props.size ? 'smaller-img-container' : 'img-container'}>
            <img src={image} alt={name} className='person-img'/>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
    </div>
)

}

export default MemberCircle;
