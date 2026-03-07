import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);

      // login ke baad home ya account page
      navigate("/");

    } catch (error) {
      console.log(error);
    }
  };

  const handleSkip = () => {
    navigate("/tools");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          <img src="https://media.licdn.com/dms/image/v2/D4D0BAQHDVZSOTCyhig/company-logo_200_200/B4DZmQAAVKJgAI-/0/1759057547562?e=2147483647&v=beta&t=27Mmetjf5dBeJ41BKkApJ94b_nU20tVAan3j0E2iaN4" alt="Vivexa Tech logo" />
        </div>

        <h2 className="login-title">
          <i className="bi bi-shield-lock-fill"></i>
          Login to Vivexa
        </h2>

        <p className="login-subtitle">
          Access tools, courses and your account
        </p>

        <button
          className="google-login-btn"
          onClick={handleGoogleLogin}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
          />
          Continue with Google
        </button>

        <button
          className="skip-login-btn"
          onClick={handleSkip}
        >
          Skip for Tools
        </button>

      </div>

    </div>
  );
}

export default Login;