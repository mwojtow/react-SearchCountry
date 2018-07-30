import React, { Component } from "react";
import "./App.css";
import Countries from "./countries.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: Countries,
      textInput: ""
    };
    this.onChange = this.onChange.bind(this);
    this.searchingFor = this.searchingFor.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  searchingFor(text) {
    return function(country) {
      return country.name.toLowerCase().includes(text.toLowerCase()) || !text;
    };
  }

  render() {
    const { countries, textInput } = this.state;

    const filteredCountries = countries
      .filter(this.searchingFor(textInput))
      .map((country, key) => {
        return (
          <div key={key}>
            <a href={`https://en.wikipedia.org/wiki/${country.name}`}>
              <img
                src={`https://www.countryflags.io/${country.code}/shiny/64.png`}
              />
            </a>
            {country.name}
          </div>
        );
      });

    return (
      <div className="App countries__wrapper">
        <p>miasta</p>
        <input
          type="text"
          placeholder="tekst"
          name="textInput"
          onChange={this.onChange}
          value={this.state.textInput}
        />
        {filteredCountries}
      </div>
    );
  }
}

export default App;
