import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-1 my-1">
      <ul className="nav justify-content-center border-bottom pb-1 mb-1">
        <NavLink className="nav-item" to="/about">
          <i
            style={{ color: "white" }}
            className=" nav-link px-2 text-body-secondary"
          >
            About
          </i>
        </NavLink>
      </ul>
      <p className="text-center text-body-secondary text-light">
        © 2023 Movie DB, Inc
      </p>
    </footer>
  );
};
export default Footer;
