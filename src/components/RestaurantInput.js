import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

const mapStateToProps = state => {

}

const mapDispatchToProps = {
  handleOnSubmit: (event, state) => {
    event.preventDefault()
    return { type: 'ADD_RESTAURANT', restaurant: {
      name: state.name,
      location: state.location
    } }
  }
}

let myConnector = connect(mapStateToProps, mapDispatchToProps)

class _RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }


  render() {
    return(
      <form onSubmit={(event) => this.props.handleOnSubmit(event, this.state)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};


//connect this component by wrapping RestaurantInput below
const RestaurantInput = myConnector(_RestaurantInput)

export default RestaurantInput
