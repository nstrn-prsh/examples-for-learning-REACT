import React, { useReducer, useContext, createContext } from "react";

const AuthStateContext = createContext();
const AuthDisptacherContext = createContext();

// custom hook baraye consumer har
export function useAuthState() {
     const context = useContext(AuthStateContext);
    //  age context meghdar dehi nashode bood yani AuthProvider khali hast pas ye error bayad ijad konim
     if (!context) {
          throw Error("useAuthState must be used with a AuthProvider");
     }
     return context;
}

export function useAuthDispatch() {
     const context = useContext(AuthDisptacherContext);
     if (!context) {
          throw Error("useAuthDispatch must be used with a AuthProvider");
     }
     return context;
}

export function AuthProvider({ children }) {
     const [state, dispatch] = useReducer(reducer, initialState);

     return (
          <AuthStateContext.Provider value={state}>
               <AuthDisptacherContext.Provider value={dispatch}>
                    {children}
               </AuthDisptacherContext.Provider>
          </AuthStateContext.Provider>
     );
}
