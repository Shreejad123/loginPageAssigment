import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="loginContainer">
        <h1>Welcome Back</h1>
        <p>Enter your email and passwrd to acess your account</p>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="checkbox" />
        <label>Remember me:</label>
        <button type="button" class="btn btn-dark">
          Dark
        </button>
      </div>
    </>
  );
};
export default Login;
