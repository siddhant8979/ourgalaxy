import React from 'react';
import Uranusv from "./video/uranus.mp4"
const Uranus =() => {
    return (<>
<div className="kk">
<video width="320" height="240" className="videospace" autoPlay muted loop controls="">
  <source src={Uranusv} type="video/mp4"/>
</video>
            <h1 className="jpclass">Our Uranus</h1>
            
           
            </div>
          </>    
        );
};

export default Uranus;