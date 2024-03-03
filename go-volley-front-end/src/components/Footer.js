import {Link} from "react-router-dom";

const Footer = () => {
    return <div className="container">
        <footer
            className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top sticky-md-bottom">
            <p className="col-md-4 mb-0 text-muted">© {(new Date().getFullYear())} VolleyValky</p>

            <a href="/"
               className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            </a>

            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Головна</Link></li>
                <li className="nav-item"><Link to="/seasons" className="nav-link px-2 text-muted">Сезони</Link></li>
                <li className="nav-item"><Link to="/teams" className="nav-link px-2 text-muted">Команди</Link></li>
                <li className="nav-item"><Link to="/schedule" className="nav-link px-2 text-muted">Календар</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">Про нас</Link></li>
            </ul>
        </footer>
    </div>
}

export default Footer