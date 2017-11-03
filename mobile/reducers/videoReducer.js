const initialState = {
  rooms: [],
  nextRoom: '',
  endSession: false
}

const videoReducer = (state=initialState, action) => {
  switch(action.type) {

    case 'ROOMS_READY': {
      return Object.assign({}, state, {
        rooms: action.payload.rooms,
        nextRoom: this.state.rooms.shift()
      })
    }

    case 'SWITCH_ROOM': {
      return Object.assign({}, state, {
        next: this.state.rooms.shift()
      })
    }

    default: {
      return state;
    }
  }
}

export default videoReducer;