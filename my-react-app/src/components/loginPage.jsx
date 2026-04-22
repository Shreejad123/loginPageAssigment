import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./login.module.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login attempt:", { email, password });
    }
  };
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.loginContainer}>
            <div className={styles.card}>
              <h4>Get Everything you want</h4>
            </div>
            <div className={styles.loginCard}>
              <h1>Welcome Back</h1>
              <p>Enter your email and password to access your account</p>
              <form onSubmit={handleSubmit} className={styles.loginForm}>
                <div>
                  <label>Email</label>
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="errorMessage">{errors.email}</p>
                  )}
                </div>
                <div className={styles.passwordWrapper}>
                  <label>Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={styles.input}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {showPassword ? (
                    <AiFillEye
                      className={styles.eyeIcon}
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      className={styles.eyeIcon}
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  )}
                  {errors.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  )}
                </div>
                <div className={styles.checkbox}>
                  <input type="checkbox" />
                  <label>Remember me:</label>
                </div>
                <div>
                  <button
                    type="submit"
                    className={`btn btn-dark ${styles.loginBtn}`}
                  >
                    Sign up
                  </button>
                  <div>
                    <button
                      type="button"
                      className={`btn btn-light ${styles.loginBtn}`}
                    >
                      Signup with Google
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
