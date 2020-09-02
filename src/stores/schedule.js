import { observable, action, autorun } from 'mobx';

class Schedule {

    @observable subjectStore = [{
        name: 'test1',
        link: 'https://www.naver.com',
        time: new TimeTable()
    },
    {
        name: 'test2',
        link: 'https://www.naver.com',
        time: new TimeTable()
    }]
    
    @action add = (name, link) => {
        name = name.trim();
        link = link.trim();
        if (!this._checkName) return;
        this.subjectStore.push({
            name: name,
            link: link,
            time: new TimeTable()
        })
        return true;
    }

    @action remove = (name) => {
        const r = confirm("정말 삭제하시겠습니까?");
        if (!r) return false;
        this.subjectStore.splice(this.subjectStore.findIndex(x => x.name === name), 1)
    }

    @action edit = (_name, name, link) => {
        const index = this.subjectStore.findIndex(x => x.name === _name);
        if (!this._checkName) return;
        this.subjectStore[index].name = name;
        this.subjectStore[index].link = link;
    }

    _checkName() {
        if (name.length < 1) {
            alert('과목명을 입력해 주세요.');
            return false;
        }
        if (this.subjectStore.findIndex(x => x.name === name) != -1) {
            alert('이미 존재하는 과목명입니다.');
            return false;
        }
        return true;
    }
    
}


class TimeTable {

}



const schedule = new Schedule();


autorun(() => {
    console.log(schedule.subjectStore.toJS().map(x=>x.name));
})

export default schedule;