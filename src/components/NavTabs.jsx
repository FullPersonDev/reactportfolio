import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <header>
            <h1>
                <img className='profilepic' src="../../public/profilepic.jpg" alt="" />
                FullPersonDev
            </h1>
            <ul className='nav-bar'>
                <li className='nav-item'>
                    <Link
                        to= '/'
                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <a 
                        href="#aboutme"
                        className='nav-link'>
                        About Me
                    </a>
                </li>
                <li className='nav-item'>
                    <a 
                    href="#work"
                    className='nav-link'>
                        Work
                    </a>
                </li>
                <li className='nav-item'>
                    <a 
                    href="#contactme"
                    className='nav-link'>
                        Contact Me
                    </a>
                </li>
                <li className='nav-item'>
                    <a 
                    href="https://github.com/FullPersonDev"
                    className='nav-link'
                    target='_blank'>
                        GitHub Profile
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default NavTabs;