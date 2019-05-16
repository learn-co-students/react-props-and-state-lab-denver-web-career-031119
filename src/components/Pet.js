import React from 'react'

class Pet extends React.Component {

  // whichButton = () => {
  //   if (this.props.pet.isAdopted) {
  //     return <button className="ui disabled button">Already adopted</button>
  //   } else {
  //     return <button className="ui primary button" onClick={_=> {this.props.onAdoptButtonClick(this.props.pet.id)}}>Adopt pet</button>
  //   }
  // }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
          {this.props.pet.gender === 'female' ? '♀' : '♂'}
        </div>
        <div className="extra content">
          {
            this.props.pet.isAdopted ? (
              <button className="ui disabled button">Already adopted</button>
            ) : (
              <button
                onClick={_=> {this.props.onAdoptPet(this.props.pet.id)}}
                className="ui primary button">
                Adopt pet
              </button>
            )
          }
        </div>
      </div>
    )
  }
}

export default Pet
