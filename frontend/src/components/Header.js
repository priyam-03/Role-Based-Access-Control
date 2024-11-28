import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../features/auth/authActions";
import { adminLogout } from "../features/admin/adminSlice"; // Admin logout action
import "../styles/header.css";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth); // For user login
  const { adminInfo } = useSelector((state) => state.admin); // For admin login
  const dispatch = useDispatch();

  return (
    <header>
      <div className="header-status">
        <div className="cta">
          {userInfo ? (
            <div>
              <button className="button" onClick={() => dispatch(logout())}>
                Logout
              </button>
              <img
                className="profile-image"
                src={`http://localhost:4000/${userInfo.user.avatar.filePath}`}
                alt="User Avatar"
              />
            </div>
          ) : adminInfo ? (
            <div>
              <button
                className="button"
                onClick={() => dispatch(adminLogout())}
              >
                Admin Logout
              </button>
            </div>
          ) : (
            <NavLink className="button" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
      <nav className="container navigation">
        <NavLink to="/">Home</NavLink>
        {!userInfo && !adminInfo && <NavLink to="/login">User Login</NavLink>}
        {!userInfo && !adminInfo && (
          <NavLink to="/admin-login">Admin Login</NavLink>
        )}
        {!userInfo && !adminInfo && <NavLink to="/register">Register</NavLink>}
        {userInfo && <NavLink to="/user-profile">Profile</NavLink>}
        {adminInfo && <NavLink to="/admin/dashboard">Admin Dashboard</NavLink>}
      </nav>
    </header>
  );
};

export default Header;
