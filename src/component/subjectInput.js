import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';

import { InputGroup, FormControl, Button } from 'react-bootstrap'


const SubjectInput = inject("schedule")(observer(({ schedule }) => {

    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const addSubject = () => {
        let res = schedule.add(name, link);
        if (res) setName(''), setLink('');
    }
    
    return (
        <>
            <InputGroup>
                <FormControl type="text" className="" placeholder="과목명" value={name} onChange={e => setName(e.target.value)} />
                <FormControl type="text" className="" placeholder="Webex 링크" value={link} onChange={e => setLink(e.target.value)} />
                <InputGroup.Append>
                    <Button className="" onClick={e => addSubject(name, link)} variant="outline-secondary">추가</Button>
                </InputGroup.Append>
            </InputGroup>
        </>
    );

}))
  
export default SubjectInput;