export const productReducer = (state, action) => {
  switch (action.type) {
    case ProductActionTypes.UPDATE_PRODUCT_COLLECTION:
      const updatedState = {
        ...state,
        products: action.payload,
      };
      return updatedState;
    default:
      return state;
  }
};

// Actions and Types
export const updateCollections = (collections) => ({
  type: ProductActionTypes.UPDATE_PRODUCT_COLLECTION,
  payload: collections,
  //implicit return
});

export const ProductActionTypes = {
  UPDATE_PRODUCT_COLLECTION: 'UPDATE_PRODUCT_COLLECTION',
};
