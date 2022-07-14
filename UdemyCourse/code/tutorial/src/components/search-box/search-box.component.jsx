import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    console.log("SearchBox 执行了渲染函数");
    return (
      <input
        className={`search-box ${this.props.className}`}
        type='search'
        placeholder={this.props.placeholder}
        onChange={this.props.handleChange}
      />
    );
  }
}

export default SearchBox;
