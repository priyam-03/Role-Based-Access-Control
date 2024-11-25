import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/auth/authActions"; // Use same login action or create a dedicated adminLogin action if needed
import { useEffect } from "react";
import Error from "../components/Error";
import Spinner from "../components/Spinner";

const AdminLoginScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth); // Assuming the same auth slice is used
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  // Redirect authenticated admin to admin dashboard
  useEffect(() => {
    if (userInfo) {
      navigate("/admin/users");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data)); // Use userLogin action or replace with admin-specific login action
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <Error>{error}</Error>}
      <div className="form-group">
        <label htmlFor="email">Admin Email</label>
        <input
          type="email"
          className="form-input"
          {...register("email")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Admin Password</label>
        <input
          type="password"
          className="form-input"
          {...register("password")}
          required
        />
      </div>
      <button type="submit" className="button" disabled={loading}>
        {loading ? <Spinner /> : "Admin Login"}
      </button>
      <div className="form-footer">
        <p>
          Not an admin? <Link to="/login">User Login</Link>
        </p>
      </div>
    </form>
  );
};

export default AdminLoginScreen;
