import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { log } from 'util';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchPets = () => {
    let endPoint = '/api/pets'
    if(this.state.filters.type !== "all") {
      endPoint = `/api/pets?type=${this.state.filters.type}`
    }

    console.log(endPoint);
    

    fetch(endPoint)
      .then(response => response.json())
      .then(pets => this.setState({ pets }))      
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  onFindPetsClick = () => {
    console.log('inside of on find pets click');
    this.fetchPets();
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? { 
        ...pet,
        isAdopted: true
      } : pet 
    });
    this.setState({ pets })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default App
