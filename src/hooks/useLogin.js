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
            console.log(err.message)
            setError('could not log you in. please try again')
        }   
    }

    return { login, isPending, error }
}