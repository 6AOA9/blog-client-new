import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {




  
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1>Login Page</h1>

            <div>
              <input type="text" placeholder="user name" className="name" />
            </div>

            <div className="second-input">
              <input type="password" placeholder="user name" className="name"  />
            </div>

            <div className="login-button">
          <button type="submit">Login</button>
            </div>

            <p className="link">
           <Link to="/signup"> Sign Up </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
