import "./login.css";

export const SignUp = () => {




  
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1>Sign Up Page</h1>

            <div>
              <input type="text" placeholder="user name" className="name" />
            </div>

            <div>
              <input type="email" placeholder="email" className="name" />
            </div>

            <div className="second-input">
              <input type="password" placeholder="user name" className="name"  />
            </div>

            <div className="login-button">
          <button type="submit">Sign Up</button>
            </div>

      
          </div>
        </div>
      </div>
    </div>
  );
};
