import React, { useState } from 'react';
import './predikaciok.styles.scss';

const SermonCheckbox = ({ array, capitalName, handleFilters }) => {

  const [ checked, setChecked ] = useState([])

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
    handleFilters(newChecked)

  }

  const capitalizedArray = array.map((x) => capitalName(x))

  return (
    <>
      {
        capitalizedArray.map((x, index) => {
          return (
            <div className='left-aligned' key={index}>
              <input
                type="checkbox"
                name={x}
                value={x}
                onChange={() => handleToggle(x)}
                checked={checked.indexOf(x) === -1 ? false : true}
                />
                <label htmlFor={x} className="checkboxLabel" >
                {x}
                </label>
            </div>
          )
        })
      }
    </>
  )
};

export default SermonCheckbox;