import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users, filteredMonsters: users };
          },
          () => {
            console.log(this.state);
          },
        ),
      );
  }
  handleChange(event) {
    const monsters = this.state.monsters;
    let value = event.target.value.toLocaleLowerCase();
    const filterRes = monsters.filter((it) =>
      it.name.toLocaleLowerCase().includes(value),
    );
    this.setState({ filteredMonsters: filterRes });
  }
  render() {
    const { filteredMonsters } = this.state;
    const { handleChange } = this;
    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox
          handleChange={handleChange}
          placeholder='search monster'
          className='monster-search-box'
        />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
