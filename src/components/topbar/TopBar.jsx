import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className="link" to="/about">ABOUT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className="link" to="/contact">CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className='topListItem'>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img
                        className="topImg"
                        src="https://images.unsplash.com/photo-1674718061623-2d1902f6889d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className=" topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
