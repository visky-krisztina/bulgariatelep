import React from 'react';

const Pastor = ({ pastors, filterItems }) => {
  const Istvan = 'Barta István'
  const Janos = 'Simon János'

  return (
    <div className='btn-container'>
      {
        pastors.map((pastor, index) => {
            return (
              <>

                {pastor !== Janos && pastor !== Istvan && pastor !== 'Összes' && pastor !== 'Más lelkipásztorok' ? null
                :
                <button 
                type="button" 
                className='filter-btn' 
                key={index} 
                onClick={() => filterItems(pastor)}
                >
                  {pastor}
                
                </button>
              }
              </>

            )
        })
      }
    </div>
  )
};

export default Pastor;