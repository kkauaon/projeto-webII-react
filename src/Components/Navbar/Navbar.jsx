import { Link, useLocation, useNavigation, useRoutes } from 'react-router-dom';
import { IoHome, IoHomeOutline } from 'react-icons/io5';
import './Navbar.scss';
import { GoBell, GoHome, GoHomeFill, GoPerson, GoSearch } from 'react-icons/go';

function Navbar() {
	const location = useLocation();
	const currentRoute = location.pathname;

    return (
        <div className="navbar">
            <div className="navbarinfo">
                <Link to="/" className="navbariconbtn">
                    <img src="/x.png" alt="Logo" width={28} />
                </Link>
                <Link to="/" className="navbarbtn">
                    {currentRoute === '/' ? <GoHomeFill size={28} color="white" /> : <GoHome size={28} color="white" />}
                    <p>Página Inicial</p>
                </Link>
				<Link to="/" className="navbarbtn">
                    <GoSearch size={28} color="white" />
                    <p>Explorar</p>
                </Link>
				<Link to="/" className="navbarbtn">
                    <GoBell size={28} color="white" />
                    <p>Notificações</p>
                </Link>
				<Link to="/" className="navbarbtn">
                    <GoPerson size={28} color="white" />
                    <p>Perfil</p>
                </Link>
                <Link to="/criarpost" className="navbarbtn primary full">
                    <p>Criar Post</p>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
