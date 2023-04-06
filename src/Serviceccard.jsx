import React from 'react'
import img from "./img/img1.jpg";

const Serviceccard = () => {
  return (
    <>
        <div className='col-6'>
        <div className="card " >
          <img src={img} className='serimg w-100' alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
    </>
  )
}

export default Serviceccard;