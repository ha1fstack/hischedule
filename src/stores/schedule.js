import { observable, action, autorun } from 'mobx';

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

class Schedule {

    @observable load = false;
    @observable selected = null;
    @observable subjectStore = []

    constructor () {
        if (localStorage.getItem('data')) this.subjectStore = JSON.parse(localStorage.getItem('data'));
    }
    
    @action add = (name, link) => {
        name = name.trim();
        link = link.trim();
        if (!this._checkValid(name, link)) return false;
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
        if (!this._checkValid(name, link, _name)) return false;
        const index = this.subjectStore.findIndex(x => x.name === _name);
        this.subjectStore[index].name = name;
        this.subjectStore[index].link = link;
        return true;
    }

    @action addTime = (name, time) => {
        const indexT = this.getTime().findIndex(x => x[0] === time[0] && x[1] === time[1]);
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
        if (!this.removeTime(name, time)) this.addTime(name, time);
    }

    _checkValid(name, link, _name) {
        if (name.length < 1) {
            alert('과목명을 입력해 주세요.');
            return false;
        }
        if (this.subjectStore.findIndex(x => x.name === name) != -1) {
            if (!(_name && _name === name)) {
                alert('이미 존재하는 과목명입니다.');
                return false;
            }
        }
        if (!validURL(link)) {
            alert('올바른 URL을 입력해 주세요.');
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
    localStorage.setItem('data', JSON.stringify(schedule.subjectStore.toJS()));
})

export default schedule;