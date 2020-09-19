import React, { Component } from 'react';
import './Fetch.css';
import HomePage from './../pages/homepage/homepage';

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      value: '',
      submit: false,
      cmc: '',
      img: '',
      name: '',
      types: '',
      ability: '',
      pt: '',
      sets: '',
      legal: '',
      items: '',
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
              cmc: results.colors[0],
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
        <div>
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
          <HomePage />
        </div>
      );
    } else if (!isLoaded && !this.state.submit) {
      return (
        <div>
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
          <HomePage />
        </div>
      );
    } else {
      return (
        <div>
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

          <HomePage
            name={this.state.name}
            cmc={this.state.cmc}
            types={this.state.types}
            ability={this.state.ability}
            pt={this.state.pt}
            sets={this.state.sets}
            legal={this.state.legal}
            img={this.state.img}
          />
        </div>
      );
    }
  }
}

export default Fetch;
