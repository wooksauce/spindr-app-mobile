const initialState = {
  username: '',
  userToken: null,
  isReady: null
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {

    case 'USER_LOGIN_SUCCESSFUL': {
      return Object.assign({}, state, {
        username: action.payload, 
        isReady: true
      })
    }

    case 'USER_LOGOUT_SUCCESSFUL': {
      return Object.assign({}, state, {
        username: '',
        userToken: false
      })
    }

    case 'USER_TOKEN_SUCCESSFUL': {
      return Object.assign({}, state, {
        userToken: true
      })
    }

    default: {
      return state;
    }
  }
}

export default authReducer;