import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

export const useSignup = () => {

    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    const signup = async (email, password) => {
        setError(null)
        try {
            setIsPending(true)
            await createUserWithEmailAndPassword(auth, email, password)
            setIsPending(false)
        } catch (err) {
            setIsPending(false)
            setError(err.message)
        }
        
    }

    return { signup, error, isPending }

}