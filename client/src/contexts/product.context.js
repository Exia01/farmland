import React, { createContext, useEffect, useReducer } from 'react';
import { productReducer } from '../reducer/productReducer';

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
    // const getProductsCollection = async () => {
    //   try {
    //     // const { data } = await call to axios

    //   } catch (error) {
    //     console.log(error, 'error fetching for csrf cookie');
    //   }
    // };
    // getProductsCollection();
    return () => {};
  }, []);
  // );

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
