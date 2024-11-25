import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";
import ProtectedRoute from "./routing/ProtectedRoute";
import UpdatePasswordScreen from "./screens/UpdatePasswordScreen";
import UpdateProfileScreen from "./screens/UpdateProfileScreen";
import ResetPassword from "./screens/ResetPassword";
import AdminUsers from "./screens/AdminUsers";
import EditUser from "./screens/EditUser";
import AdminLoginScreen from "./screens/AdminLoginScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />

          <Route path="/admin-login" element={<AdminLoginScreen />} />

          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/user-profile" element={<ProfileScreen />} />
            <Route path="/updatePassword" element={<UpdatePasswordScreen />} />
            <Route path="/updateProfile" element={<UpdateProfileScreen />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/user/:id" element={<EditUser />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
