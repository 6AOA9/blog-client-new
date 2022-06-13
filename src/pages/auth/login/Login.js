import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="custombox clearfix">
      <h4 className="small-title">Login Page</h4>
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <form action="#" method="post" className="form-wrapper">
            <h4>Login</h4>

            <input
              type="email"
              className="form-control"
              placeholder="Your email"
            />
            <input
              type="password"
              className="form-control"
              placeholder="Your Password"
            />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to={"/"}>
              <button
                type="submit"
                className="btn btn-danger"
                style={{ background: "#7FFFD4", color: "black" }}
              >
                Forget Password
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
