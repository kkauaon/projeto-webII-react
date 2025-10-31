import { Link, useLocation } from 'react-router-dom';
import { IoCreateOutline } from 'react-icons/io5';
import './Navbar.scss';
import {
    GoBell,
    GoHome,
    GoHomeFill,
    GoPerson,
    GoSearch,
    GoSignOut,
} from 'react-icons/go';
import { useEffect, useState } from 'react';
import api from '../../services/api';

function Navbar() {
    const location = useLocation();
    const currentRoute = location.pathname;

    const [user, setUser] = useState(undefined);

    useEffect(() => {
        api.get('/users/me')
            .then(response => {
                setUser(response.data);
            })
            .catch(err => {
                console.error(err);
                setUser(null);
            });
    }, []);

	const logout = () => {
		api.post('/users/logout')
			.then(() => {
				setUser(null);
				window.location.reload();
			})
			.catch(err => {
				console.error(err);
			});
	}

    return (
        <div className="navbar">
            <div className="navbarinfo">
                <Link to="/" className="navbariconbtn">
                    <img src="/x.png" alt="Logo" width={28} />
                </Link>
                <Link to="/" className="navbarbtn">
                    {currentRoute === '/' ? (
                        <GoHomeFill size={28} color="white" />
                    ) : (
                        <GoHome size={28} color="white" />
                    )}
                    <p>Página Inicial</p>
                </Link>
                <Link to="/" className="navbarbtn">
                    <GoSearch size={28} color="white" />
                    <p>Explorar</p>
                </Link>
                {user && <Link to="/" className="navbarbtn">
                    <GoBell size={28} color="white" />
                    <p>Notificações</p>
                </Link>}
                {user && <Link to="/" className="navbarbtn">
                    <GoPerson size={28} color="white" />
                    <p>Perfil</p>
                </Link>}
                {user && <Link to="/criarpost" className="navbarbtn primary full">
                    <IoCreateOutline size={24} color="#000" />
                    <p>Criar Post</p>
                </Link>}
                {user ? (
                    <button
						onClick={logout}
                        className="navbarbtn primary full bottom"
                    >
                        <GoSignOut size={24} color="#000" />
                        <p>kkauabr</p>
                    </button>
                ) : (
                    <Link to="/login" className="navbarbtn primary full bottom">
                        <p>Entrar</p>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Navbar;
