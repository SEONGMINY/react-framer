import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav style={{ position: "fixed", top: 0, display: "flex", gap: 20 }}>
        <NavLink to="/transition">transition</NavLink>
        <NavLink to="/dragModal">dragModal</NavLink>
        <NavLink to="/checkbox">checkbox</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
