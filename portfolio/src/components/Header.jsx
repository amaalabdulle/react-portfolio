import { NavLink } from "react-router-dom";

function Header() {

  const navStyle = {
    backgroundColor: "#9483AF",
  };
  const name = {
    fontFamily: 'fantasy',
    fontSize: '30px',
  };
    return (
        <nav className="navbar navbar-expand-lg" style={navStyle}>
            <div className="container-fluid">
                <div className="navbar-brand" style={name}>Amaal Abdulle</div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" end>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Projects-Gallery" end>Projects Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" end>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
