import React from 'react';
import Marsv from "./video/mars.mp4"
const Mars =() => {
    return (<>
<div className="kk">
<video width="320" height="240" className="videospace" autoPlay muted loop controls="">
  <source src={Marsv} type="video/mp4"/>
</video>
            <h1 className="jpclass">Our Mars</h1>
            
           
            </div>
          </>    
        );
};

export default Mars;