import logo from './logo.svg';
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { List } from './models';
import { useState } from 'react';
function App() {
  const [lists, setLists] = useState([])
  DataStore.query(List).then(models => setLists(models))
  const add = () => {
    DataStore.save(
      new List({
        "name": "Lorem ipsum dolor sit amet",
        "Todos": []
      })
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {lists.length}
        <button onClick={add} >add</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
