const initialState = {
  items: [],
  loading: false,
  modalWindow: false,
};

const Categories = (state = initialState, action) => {
  switch (action.type) {
    case 'categories/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'categories/load/success':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case 'open/modal/start':
      return {
        ...state,
        modalWindow: true,
      };

    case 'close/modal/start':
      return {
        ...state,
        modalWindow: false,
      };
    default:
      return state;
  }
};



export const openModal = () => {
  return {
    type: 'open/modal/start',
  };
};

export const closeModal = () => {
  return {
    type: 'close/modal/start',
  };
};

export function loadCategories() {
  return (dispatch) => {
    dispatch({
      type: 'categories/load/start',
    });
    fetch('/categories')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return dispatch({
          type: 'categories/load/success',
          payload: json,
        });
      });
  };
}

export default Categories;