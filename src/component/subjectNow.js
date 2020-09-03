import React, { useState, useEffect, useRef } from 'react';
import { observer, inject } from 'mobx-react';
import Clock from 'react-live-clock';
import ReactAudioPlayer from 'react-audio-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBellSlash } from '@fortawesome/free-regular-svg-icons'
import { faBellSlash as faBellSlash2, faUniversity, faPencilRuler, faClock } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

import alarm from '../assets/alarm.mp3'

const SubjectNow = inject("schedule")(observer(({ schedule }) => {

    const [hide, setHide] = useState(schedule.alarm? false : true);

    let alarmToggle = (<></>);
    

    let play = null;

    
    const audio = useRef(null);
    const [div, setDiv] = useState([
        (<></>),
        (<Button className="font-weight-bold" size="" variant="primary" disabled>&nbsp;GO&nbsp;</Button>)
    ]);

    let [audioDiv, setAudioDiv] = useState(<></>);

    const alarmOn = () => {
        audio.current.audioEl.current.play();
        setAudioDiv((
            <Button className="mr-1" size="" variant="danger" onClick={()=>alarmOff()}><FontAwesomeIcon icon={faBellSlash2} /></Button>
        ))
    }

    const alarmOff = () => {
        audio.current.audioEl.current.pause();
        audio.current.audioEl.current.load();
        setAudioDiv((
            <></>
        ))
    }

    if (schedule.alarm) {
        alarmToggle = (
            <Button style={{width:'30px'}} className="bg-primary pr-0 pl-0" size='sm' onClick={()=>{schedule.alarm=false, alarmOff()}}><FontAwesomeIcon icon={faBell} /></Button>
        )
    } else {
        alarmToggle = (
            <Button style={{width:'30px'}} className="bg-secondary pr-0 pl-0" size='sm' onClick={()=>schedule.alarm=true}><FontAwesomeIcon icon={faBellSlash} /></Button>
        )
    }


    useEffect(() => {
        
        audio.current.audioEl.current.loop = true;

        const interval = setInterval(() => {

            let time = new Date();

            //time.setTime(time.getTime()-10*60*60*1000)
            //time.setTime(time.getTime()+12*60*1000)
            //console.log(time.getHours(), time.getMinutes(), time.getSeconds());

            time.setTime(time.getTime()+10*60*1000)

            let subject = schedule.getTime().find(x=> x[0] === time.getDay() && x[1] === time.getHours() - 8)

            if (!subject) {
                setDiv([
                    (<span className="font-weight-bold align-self-center mr-2" style={{fontSize: "large"}}> 공강입니다 </span>),
                    (<Button className="font-weight-bold" size="" variant="primary" disabled>&nbsp;GO&nbsp;</Button>)
                ])
            } else {
                let data = schedule.subjectStore.find(x => x.name === subject[2]);
                setDiv([
                    (<span className="font-weight-bold align-self-center mr-2" style={{fontSize: "large"}}> {data.name} </span>),
                    (<Button className="font-weight-bold" size="" variant="primary" onClick={e => {alarmOff(), window.open(data.link, "_blank")}}>&nbsp;GO&nbsp;</Button>)
                ])
            }

            time.setTime(time.getTime()-7*60*1000)
            const hours = time.getHours();

            let alarmic = schedule.getTime().find(x=> x[0] === time.getDay() && x[1] === hours - 8)
            
            if (schedule.alarm) {
                if (alarmic) {
                    if (play && play != hours) {
                        alarmOn()
                    }
                }
                play = hours;
            }


        }, 1000);
    
        return () => {
            clearInterval(interval);
        };

    }, []);


    
    return (
        <>  
            <div id='dimScreen'className="noselect" onClick={()=>setHide(true)} hidden={hide}>
                <h4 id='floatingText' className="font-weight-bold">
                    알람 정상 작동을 위해 <br/>
                    화면을 클릭해 주세요
                </h4>
            </div>
            <ReactAudioPlayer
                src={alarm}
                ref={audio}
            />
            <div className="mb-2 d-flex mt-1 mr-1 justify-content-between noselect">
                
                <span className="align-self-center flex-grow-1 ml-1 font-weight-bold" style={{fontSize: "20px"}}>HIschedule</span>
                <span className="mr-3">
                    <Button className="ml-1" variant="outline-primary" size='sm' onClick={()=>window.open("http://www.hongik.ac.kr/", "_blank")}><FontAwesomeIcon icon={faUniversity} />&nbsp;홍</Button>
                    <Button className="ml-1"  variant="outline-primary" size='sm' onClick={()=>window.open("https://cn.hongik.ac.kr/", "_blank")}><FontAwesomeIcon icon={faPencilRuler} />&nbsp;클</Button>
                    <Button className="ml-1"  variant="outline-primary" size='sm' onClick={()=>window.open("https://everytime.kr/", "_blank")}><FontAwesomeIcon icon={faClock} />&nbsp;에</Button>
                </span>
                <span className="text-primary align-self-center mr-1" style={{fontSize:'11px'}}>57분 알람</span>
                <div>
                   {alarmToggle}
                </div>
            </div>
            <div className="noselect border border-primary rounded p-2 d-flex mt-3 mb-4 justify-content-between">
                <Clock className="flex-grow-1 ml-1 align-self-center" style={{fontSize: "large"}} format={'MM-DD HH:mm:ss'} ticking={true}/>
                {div[0]}
                {audioDiv}
                {div[1]}
            </div>
        </>
    );

}))
  
export default SubjectNow;