import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./login.module.css";
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../assets/images/bg.jpg";
import { GiStripedSun } from "react-icons/gi";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
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
    toast.success("login sucessful!", { autoClose: 1000 });
  };
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.imageCard}>
            <img src={loginImage} alt="Background" className={styles.image} />
            <div className={styles.text}>
              <p className={styles.topLefttext}>
                <span>
                  Wise Quote
                  <hr />
                </span>
              </p>
              <div className={styles.paragraphtext}>
                <h2>
                  Get <br></br>Everything <br></br>You want
                </h2>
                <p className={styles.paragraphdetail}>
                  You Can get Everything you want if you work hard.<br></br>
                  trust the process and stick to plan
                </p>
              </div>
            </div>
          </div>
          <div className={styles.loginContainer}>
            <div className={styles.cogie}>
              Cogie <GiStripedSun />
            </div>
            <h1 className={styles.header}>Welcome Back</h1>
            <p className={styles.paragraph}>
              Enter your email and password to access your account
            </p>
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
                {errors.email && <p className="errorMessage">{errors.email}</p>}
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
                  <FiEyeOff
                    className={styles.eyeIcon}
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <IoEyeOutline
                    className={styles.eyeIcon}
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
              </div>
              <div className={styles.checkBoxforgotpassword}>
                <div className={styles.checkbox}>
                  <input type="checkbox" />
                  <label>Remember me</label>
                </div>
                <div className={styles.forgotpassword}>
                  <a>Forgot password</a>
                </div>
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
                    <FcGoogle />
                    &nbsp; Signup with Google
                  </button>
                  <div className={styles.signup}>
                    Don't have an account? Sign up
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Login;
