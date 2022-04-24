import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
import { useState } from 'react'

export const useLogout = () => {

    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const logout = async () => {
        setError(null)
        try {
            setIsPending(true)
            await signOut(auth)
            setIsPending(false)
        } catch (err) {
            setIsPending(false)
            setError(err.message)
        }
    }

    return { logout, error, isPending }
}