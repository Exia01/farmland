import React, { createContext, useEffect, useReducer } from 'react';
import { productReducer } from './../../reducer/Product/index';

const ProductContext = createContext();
const { Provider } = ProductContext;

const ProductDispatchContext = createContext();

const initializer = () => {
  const initialState = {
    products: JSON.parse(localStorage.getItem('products')) || [],
  };
  return initialState;
};

const ProductProvider = ({ children }) => {
  const [productsState, dispatch] = useReducer(productReducer, {}, initializer);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(productsState.products));
  }, [productsState]);

  useEffect(() => {
      //Not sure if this will be needed, leaving blank for now
    return () => {};
  }, []);

  return (
    <Provider value={productsState}>
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </Provider>
  );
};

export default ProductProvider;
export { ProductContext, ProductDispatchContext };
