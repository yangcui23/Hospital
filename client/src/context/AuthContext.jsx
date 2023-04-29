import { createContext, useEffect, useReducer } from "react";



export const AuthContext = createContext({
    user: null,
    dispatch: function () { }
})


export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            console.error(`Unexpected action type: ${action.type}`);
            return state;
    }
}

export const AuthContextProvide = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, { User: null })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])
    console.log('AuthContext state ', state)
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )

}


