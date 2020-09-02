import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SubjectList, SubjectInput, TimeTable, SubjectNow } from './component/index';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App noselect" class="container border border-primary p-3">
      <SubjectNow />
      <SubjectList />
      <TimeTable />
      <SubjectInput />
    </div>
  );
}

export default App;
