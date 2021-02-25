import React from 'react'
import {connect} from 'react-redux'
import {getAllChars} from '../store/character'
import {Example} from './motion'

export class Characters extends React.Component {
  componentDidMount() {
    this.props.getAllChars()
  }

  render() {
    const {characters} = this.props

    return (
      <div>
        <h1 className="characterText"> Characters</h1>

        <div>
          {characters.map(chars => (
            <div className="allCharDiv" key={chars.id}>
              <h2> {chars.name}</h2>
              <img src={chars.imageURL} />
              <h3>{chars.description}</h3>
              <Example className="allCharDiv" key={chars.id} />
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
