import React, { Component } from 'react';

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: null,

      value: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let url =
      'https://api.magicthegathering.io/v1/cards?name="' +
      this.state.value +
      '"';

    fetch(url)
      .then((res) => res.json())
      .then(
        (results) => {
          console.log('hello');
          this.setState({
            isLoaded: true,
            items: JSON.stringify(results),
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type='text'
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type='submit' value='Submit' />
          </form>
        </div>
      );
    } else {
      return items;
    }
  }
}

export default Fetch;
