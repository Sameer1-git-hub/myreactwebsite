import React from 'react';
import Sdata from './Servicedata';
import Allservices from './Allservices';



const Service = () => {
  return (
    <>
      <div className='container'>
        <h1 className='text-center mt-5 mb-3'>Our Service</h1>
        <div className='row'>
          {Sdata.map((Carddata, index) => (
            <Allservices 
            key = {index}
              image={Carddata.image}
              title={Carddata.title}
              discription={Carddata.discription}
            />
          ))}
        </div>

      </div>
    </>
  )
}

export default Service;