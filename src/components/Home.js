import React from 'react';
import Livetime from './Livetime';
import Space from "./image/space1.mp4";


const Home =() => {
    return (<>
           <div className="homediv">
           <video width="320" height="240" className="videospace" autoPlay muted loop controls="">
  <source src={Space} type="video/mp4"/>
</video>
          <div > <Livetime/></div>
          
           </div>
          </>    
        );
};

export default Home;