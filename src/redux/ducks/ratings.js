const initialState = {
  loading: false,
  items: [],
  selectedRating: [],
};

const Ratings = (state = initialState, action) => {
  switch (action.type) {
    case 'ratings/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'ratings/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case 'selected/rating/success':
      return {
        ...state,
        selectedRating: action.payload,
      };

    case 'edit/rating/success':
      return {
        ...state,
          items: action.payload
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
    fetch(`/ratings?channelId=${id}`)
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

export const selectedRatings = (id) => {
  return (dispatch) => {
    fetch(`/ratings/${id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'selected/rating/success',
          payload: json,
        });
      });
  };
};

export const editRating = (id, rating) => {
  return (dispatch) => {
    fetch(`/ratings/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        id: id,
        channelId: id,
        star: rating,
      }),
      headers: { 'Content-type': 'application/json; charset=utf-8' },
    })
  };
};

export const addRating = (id, rating) => {
  return (dispatch) => {
    fetch('/ratings', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        channelId: id,
        star: rating,
      }),
      headers: { 'Content-type': 'application/json; charset=utf-8' },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'add/rating/success',
          payload: json,
        });
      });
  };
};

export default Ratings;
