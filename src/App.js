import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { SubjectList, SubjectInput, TimeTable, SubjectNow, Export } from './component/index';
import { default as storage } from './stores/schedule'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className="App noselect container border border-primary pt-2 pb-3 pl-3 pr-3">
        <SubjectNow />
        <SubjectList />
        <TimeTable />
        <SubjectInput />
      </div>
      <div className="noselect container p-0 mt-1 mb-5">
        <Export />
      </div>
    </>
  );
}

export default App;
