import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <p className='brand'>my todo</p>
            <ul className='nav-list'>
                <li>
                    <Link to='/signup' className='link'>signup</Link>
                </li>
                <li>
                    <Link to='/login' className='link'>login</Link>
                </li>
                <li>
                    {/* <button>logout</button> */}
                </li>
            </ul>
            
        </nav>
    )
}