import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  // return { 
  //   restaurants: state.restaurants,
  //   name: state.name,
  //   location: state.location 
  // }
}

const mapDispatchToProps = {
  handleOnSubmit: (e, state) =>{
    e.preventDefault()
    return {type:'ADD_RESTAURANT', restaurant: {name: state.name, location:state.location} }
  }
  // addRestaurant: (restaurant) =>({type: 'ADD_RESTAURANT', restaurants:restaurant})
}
 
// export default connect(mapStateToProps, mapDispatchToProps)(
class _RestaurantInput extends Component {

  state = {
    name: ''
  }


  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnNameChange = e =>{
    this.setState({
      name: e.target.value
    });
  }


  render() {
    return(
      <form onSubmit={(e) => this.props.handleOnSubmit(e, this.state)}>
        <p>
          <input
            type="text"
            onChange={(e) => this.handleOnNameChange(e)}
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
}
// )

//connect this component by wrapping RestaurantInput below
const connector = connect(mapStateToProps, mapDispatchToProps)
const RestaurantInput = connector(_RestaurantInput)
export default RestaurantInput
// export default connect (mapStateToProps, mapDispatchToProps)(RestaurantInput)

