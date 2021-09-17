import React from 'react';
import Venusv from './video/venus.mp4';
const Venus =() => {
    return (<>
<div className="kk">
<video width="320" height="240" className="videospace" autoPlay muted loop controls="">
  <source src={Venusv} type="video/mp4"/>
</video>
            <h1 className="jpclass">Our Venus</h1>
            
           
            </div>
          </>    
        );
};

export default Venus;
