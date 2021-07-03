const initialState = {
  loading: false,
  items: [],
};

const Reviews = (state = initialState, action) => {
  switch (action.type) {
    case 'reviews/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'reviews/load/success':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case 'user/review/add':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'admin/review/delete':
      return {
        ...state,
        items: state.items.filter((review) => {
          if (action.payload === review.id) {
            return false;
          }
          return review;
        }),
      };

    default:
      return state;
  }
};

export function loadReviews(id) {
  return (dispatch) => {
    dispatch({
      type: 'reviews/load/start',
    });
    fetch(`http://localhost:3001/reviews?channelId=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return dispatch({
          type: 'reviews/load/success',
          payload: json,
        });
      });
  };
}

export function addReview(channelId, text, userName) {
  return (dispatch) => {
    fetch(`http://localhost:3001/reviews?channelId=${channelId}`, {
      method: 'POST',
      body: JSON.stringify({
        channelId: channelId,
        name: userName,
        text: text,
      }),
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'user/review/add',
          payload: json,
        });
      });
  };
}

export function deleteReview(id) {
  return (dispatch) => {
    fetch(`http://localhost:3001/reviews/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'admin/review/delete',
          payload: id,
        });
      });
  };
}

export default Reviews;
