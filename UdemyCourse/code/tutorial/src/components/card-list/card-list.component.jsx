import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { filteredMonsters } = this.props;
    return (
      <div className='card-list'>
        {filteredMonsters.map((monster, index) => (
          <Card monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
