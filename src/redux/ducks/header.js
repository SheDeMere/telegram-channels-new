const initialState = {
  modalWindow: false,
  admin: false,
  user: false,
  token: false,
  error: false
};

const Header = (state = initialState, action) => {
  switch (action.type) {
    case 'open/modal':
      return {
        ...state,
        modalWindow: true,
        error: false
      }

    case 'close/modal':
      return {
        ...state,
        modalWindow: false
      }

    case 'message/error':
      return {
        ...state,
        error: true
      }


    case 'access/admin':
      return {
        ...state,
        admin: true,
        user: false,
        error: false,
        modalWindow: false
      }

    case 'access/user':
      return {
        ...state,
        user: true,
        error: false,
        modalWindow: false
      }

    default:
      return state;
  }
};

export const closeWindow = () => {
  return {
    type: 'close/modal'
  }
}

export const openWindow = () => {
  return {
    type: 'open/modal'
  }
}

export const logged = (login, pass) => (dispatch) => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(json => {
        json.find(data => {
          if(login === data.login && pass === data.password){
            dispatch({
              type: "access/user",
              payload: data.token
            })

            if(login === 'admin' && pass === 'admin') {
              dispatch({type: 'access/admin'})
            }
          }else {
            dispatch({type: 'message/error'})
          }
        })
      })
}






//тут будут санки
export default Header;
