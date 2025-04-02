import {createContext, useReducer} from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const initialState = {
        user: {
            username: "",
            email: "",
            address: ""
        },
    };

    const handleUserOperation = (state, action) => {
        const {user} = action;
        return {
            user: {
                username: user.username,
                email: user.email,
                address: user.address
            }
        }
    }

    const [state, dispatch] = useReducer(handleUserOperation, initialState);

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;