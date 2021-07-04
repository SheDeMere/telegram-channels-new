const initialState = {
  loading: false,
  items: [],
  selectedChannel: [],
  showDeleteChannelModal: false,
};

const Cards = (state = initialState, action) => {
  switch (action.type) {
    case 'channels/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'channels/load/success':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case 'channelsByCategory/load/success':
      return {
        ...state,
        items: action.payload,
      };

    case 'open/deleteChannelModal':
      return {
        ...state,
        showDeleteChannelModal: action.payload,
      };

    case 'admin/channel/delete':
      return {
        ...state,
        items: state.items.filter((channel) => {
          if (channel.id === action.payload) {
            return false;
          }
          return channel;
        }),
        showDeleteChannelModal: false,
      };

    case 'close/deleteChannelModal':
      return {
        ...state,
        showDeleteChannelModal: false,
      };

    case 'select/channel/success':
      return {
        ...state,
        selectedChannel: action.payload,
      };

    case 'edit/channel/success':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'add/channel/success':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'all/channels/success':
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export const selectedChannel = (id) => (dispatch) => {
  fetch(`/channels/${id}`)
    .then((res) => res.json())
    .then((json) => {
      dispatch({
        type: 'select/channel/success',
        payload: json,
      });
    });
};

export const editChannel =
  (category, name, login, link, followers, desk, id) => (dispatch) => {
    fetch(`/channels/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        categoryId: category,
        name: name,
        channelLogin: login,
        imgUrl: link,
        followers: followers,
        desk: desk,
      }),
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'edit/channel/success',
          payload: json,
        });
      });
  };

export const allChannels = () => {
  return (dispatch) => {
    fetch('/channels')
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'all/channels/success',
          payload: json,
        });
      });
  };
};

export function loadChannels() {
  return (dispatch) => {
    dispatch({
      type: 'channels/load/start',
    });
    fetch('/channels')
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

export function openChannelsByCategory(categoryId) {
  return (dispatch) => {
    dispatch({
      type: 'channelsByCategory/load/start',
    });
    fetch(`/channels?categoryId=${categoryId}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return dispatch({
          type: 'channelsByCategory/load/success',
          payload: json,
        });
      });
  };
}

export function openDeleteChannelModal(show) {
  return {
    type: 'open/deleteChannelModal',
    payload: !show,
  };
}
export function closeDeleteChannelModal() {
  return {
    type: 'close/deleteChannelModal',
  };
}
export function deleteChannel(id) {
  return (dispatch) => {
    fetch(`/channels/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'admin/channel/delete',
          payload: id,
        });
      });
  };
}
export const addChannel = (
  id,
  category,
  name,
  login,
  link,
  followers,
  desk,
) => {
  return (dispatch) => {
    dispatch({ type: 'add/channel/start' });
    fetch('/channels', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        categoryId: category,
        name: name,
        channelLogin: login,
        imgUrl: link,
        followers: followers,
        desk: desk,
      }),
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'add/channel/success',
          payload: json,
        });
      });
  };
};



export default Cards;
