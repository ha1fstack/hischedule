import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SubjectList, SubjectInput, TimeTable, SubjectNow } from './component/index';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <SubjectNow />
      <SubjectInput />
      <SubjectList />
      <TimeTable />
    </div>
  );
}

export default App;
