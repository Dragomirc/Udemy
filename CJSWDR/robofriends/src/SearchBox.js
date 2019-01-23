import React from "react";
class SearchBox extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--greeen bg-lightest-blue"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="search robots"
        />
      </div>
    );
  }
}

export default SearchBox;
