import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onValueChange = async (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            value={this.state.term}
            onChange={this.onValueChange}
            placeholder='Please enter song title to search'
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
