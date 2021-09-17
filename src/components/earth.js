import React from 'react';
import Earthv from "./video/earth.mp4"
const Earth =() => {
    return (<>
<div className="kk">
<video width="320" height="240" className="videospace" autoPlay muted loop controls="">
  <source src={Earthv} type="video/mp4"/>
</video>
            <h1 className="jpclass">Our Earth</h1>
            
           
            </div>
          </>    
        );
};

export default Earth;