import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import Clock from 'react-live-clock';

import { Button } from 'react-bootstrap'

const SubjectNow = inject("schedule")(observer(({ schedule }) => {

    let time = new Date();
    time.setTime(time.getTime()+10*60*1000)

    const day = time.getDay();
    const hours = time.getHours();




    const [div, setDiv] = useState((
        <>
            <Button size="" variant="primary" disabled>&nbsp;GO&nbsp;</Button>
        </>
    ));

    useEffect(() => {
      const interval = setInterval(() => {
        let subject = schedule.getTime().find(x=> x[0] === day && x[1] === hours - 12)
        if (!subject) {
            setDiv((
                <>
                    <span className="font-weight-bold align-self-center mr-2" style={{fontSize: "large"}}> 공강입니다 </span>
                    <Button size="" variant="primary" disabled>&nbsp;GO&nbsp;</Button>
                </>
            ))
        } else {
            let data = schedule.subjectStore.find(x => x.name === subject[2]);
            setDiv((
                <>
                    <span className="font-weight-bold align-self-center mr-2" style={{fontSize: "large"}}> {data.name} </span>
                    <Button size="" variant="primary" onClick={e => window.open(data.link, "_blank")}>&nbsp;GO&nbsp;</Button>
                </>
            ))
        }
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);


    
    return (
        <div className="noselect border border-primary rounded mb-3 p-2 d-flex justify-content-between">
            <Clock className="flex-grow-1 ml-1 align-self-center" style={{fontSize: "large"}} format={'MM-DD HH:mm:ss'} ticking={true}/>
            {div}
        </div>
    );

}))
  
export default SubjectNow;