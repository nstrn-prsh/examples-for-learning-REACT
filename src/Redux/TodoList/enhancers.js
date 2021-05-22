export const logDispatch = (createStore) => {
     return (rootReducer, preloadedState, enhancer) => {
          const store = createStore(rootReducer, preloadedState, enhancer);
          //   harzamani ke dispatch etefagh oftad azash log begirim
          const logActions = (actions) => {
               const result = store.dispatch(actions);
               console.log(actions);
               return result;
          };
          return { ...store, dispatch: logActions };
     };
};

export const logState = (createStore) => {
     return (rootReducer, preloadedState, enhancer) => {
          const store = createStore(rootReducer, preloadedState, enhancer);
          const logGetState = () => {
               const res = store.getState();
               console.log(res);
               return res;
          };
          return { ...store, getState: logGetState };
     };
};
