import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../firebaseConfig";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loginStatus, setLoginStatus] = useState(""); // 'success', 'failure', or ''
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        // Login was successful
        setLoginStatus("success");
        setError(null);
        /* const user = userCredential.user; */

        navigate("/");
      }
    } catch (err) {
      // Handle error
      setError(err.message);
      setLoginStatus("failure");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      {loginStatus === "success" && (
        <p className="success">Login was successful!</p>
      )}
      {loginStatus === "failure" && (
        <p className="error">Login failed. Please try again.</p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
