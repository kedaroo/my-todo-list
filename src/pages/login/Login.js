import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, isPending, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        login(email, password)
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
            <button>{isPending ? 'logging in...' : 'login'}</button>
            {error && <p>{error}</p>}
        </form>
    )
}