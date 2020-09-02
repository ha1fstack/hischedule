import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';

const SubjectNow = inject("schedule")(observer(({ schedule }) => {

    let time = new Date();
    time.setTime(time.getTime()+300000)

    const day = time.getDay();
    const hours = time.getHours();

    let subject = schedule.getTime().find(x=> x[0] === day && x[1] === hours - 8)

    console.log('sub', subject)

    let div;
    if (!subject) {
        div = (<div> 공강입니다 </div>)
    } else {
        let data = schedule.subjectStore.find(x => x.name === subject[2]);
        div = (<div> {data.name} </div>)
    }
    
    return (
        <div>
            {div}
        </div>
    );

}))
  
export default SubjectNow;