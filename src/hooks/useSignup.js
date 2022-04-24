import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

export const useSignup = () => {

    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        setError(null)
        try {
            setIsPending(true)
            const res = await createUserWithEmailAndPassword(auth, email, password)
            dispatch({ type: 'LOGIN', payload: res.user })
            setIsPending(false)
        } catch (err) {
            setIsPending(false)
            setError(err.message)
        }
        
    }

    return { signup, error, isPending }

}