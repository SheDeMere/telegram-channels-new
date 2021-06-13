const initialState = {
  loading: false,
  items: [],
};

const Cards = (state = initialState, action) => {
  switch (action.type) {
    case 'channels/load/start':
      return {
        ...state,
        loading: true
      };
    case 'channels/load/success':
      return {
        ...state,
        loading: false,
        items:action.payload
      }

    default:
      return state;
  }
};

export function loadChannels() {
  return (dispatch) => {
    dispatch({
      type: 'channels/load/start',
    });
    fetch('http://localhost:3001/channels')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return dispatch({
          type: 'channels/load/success',
          payload: json,
        });
      });
  };
}

//тут будут санки

export default Cards;
