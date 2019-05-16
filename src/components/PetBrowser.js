import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  makePetCards = () => {
    return this.props.pets.map(pet => {
      return <Pet onAdoptPet={this.props.onAdoptPet} key={pet.id} pet={pet}/>
    })
  }
  render() {
    return <div className="ui cards">{this.makePetCards()}</div>
  }
}

export default PetBrowser
