const initialState = {
  rooms: []
}

const videoReducer = (state=initialState, action) => {
  switch(action.type) {

    case 'ROOMS_READY': {
      return Object.assign({}, state, {
        rooms: action.payload.rooms
      })
    }

    default: {
      return state;
    }
  }
}

export default videoReducer;