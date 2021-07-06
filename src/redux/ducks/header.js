const initialState = {
  modalWindow: false,
  admin: JSON.parse(localStorage.getItem('admin')) || false,
  user: JSON.parse(localStorage.getItem('user')) || false,
  token: localStorage.getItem('token') || null,
  error: false,
  name: localStorage.getItem('name') || '',
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
        user:false,
        admin: true,
        error: false,
        modalWindow: false,
        name: action.payload.name,
        token: action.payload.token,
      };

    case 'access/user':
      return {
        ...state,
        user: true,
        admin: false,
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
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  localStorage.removeItem('user');
  localStorage.removeItem('admin');
  return {
    type: 'logout/start',
  };
};

export const setAuth = (login, password) => (dispatch) => {
  fetch(`/authorization/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      login: login,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      localStorage.setItem('token', json.token);
      localStorage.setItem('name', json.name);
      localStorage.setItem('user', 'true');
      localStorage.setItem('admin', 'false');
      dispatch({
        type: 'access/user',
        payload: json,
      });
      if (json.login === 'admin' && json.password === 'admin') {
        localStorage.setItem('token', json.token);
        localStorage.setItem('name', json.name);
        localStorage.setItem('user', 'false');
        localStorage.setItem('admin', 'true');
        dispatch({
          type: 'access/admin',
          payload:json
        });
      }
    });
};

export default Header;
