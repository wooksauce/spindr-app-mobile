const initialState = {
  userId: null,
  username: null,
  email: null,
  picture: null,
  gender: null,
  userToken: null,
  isReady: null
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {

    case 'USER_LOGIN_SUCCESSFUL': {
      return Object.assign({}, state, {
        username: action.payload.name, 
        email: action.payload.email,
        picture: action.payload.picture.data.url,
        gender: action.payload.gender
      })
    }

    case 'USER_DB_FULFILLED': {
      return Object.assign({}, state, {
        userId: action.payload.id
      })
    }

    case 'USER_LOGOUT_SUCCESSFUL': {
      return Object.assign({}, state, {
        userId: null,
        username: null,
        email: null,
        picture: null,
        gender: null,
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