const initialState = {
  modalWindow: JSON.parse(localStorage.getItem('auth')).modalWindow || false,
  admin: JSON.parse(localStorage.getItem('auth')).admin || false,
  user: JSON.parse(localStorage.getItem('auth')).user || false,
  token: JSON.parse(localStorage.getItem('auth')).token || null,
  error: JSON.parse(localStorage.getItem('auth')).error || false,
  name: JSON.parse(localStorage.getItem('auth')).name || '',
};

const Header = (state = initialState, action) => {
  switch (action.type) {
    case 'open/modal':
      return {
        ...state,
        modalWindow: true,
        error: false,
      };

    case 'close/modal':
      return {
        ...state,
        modalWindow: false,
      };

    case 'message/error':
      return {
        ...state,
        error: true,
      };

    case 'access/admin':
      return {
        ...state,
        admin: true,
        user: false,
        error: false,
        modalWindow: false,
      };

    case 'access/user':
      return {
        ...state,
        user: true,
        error: false,
        modalWindow: false,
        name: action.payload.name,
        token: action.payload.token,
      };

    case 'logout/start':
      return {
        ...state,
        modalWindow: false,
        admin: false,
        user: false,
        token: null,
        error: false,
        name: '',
      };

    default:
      return state;
  }
};

export const closeWindow = () => {
  return {
    type: 'close/modal',
  };
};

export const openWindow = () => {
  return {
    type: 'open/modal',
  };
};

export const logoutStart = () => {
  localStorage.removeItem('auth');
  return {
    type: 'logout/start',
  };
};

export const setAuth = (login, password) => (dispatch) => {
  fetch(`http://localhost:3001/authorization/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      login: login,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      dispatch({
        type: 'access/user',
        payload: json,
      });
      if (json.login === 'admin' && json.password === 'admin') {
        dispatch({
          type: 'access/admin',
        });
      }
    });
};

export default Header;
