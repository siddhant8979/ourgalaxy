import React from 'react';
import Moonv from "./video/moon.mp4"
const Moon =() => {
    return (<>
<div className="kk">
<video width="320" height="240" className="videospace" autoPlay muted loop controls="">
  <source src={Moonv} type="video/mp4"/>
</video>
            <h1 className="jpclass">Our Moon</h1>
            
           
            </div>
          </>    
        );
};

export default Moon;