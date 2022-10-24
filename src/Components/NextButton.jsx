import React from 'react';

const NextButton = ({random,color}) => {
    const colors = [ "#845EC2","#D65DB1","#FF6F91","#FF9671","#FFC75F","#B39CD0"]
    return (
        <div className='button' >
            <i style={{color: colors[color]}} onClick={random} class="fa-solid fa-circle-right"></i>
        </div>
    );
};

export default NextButton;