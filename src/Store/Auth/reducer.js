import * as ActionType from "./actions";

const initialState = {
  users: [],
};

const UserReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ActionType.GET_USER:
      return {
        ...state,
        users: actions.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
