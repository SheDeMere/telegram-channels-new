const initialState = {
  loading: false,
  addingReview:false,
  deletingReview:false,
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
    case 'review/adding/start':
      return {
        ...state,
        addingReview: true
      };
    case 'user/review/add':
      return {
        ...state,
        addingReview: false,
        items: [...state.items, action.payload],
      };

    case 'admin/review/deleting/start':
      return {
        ...state,
        deletingReview: true
      }
    case 'admin/review/delete':
      return {
        ...state,
        deletingReview: false,
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
    dispatch({
      type: 'review/adding/start'
    });
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
    dispatch({
      type: 'admin/review/deleting/start'
    });
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
