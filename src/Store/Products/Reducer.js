import * as ActionType from "./actions";

const initialState = {
  Products: [],
};

const ProductsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ActionType.GET_PRODUCTS:
      return {
        ...state,
        Products: actions.payload,
      };
    default:
      return state;
  }
};

export default ProductsReducer;
