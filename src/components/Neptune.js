import React from 'react';
import Neptunev from "./video/neptune.mp4"
const Neptune =() => {
    return (<>
<div className="kk">
<video width="320" height="240" className="videospace" autoPlay muted loop controls="">
  <source src={Neptunev} type="video/mp4"/>
</video>
            <h1 className="jpclass">Our Neptune</h1>
            
           
            </div>
          </>    
        );
};

export default Neptune;