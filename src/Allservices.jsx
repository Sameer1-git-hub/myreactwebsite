import React from 'react'

const Allservices = (props) => {
  return (
    <>
        <div className='col-4 mt-4'>
              <div className="card " >
                <img src={props.image} className='serimg w-100' alt="" />
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.discription}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
    </>
  )
}

export default Allservices