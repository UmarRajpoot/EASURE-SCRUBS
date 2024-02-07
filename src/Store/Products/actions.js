// GET_DRAWER_STATE
export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProductState_Payload = (ProdState) => ({
  type: GET_PRODUCTS,
  payload: ProdState,
});

export function ProductState(ProdState) {
  return (dispatch) => {
    dispatch(getProductState_Payload(ProdState));
  };
}
