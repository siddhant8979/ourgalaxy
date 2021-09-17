import React from 'react';
import Jupiterv from "./video/jupiter.mp4"
const Jupiter =() => {
    return (<>
<div className="kk">
<video width="320" height="240" className="videospace" autoPlay muted loop controls="">
  <source src={Jupiterv} type="video/mp4"/>
</video>
            <h1 className="jpclass">Our Jupiter</h1>
           
            </div>
          </>    
        );
};

export default Jupiter;