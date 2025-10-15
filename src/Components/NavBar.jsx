import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbarinfo">
                <img src="x.png" alt="Logo" width={28} />
                <Link to="/" className="navbarbtn">
                    <IoHomeOutline size={28} color="white" />
                    <p>Página Inicial</p>
                </Link>
                <Link to="/criarpost" className="navbarbtn primary">
                    <p>Criar Post</p>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
