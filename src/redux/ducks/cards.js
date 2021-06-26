const initialState = {
  loading: false,
  items: [],
  ratings:[],
  reviews:[],
  selectedChannel: []
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
      };
    case 'ratings/load/success':
      return {
        ...state,
        ratings: action.payload
      };
    case 'reviews/load/success':
      return {
        ...state,
        reviews: action.payload
      };

    case 'edit/items':
      return {
        ...state,
        items: action.payload
      }

    case 'select/channel':
      return {
        ...state,
        selectedChannel: action.payload
      }

    case 'user/review/add':
      return {
        ...state,
        reviews: [
          ...state.reviews,
          action.payload
        ]
      }

    default:
      return state;
  }
};


export const selectedChannel = (id) => (dispatch) => {
  fetch(`http://localhost:3001/channels/${id}`)
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: 'select/channel',
        payload: json
      })
    })
}

export const editChannel = (category,name, login, link, followers, desk, id) => (dispatch) => {
  fetch(`http://localhost:3001/channels/${id}`,{
    method: 'PATCH',
    body: JSON.stringify(
      {
        categoryId: category,
        name: name,
        channelLogin: login,
        imgUrl: link,
        followers: followers,
        desk: desk
      }
    ),
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
  })

}

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
            "channelId": channelId,
            "name": userName,
            "text":text
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
          payload: json
        })});
  }}



//тут будут санки

export default Cards;
