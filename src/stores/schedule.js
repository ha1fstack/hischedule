import { observable, action, autorun } from 'mobx';

class Schedule {

    @observable selected = null;
    @observable subjectStore = [{
        name: 'test1',
        link: 'https://www.naver.com',
        time: []
    },
    {
        name: 'test2',
        link: 'https://www.naver.com',
        time: []
    }]
    
    @action add = (name, link) => {
        name = name.trim();
        link = link.trim();
        if (!this._checkName) return;
        this.subjectStore.push({
            name: name,
            link: link,
            time: []
        })
        return true;
    }

    @action remove = (name) => {
        const r = confirm("정말 삭제하시겠습니까?");
        if (!r) return false;
        this.subjectStore.splice(this.subjectStore.findIndex(x => x.name === name), 1)
    }

    @action edit = (_name, name, link) => {
        if (!this._checkName) return;
        const index = this.subjectStore.findIndex(x => x.name === _name);
        this.subjectStore[index].name = name;
        this.subjectStore[index].link = link;
    }

    @action addTime = (name, time) => {
        const indexT = this.getTime().findIndex(x => x[0] === time[0] && x[1] === time[1]);
        console.log('add', indexT, time);
        if (indexT !== -1) return;
        const index = this.subjectStore.findIndex(x => x.name === name);
        this.subjectStore[index].time.push(time);
    }

    @action removeTime = (name, time) => {
        const index = this.subjectStore.findIndex(x => x.name === name);
        const indexT = this.subjectStore[index].time.findIndex(x => x[0] === time[0] && x[1] === time[1]);
        if (indexT == -1) return false;
        this.subjectStore[index].time.splice(indexT, 1);
        return true
    }

    @action toggleTime = (name, time) => {
        time = [Number(time[0]), Number(time[1])];
        console.log(name, time)
        if (!this.removeTime(name, time)) this.addTime(name, time);
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

    getTime() {
        let timeList = [];
        for (let subject of this.subjectStore) {
            timeList = timeList.concat(subject.time.map(x=>[x[0], x[1], subject.name]));
        }
        return timeList;
    }
    
}


class TimeTable {

}



const schedule = new Schedule();


autorun(() => {
    console.log(schedule.subjectStore.toJS().map(x=>x.name));
})

export default schedule;