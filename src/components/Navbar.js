import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { useLogout } from '../hooks/useLogout'

import './Navbar.css'

export default function Navbar() {

    const { user } = useAuthContext()
    const { logout } = useLogout()

    return (
        <nav className='navbar'>
            <p className='brand'>my todo</p>
            <ul className='nav-list'>
                {user ? 
                    <li>
                        <button onClick={logout} className='btn-logout'>logout</button>
                    </li>
                :
                    <>
                        <li>
                            <Link to='/signup' className='link'>signup</Link>
                        </li>
                        <li>
                            <Link to='/login' className='link'>login</Link>
                        </li>
                    </>
                }
            </ul>
        </nav>
    )
}