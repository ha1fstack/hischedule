import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';

import { Table } from 'react-bootstrap'

const TimeRow = inject("schedule")(observer(({ schedule, index, timeList }) =>  {

    const items = []

    const timeToggle = (e) => {
      if (!(schedule.selected && schedule.selected[1] === 'select')) return;
      schedule.toggleTime(schedule.selected[0], [e.target.getAttribute('col'), e.target.getAttribute('row')])
    }

    for (let i = 1; i < 7; i++) {
      let find = timeList.find(x=>x[0] == i && x[1] == index)
      if (find) {
        items.push(<td className='bg-secondary' row={index} col={i} onClick={e => timeToggle(e)}>{find[2]}</td>)
      } else items.push(<td row={index} col={i} onClick={e => timeToggle(e)}>x</td>)
    }

    return (
        <tr>
            <td>{index}</td>
            {items}
        </tr>
    )
}))


const TimeTable = inject("schedule")(observer(({ schedule }) => {

  const timeList = schedule.getTime();

  console.log(timeList)
    
  return (
    <Table bordered>
        <thead>
            <tr>
                <th></th>
                <th>월</th>
                <th>화</th>
                <th>수</th>
                <th>목</th>
                <th>금</th>
                <th>토</th>
            </tr>
        </thead>
        <tbody>
            <TimeRow timeList={timeList} index={1} />
            <TimeRow timeList={timeList} index={2} />
            <TimeRow timeList={timeList} index={3} />
            <TimeRow timeList={timeList} index={4} />
            <TimeRow timeList={timeList} index={5} />
            <TimeRow timeList={timeList} index={6} />
            <TimeRow timeList={timeList} index={7} />
            <TimeRow timeList={timeList} index={8} />
            <TimeRow timeList={timeList} index={9} />
            <TimeRow timeList={timeList} index={10} />
            <TimeRow timeList={timeList} index={11} />
            <TimeRow timeList={timeList} index={12} />
        </tbody>
    </Table>
  )

}))
  
export default TimeTable;