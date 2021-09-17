import React, { useState } from "react";
 

const Livetime = () => {
    let time = new Date().toLocaleTimeString('en-US');
    let date = new Date().toLocaleDateString('en-US');
    
    const [ ctime , setCtime ]= useState(time);
const Uptime =() => {
    time = new Date().toLocaleTimeString();
     setCtime(time);
     
}
setInterval(Uptime,1000);
    return(
    <>
    <div className="date">
    <h1 className="dates"> <span className="date1"> {date} </span> <span className="time1">{ctime}</span></h1>
    </div>
 </>
 );
    }

export default Livetime;