import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SubjectList, SubjectInput } from './component/index';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

function App() {
  return (
    <div className="App">
      <SubjectInput />
      <SubjectList />
    </div>
  );
}

export default App;
