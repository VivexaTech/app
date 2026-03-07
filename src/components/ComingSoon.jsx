import { useNavigate } from "react-router-dom";

export default function ComingSoon(){

  const navigate = useNavigate();

  return(
    <div className="coming-container">

      <div className="coming-card">

        <div className="coming-icon">
          <i className="bi bi-tools"></i>
        </div>

        <h2>Coming Soon</h2>

        <p>
          This feature is currently under development.
          It will be available very soon on Vivexa Tech.
        </p>

        <button
          className="coming-btn"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>

      </div>

    </div>
  )
}