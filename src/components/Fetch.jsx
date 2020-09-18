import React, { Component } from 'react';
import './Fetch.css';

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: null,
      value: '',
      submit: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.value) {
    } else {
      this.setState({
        submit: true,

        error: null,
        isLoaded: false,
        items: null,
      });
      let url =
        'https://api.scryfall.com/cards/named?exact=' + this.state.value;

      fetch(url)
        .then((res) => res.json())
        .then(
          (results) => {
            this.setState({
              isLoaded: true,
              items: results,
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
  }

  render() {
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded && this.state.submit) {
      return (
        <div className='page'>
          <div>
            <h1 className='header'>Magic The Gathering Search Bar</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label className='form'>
              Name:
              <input
                type='text'
                value={this.state.value}
                onChange={this.handleChange}
                className='form'
              />
            </label>
            <input type='submit' value='Submit' />
          </form>
          <span>Loading...</span>
        </div>
      );
    } else if (!isLoaded && !this.state.submit) {
      return (
        <div className='page'>
          <div>
            <h1 className='header'>Magic The Gathering Search Bar</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label className='form'>
              Name:
              <input
                type='text'
                value={this.state.value}
                onChange={this.handleChange}
                className='form'
              />
            </label>
            <input type='submit' value='Submit' />
          </form>
        </div>
      );
    } else {
      return (
        <div className='page'>
          <div>
            <h1 className='header'>Magic The Gathering Search Bar</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label className='form'>
              Name:
              <input
                type='text'
                value={this.state.value}
                onChange={this.handleChange}
                className='form'
              />
            </label>
            <input type='submit' value='Submit' />
          </form>
          <div>
            <span>Name: </span>
            {this.state.items.name}
          </div>
          <div>
            <span>Flavor Text: </span>
            {this.state.items.flavor_text}
          </div>
          <img src={this.state.items.image_uris['normal']} alt=''></img>
          {console.log(this.state.items)}
        </div>
      );
    }
  }
}

export default Fetch;
