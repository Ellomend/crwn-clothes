import { shopData } from "./shopData"

const initialState = {
  collections: shopData
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
export default shopReducer
