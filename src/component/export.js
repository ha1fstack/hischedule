import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';

import { InputGroup, FormControl, Button } from 'react-bootstrap'

import copy from 'copy-to-clipboard';


const Export = inject("schedule")(observer(({ schedule }) => {

    const exportData = () => {
        const data = JSON.stringify(schedule.subjectStore);
        var b64 = window.btoa(encodeURIComponent(data))
        copy(b64);
        alert('클립보드에 데이터가 복사되었습니다. 다른 브라우저에서 가져오기 후 붙여넣으세요.')
    }
    
    const importData = () => {
        let data = prompt('다른 브라우저에서 복사한 데이터를 입력해 주세요.');
        if (!data) return;
        try {
            data = JSON.parse(decodeURIComponent(window.atob(data)));
            schedule.subjectStore = data;
        } catch (e) {
            alert('잘못된 데이터 형식입니다.')
        }
    }

    const reset = () => {
        if(confirm('정말 초기화하시겠습니까?')) schedule.subjectStore = [];
    }

    return (
        <div className="float-right">
            <Button className="mr-1" variant="outline-primary" size="sm" onClick={e => reset()}>초기화</Button>
            <Button className="mr-1" variant="outline-primary" size="sm" onClick={e => exportData()}>내보내기</Button>
            <Button variant="outline-primary" size="sm" onClick={e => importData()}>가져오기</Button>
        </div>
    )

}))
  
export default Export;