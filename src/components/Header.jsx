import React from 'react';
import {Link} from 'react-router-dom'
import '../css/Header.css';

function Header({user}) {
    return (
        <nav>
            <div><Link to='/' className='nav--tours'>ALL TOURS</Link></div>
            <div><Link to='/' className='logo'><img src="/logo.png" alt="Logo" width='10%' height='90%' /></Link></div>
            <div className='nav--button'>
            {
                !user?<Link to='/login'>LOGIN</Link>:null
            }
            {user? <Link to='/profile' className='user-pic'><img src={user.photo} alt="user-pic" width="100%" height="100%" /></Link>: null}
            {
                user && user.role === 'admin' 
                ? <Link to='/signup'>SIGN UP</Link>
                : null
            }
            </div>
        </nav>
    );
}

export default Header;