import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';

const SubjectInput = inject("schedule")(observer(({ schedule }) => {

    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const addSubject = () => {
        schedule.add(name, link);
        setName(''), setLink('');
    }
    
    return (
        <>
            <input type="text" className="" placeholder="과목명" value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" className="" placeholder="Webex 링크" value={link} onChange={e => setLink(e.target.value)}/>
            <button type="submit" className="" onClick={e => addSubject(name, link)}>추가</button>
        </>
    );

}))
  
export default SubjectInput;