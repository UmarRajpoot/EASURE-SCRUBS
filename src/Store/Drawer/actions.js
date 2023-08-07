// GET_DRAWER_STATE
export const GET_DRAWER_STATE = "GET_DRAWER_STATE";

export const getDrawerState_Payload = (DState) => ({
  type: GET_DRAWER_STATE,
  payload: DState,
});

export function DrawerState(DState) {
  return (dispatch) => {
    dispatch(getDrawerState_Payload(DState));
  };
}
