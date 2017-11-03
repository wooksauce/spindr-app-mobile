export const roomsReadyForPlay = () => {
  return function(dispatch) {
    dispatch({ type: 'ROOMS_READY', payload: roomNamesFromNode });
  }
}

export const switchRooms = () => {
  return function(dispatch) {
    dispatch({ type: 'SWITCH_ROOM' });
  }
}



