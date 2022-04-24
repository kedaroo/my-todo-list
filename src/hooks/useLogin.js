import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

export const useLogin = () => {

    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null)
        try {
            setIsPending(true)
            const res = await signInWithEmailAndPassword(auth, email, password)
            dispatch({ type: 'LOGIN', payload: res.user })
            setIsPending(false)
        } catch (err) {
            setIsPending(false)
            console.log(err.message)
            setError('could not log you in. please try again')
        }   
    }

    return { login, isPending, error }
}