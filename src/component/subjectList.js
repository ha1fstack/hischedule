import React, { useState } from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { observer, inject } from 'mobx-react';

import { Button, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap'

const ItemEdit = inject("schedule")(observer(({ schedule, data, toggleEdit }) => {

    const _name = data.name;
    const [name, setName] = useState(data.name);
    const [link, setLink] = useState(data.link);

    const saveSubject = () => {
        let res = schedule.edit(_name, name, link);
        if (res) toggleEdit();
    }

    return (
        <div>
            <InputGroup size="sm" className="m-0">
                <FormControl type="text" className="" placeholder="과목명" value={name} onChange={e => setName(e.target.value)} />
                <FormControl type="text" className="" placeholder="Webex 링크" value={link} onChange={e => setLink(e.target.value)} />
                <InputGroup.Append>
                    <Button className="" onClick={e => { saveSubject() }} variant="outline-secondary">확인</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}))

const ItemSelect = ({data, toggleSelect}) => {
    return (
        <div className="d-flex justify-content-between">
            <span className="align-self-center font-weight-bold">{data.name}</span>
            &nbsp;&nbsp;&nbsp;
            <Button size="sm" variant="primary" onClick={e => toggleSelect()}>선택 완료</Button>
        </div>
    )
}



const SortableItem = SortableElement(inject("schedule")(observer(({ schedule, data }) => {

    const [edit, setEdit] = useState(false);
    const [select, setSelect] = useState(false);

    const toggleEdit = () => {
        setEdit(!edit)
        schedule.selected = edit ? null : [data.name, 'edit'];
    }

    const toggleSelect = (e) => {
        setSelect(!select)
        schedule.selected = select ? null : [data.name, 'select'];
    }

    const removeItem = (e) => {
        e.preventDefault();
        schedule.remove(data.name);
    }

    return (
        <form>
            <fieldset disabled={schedule.selected && schedule.selected[0] !== data.name}>
                <div className="m-0 mb-2 pl-2 pr-2 pb-1 pt-1 border border-primary rounded">
                    {
                        (() => {
                            if (edit) return (<ItemEdit data={data} toggleEdit={e => toggleEdit()}/>)
                            if (select) return (<ItemSelect data={data} toggleSelect={e => toggleSelect()}/>)
                            return (
                                <div className="d-flex justify-content-between">
                                    <span className="align-self-center font-weight-bold ml-1">{data.name}</span>
                                    &nbsp;&nbsp;&nbsp;
                                    <div>
                                        <ButtonGroup size="sm">
                                            <Button variant="border border-primary" onClick={e => toggleSelect(e)}>선택</Button>
                                            <Button variant="border border-primary" onClick={e => toggleEdit()}>수정</Button>
                                            <Button variant="border border-primary" onClick={e => removeItem(e)}>X</Button>
                                        </ButtonGroup>
                                        &nbsp;
                                        &nbsp;
                                        <Button size="sm" variant="primary font-weight-bold" onClick={e => window.open(data.link, "_blank")}>&nbsp;GO&nbsp;</Button>
                                    </div>
                                </div>
                            )
                        })()
                    }
                </div>
            </fieldset>
        </form>
    )
})));


const SortableList = SortableContainer(({items}) => {
  return (
    <div className="mt-2 mb-3">
      {items.map((data, index) => (
        <SortableItem key={`item-${data.name}`} index={index} value={data.name} data={data} />
      ))}
    </div>
  );
});


const SubjectList = inject("schedule")(observer(({ schedule }) => {

    const onSortEnd = ({oldIndex, newIndex}) => {
        schedule.subjectStore = arrayMove(schedule.subjectStore, oldIndex, newIndex)
    };

    return (
        <div className="noselect">
            <SortableList items={schedule.subjectStore.toJS()} onSortEnd={onSortEnd} />
        </div>
    );

}))
  
export default SubjectList;