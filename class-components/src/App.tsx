import './App.css';
import React from 'react';

class App extends React.Component<object, { searchTerm: string; results: [] }> {
  constructor(props: object) {
    super(props);
    this.state = { searchTerm: 'Search Pokemon', results: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    console.log(this.state.searchTerm);
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
      });
  }

  render(): React.ReactElement {
    return (
      <div className="app-container">
        <div className="control-container">
          <form action="" onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Top controls</legend>
              <input
                type="text"
                value={this.state.searchTerm}
                placeholder="Search Pokemon"
                onChange={(event): void =>
                  this.setState({ searchTerm: event.target.value })
                }
              />
              <button type="submit">Search Button</button>
            </fieldset>
          </form>
        </div>
        <div className="results-container">
          <fieldset>
            <legend>Results</legend>
            <table>
              <thead>
                <tr>
                  <td>Item Name</td>
                  <td>Item Description</td>
                </tr>
              </thead>
              <tbody>{}</tbody>
            </table>
          </fieldset>
        </div>
        <button>Error button</button>
      </div>
    );
  }
}

export default App;
