import logo from './logo.svg';
import './App.css';
import ToDo from './component/todos/todos';
import Filter from './component/filter/Filter';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ToDo /> */}
      <Filter />
    </div>
  );
}

export default App;
