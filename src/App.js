import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Table from './Table';
import NewStudents from './NewAdmission';
import './App.css';
import './style.css'
const ShowTable = () => (
  <Table />
);

const NewStudent = () => (
  <NewStudents />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ShowTable} />
          <Route path="/newadmission" component={NewStudent} />
        </div>
      </Router>
    );
  }
}

export default App;