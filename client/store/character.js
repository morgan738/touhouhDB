import axios from 'axios'

////// ACTION TYPES

const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS'

////// ACTION CREATOR

const getAllCharacters = characters => ({
  type: GET_ALL_CHARACTERS,
  characters
})

/////// THUNKS

export const getAllChars = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/characters')
    dispatch(getAllCharacters(data))
  } catch (error) {
    console.error(error)
  }
}

//////// INITIAL STATE

const initalState = []

////////// REDUCER

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return action.characters

    default:
      return state
  }
}
