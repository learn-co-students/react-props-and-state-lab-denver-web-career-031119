import React from 'react'

const Pet = props => {

    const isAdopted = () => {
      if (props.isAdopted) {
        return <button className="ui disabled button">Already adopted</button>
      } else {
        return <button className="ui primary button" onClick = {() => props.onAdoptPet(props.id) }>Adopt pet</button>
      }
    }


    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {props.gender === 'female' ? '♀' : '♂' }
            {props.name}
          </a>
          <div className="meta">
            <span className="date">{props.type}</span>
          </div>
          <div className="description">
            <p>Age: {props.age}</p>
            <p>Weight: {props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted()}
        </div>
      </div>
    )
}

export default Pet
