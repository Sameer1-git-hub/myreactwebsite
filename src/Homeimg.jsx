    import React from 'react';
    import img from "./img/homeimg.png"

const Homeimg = () => {
    return (
        <>
            <div className='col-6 '>
                <img  className='homeimg ' src={img} />
            </div>
        </>
    )
}

export default Homeimg;