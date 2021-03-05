import {motion} from 'framer-motion'
import React from 'react'
import {connect} from 'react-redux'
import {getAllChars} from '../store/character'
import {Motion} from './motion'

export class Characters extends React.Component {
  componentDidMount() {
    this.props.getAllChars()
  }

  render() {
    const {characters} = this.props

    return (
      <div>
        <h1 className="title"> Characters</h1>

        <div>
          {characters.map(chars => (
            <div className="title" key={chars.id}>
              {/* <Example className="allCharDiv" key={chars.id} /> */}
              <h2 className="centerText"> {chars.name}</h2>
              <Motion i={chars} key={chars.id} />
              {/* <img src={chars.imageURL} className='allCharImg' /> */}
              {/* <h3>{chars.description}</h3> */}
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
