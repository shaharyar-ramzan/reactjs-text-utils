import logo from './logo.svg';
import './App.css';
let name = 'sharry';
function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
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
          Code with sharry
        </a>
      </header>
    </div>
    <div className="detail">
      <span className="hello">Hello {name}</span>
    </div>
    </>
  );
}

export default App;
