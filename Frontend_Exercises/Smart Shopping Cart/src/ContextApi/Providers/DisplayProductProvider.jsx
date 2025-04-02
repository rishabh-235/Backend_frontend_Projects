import { createContext, useReducer } from "react";

const DisplayProductContext = createContext();

export const DisplayProductProvider = ({ children }) => {
    const initialState = {
        productId: ""
    };

    const handleProductOperation = (state, action) => {
        return {
            productId: action.productId
        }
    };

    const [state, dispatch] = useReducer(handleProductOperation, initialState);

    return (

        <DisplayProductContext.Provider value={{ state, dispatch }}>
            {children}
        </DisplayProductContext.Provider>
    );
}
export default DisplayProductContext;