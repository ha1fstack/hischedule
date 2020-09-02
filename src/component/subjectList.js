import React, { useState } from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { observer, inject } from 'mobx-react';



const ItemEdit = inject("schedule")(observer(({ schedule, data, toggleEdit }) => {

    const _name = data.name;
    const [name, setName] = useState(data.name);
    const [link, setLink] = useState(data.link);

    const saveSubject = () => {
        schedule.edit(_name, name, link);
    }

    return (
        <div>
            <input type="text" className="" placeholder="과목명" value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" className="" placeholder="Webex 링크" value={link} onChange={e => setLink(e.target.value)}/>
            &nbsp;
            <button type="submit" className="" onClick={e => { saveSubject(), toggleEdit() }}>ok</button>
        </div>
    )
}))


const SortableItem = SortableElement(inject("schedule")(observer(({ schedule, data }) => {

    const [edit, setEdit] = useState(false);

    const toggleEdit = () => {
        setEdit(!edit)
    }

    const removeItem = () => {
        schedule.remove(data.name);
    }

    return (
        <div>
            {
                (() => {
                    return !edit ? (<>
                        <span>{data.name}</span>
                        &nbsp;
                        <button className="" onClick={e => toggleEdit()}>edit</button>
                        <button className="" onClick={e => removeItem()}>remove</button>
                        <button className="" onClick={e => 1}>go</button>
                    </>) : (<ItemEdit data={data} toggleEdit={e => toggleEdit()}/>)
                })()
            }
        </div>
    )
})));


const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((data, index) => (
        <SortableItem key={`item-${data.name}`} index={index} value={data.name} data={data} />
      ))}
    </ul>
  );
});


const SubjectList = inject("schedule")(observer(({ schedule }) => {

    const onSortEnd = ({oldIndex, newIndex}) => {
        schedule.subjectStore = arrayMove(schedule.subjectStore, oldIndex, newIndex)
    };

    return (
        <>
            <SortableList items={schedule.subjectStore.toJS()} onSortEnd={onSortEnd} />
        </>
    );

}))
  
export default SubjectList;