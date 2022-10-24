import React from 'react';

const QuoteMark = ({color}) => {
    const colors = [ "#845EC2","#D65DB1","#FF6F91","#FF9671","#FFC75F","#B39CD0"]
    return (
        <div className='quoteMark'>
            <i style={{color: colors[color]}} class="fa-solid fa-quote-left"></i>
        </div>
    );
};

export default QuoteMark;