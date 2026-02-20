export const initialState = {
  items: []
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload)
      };

    case "CLEAR_ITEMS":
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};