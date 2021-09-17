import React from 'react';
import Saturnv from './video/saturn.mp4';
const Sature =() => {
    return (<>
<div className="kk">
<video width="320" height="240" className="videospace" autoPlay muted loop controls="">
  <source src={Saturnv} type="video/mp4"/>
</video>
            <h1 className="jpclass">Our Sature</h1>
            
           
            </div>
          </>    
        );
};

export default Sature;