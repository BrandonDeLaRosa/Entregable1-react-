import React, { useState } from 'react';
import quotes from '../quotes.json'
import NextButton from './NextButton';
import QuoteMark from './QuoteMark';

const QuoteBox = () => {

// --------------------------------------------------- Random Card ---------------------------------  

    const randomIndex = Math.floor(Math.random() * quotes.length)
    const [index, setIndex] = useState(randomIndex)

    const random = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setIndex(randomIndex)
    }

// --------------------------------------------------- User´s search -------------------------------------
const [search, setSearch] = useState(randomIndex)

const busqueda = () =>{
    setIndex(search)
}

// ---------------------------------------------------- Random Colors ------------------------------------

 const colors = [ "#845EC2","#D65DB1","#FF6F91","#FF9671","#FFC75F","#B39CD0"]
 const randomColors = Math.floor(Math.random() * colors.length)
 document.body.style= `background: ${colors[randomColors]}`


    return (
        <div className='quoteBox'>
            <h3 className='quoteNumber' style={{ color: colors[randomColors] }}>{index}</h3>
            <QuoteMark color={randomColors} />
            <div>
                <p style={{ color: colors[randomColors] }}>{quotes[index].quote}</p>
                <p style={{ color: colors[randomColors] }} className='author'>{quotes[index].author}</p>
            </div>
            <NextButton color={randomColors} random={random} />

            {/*User Search.  */}
            <label style={{ color: colors[randomColors] }} htmlFor="search">Quote Search</label>
           
            <div className='userSearch'>
                
                <input style={{background: colors[randomColors]}} type="number" id='search' placeholder='Set a number' min={0} max={100} value={search} onChange={e => setSearch(e.target.value)} />
                <button style={{background: colors[randomColors]}} className='userSearchBtn' onClick={busqueda}>search</button>
            </div>

        </div>
    );
};

export default QuoteBox;