const initialState = {
  username: null,
  email: null,
  picture: null,
  userToken: null,
  isReady: null
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {

    case 'USER_LOGIN_SUCCESSFUL': {
      return Object.assign({}, state, {
        username: action.payload.name, 
        email: action.payload.email,
        picture: action.payload.picture.data.url
      })
    }

    case 'USER_LOGOUT_SUCCESSFUL': {
      return Object.assign({}, state, {
        username: null,
        email: null,
        picture: null,
        userToken: false
      })
    }

    case 'USER_TOKEN_SUCCESSFUL': {
      return Object.assign({}, state, {
        userToken: true,
        isReady: true
      })
    }

    default: {
      return state;
    }
  }
}

export default authReducer;