import React from 'react';
import Mercuryv from './video/mercury.mp4';
const Mercury =() => {
    return (<>
<div className="kk">
<video width="320" height="240" className="videospace" autoPlay muted loop controls="">
  <source src={Mercuryv} type="video/mp4"/>
</video>
            <h1 className="jpclass">Our Mercury</h1>
            
           
            </div>
          </>    
        );
};

export default Mercury;