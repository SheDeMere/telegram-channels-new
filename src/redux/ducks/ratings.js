const initialState = {
  loading: false,
  items: [],
};

const Ratings = (state = initialState, action) => {
  switch (action.type) {
    case 'ratings/load/start':
      return {
        ...state,
        loading: true,
      }

    case 'ratings/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export function loadRatings(id) {
  return (dispatch) => {
    dispatch({
      type: 'ratings/load/start',
    });
    fetch(`http://localhost:3001/ratings?channelId=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return dispatch({
          type: 'ratings/load/success',
          payload: json[0].star,
        });
      });
  };
}

export default Ratings