export const GET_USER = "GET_USER";

export const get_user_Payload = (user) => ({
  type: GET_USER,
  payload: user,
});

export function AddUser(user) {
  return (dispatch) => {
    dispatch(get_user_Payload(user));
  };
}
