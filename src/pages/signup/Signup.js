import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

import './Signup.css'

export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, isPending, signup } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        signup(email, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>email:</span>
                <input 
                    type='email'
                    required
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>password:</span>
                <input 
                    type='password'
                    required
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <button>{isPending ? 'signing up...' : 'sign up'}</button>
            {error && <p>{error}</p>}
        </form>
    )
}