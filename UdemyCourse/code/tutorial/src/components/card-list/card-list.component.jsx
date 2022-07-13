import { Component } from "react";

class CardList extends Component {
  render() {
    console.log("render card-list", "--line5");
    const { filteredMonsters } = this.props;
    return (
      <div>
        {filteredMonsters.map((monster, index) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
