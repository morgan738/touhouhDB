import React from 'react'
import {connect} from 'react-redux'
import {getAllChars} from '../store/character'

export class Characters extends React.Component {
  /*     constructor(props) {
            super(props)
    
            this.state = {
                currentlyDisplayed: []
            }
        } */

  componentDidMount() {
    this.props.getAllChars()
  }

  render() {
    const {characters} = this.props
    return (
      <div>
        <h1> Characters</h1>

        <div>
          {characters.map(chars => (
            <div key={chars.id}>
              <h2> {chars.name}</h2>
              <img src={chars.imageURL} />
              <h3>{chars.description}</h3>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  characters: state.characters
})

const mapDispatch = dispatch => ({
  getAllChars: characters => dispatch(getAllChars(characters))
})

export default connect(mapState, mapDispatch)(Characters)
