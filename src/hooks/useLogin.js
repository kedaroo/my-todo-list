import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

export const useLogin = () => {

    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    const login = async (email, password) => {
        setError(null)
        try {
            setIsPending(true)
            await signInWithEmailAndPassword(auth, email, password)
            setIsPending(false)
        } catch (err) {
            setIsPending(false)
            setError(err.message)
        }   
    }

    return { login, isPending, error }
}