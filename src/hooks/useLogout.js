import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

export const useLogout = () => {

    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        try {
            setIsPending(true)
            await signOut(auth)
            dispatch({ type: 'LOGOUT'})
            setIsPending(false)
        } catch (err) {
            setIsPending(false)
            setError(err.message)
        }
    }

    return { logout, error, isPending }
}