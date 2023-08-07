import * as ActionType from "./actions";

const initialState = {
  DrawerState: false,
};

const DrawerReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ActionType.GET_DRAWER_STATE:
      return {
        ...state,
        DrawerState: actions.payload,
      };
    default:
      return state;
  }
};

export default DrawerReducer;
