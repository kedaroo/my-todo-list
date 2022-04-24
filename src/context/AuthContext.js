import { createContext, useReducer, useEffect, useContext } from 'react'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext()

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        case 'AUTH_IS_READY':
            return { user: action.payload, authIsReady: true }
        default:
            return state
    }
}

const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context
}

const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady:null
    })

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            dispatch({ type: 'AUTH_IS_READY', payload: user})
            unsub()
        })
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, useAuthContext }
