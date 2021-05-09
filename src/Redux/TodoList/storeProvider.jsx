import { createContext, useContext, useState, useEffect } from "react";

const StoreContext = createContext();

export const Provider = ({ store, children }) => {
     <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useDispatch = (action) => {
     const { dispatch } = useContext(StoreContext);
     if (!dispatch) {
          throw new Error("use provider before invoke useDispatch");
     }
     return dispatch
};

export const useSelector = (selector) => {
     const [, forceUpdate] = useState(0);

     const { getState, subscribe } = useContext(StoreContext);

     useEffect(() => {
          const unSubscribe = subscribe(() => forceUpdate((c) => c + 1));
          return () => unSubscribe();
     }, [subscribe]);

     if (!getState) throw new Error("use provider before invoke useSelector");
     return selector(getState());
};

// const sampleSelector = state => state(0)
