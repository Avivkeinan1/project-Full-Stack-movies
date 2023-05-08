import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light "
      aria-label="Third navbar example"
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand text-light">
          Movie DB
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            {user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/saveMovies"}>
                    <i className="bi bi-heart text-light">Favorite</i>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to={"log-out"}>
                    <i className="bi bi-person  text-light">logOut</i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"search-bar"}>
                    <i className="bi bi-person text-light">
                      Search Your Favorite Movie
                    </i>
                  </NavLink>
                </li>
                {user.admin && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/all-Users"}>
                      <i className="bi bi-person text-light"> All Users</i>
                    </NavLink>
                  </li>
                )}
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/sign-up"}>
                    <i className="bi bi-person text-light">Sign-Up</i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="login" className="nav-link">
                    <i className="bi bi-person text-light"> login</i>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/sign-up-business" className="nav-link">
                    <i className="bi bi-person text-light"> Sign-Up-Admin</i>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
