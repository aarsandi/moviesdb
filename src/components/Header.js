import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function Header() {
    const history = useHistory()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <p className="navbar-brand mx-5 pointer" onClick={() => history.push('/')}>PilmDb</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <p className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Movie
                        </p>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <Link to="/movies/top-rated" className="dropdown-item">Top Rated</Link>
                            <Link to="/movies/popular" className="dropdown-item">Popular</Link>
                            <Link to="/movies/upcoming" className="dropdown-item">Upcoming</Link>
                            <Link to="/movies/now-playing" className="dropdown-item">Now Playing</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <p className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Tv Show
                        </p>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <Link to="/tvshows/top-rated" className="dropdown-item">Top Rated</Link>
                            <Link to="/tvshows/popular" className="dropdown-item">Popular</Link>
                            <Link to="/tvshows/on-the-air" className="dropdown-item">On The Air</Link>
                            <Link to="/tvshows/airing-today" className="dropdown-item">Airing Today</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/people" className="nav-link">Popular People</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
