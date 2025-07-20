import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="control-container">
        <form action="">
          <fieldset>
            <legend>Top controls</legend>
            <input type="text" />
            <button>Search Button</button>
          </fieldset>
        </form>
      </div>
      <div className="results-container">
        <fieldset>
          <legend>Results</legend>
        </fieldset>
      </div>
      <button>Error button</button>
    </div>
  );
}

export default App;
