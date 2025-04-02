import { createContext, useReducer } from "react";

const FormDateContext = createContext();

export const FormDataProvider = ({ children }) => {
    const initialState = {
        personalInfo: {
            userName: "",
            email: "",
            phone: "",
        },
        experience: {
            experience: "",
            skills: [],
        },
        additionalInfo: {
            coverLetter: "",
            startDate: "",
        },
    };

    const handleFormDataOperation = (state, action) => {
        const { type } = action;
        switch (type) {
            case "personalInfo":
                const {personalInfo} = action;
                return {
                    personalInfo
                };
            case "experience":
                return {
                    ...state,
                    experience: action.experience
                };
        }
    };

    const [state, dispatch] = useReducer(handleFormDataOperation, initialState);

    return (
        <FormDateContext.Provider value={{ state, dispatch }}>
            {children}
        </FormDateContext.Provider>
    );
}

export default FormDateContext;