import { useContext } from "react";
import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

// CommonJS
// const Swal = require("sweetalert2");

const Login = () => {
  // const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Logged In",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    // console.log(user_captcha_value)
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Captcha Matched",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "failure",
        title: "Captcha does not Matched",
        showConfirmButton: false,
        timer: 1500,
      });
      // alert("Captcha Does Not Match");
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up </title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <div className="card md:w-1/2  max-w-sm shadow-2xl bg-base-100">
            {/* form */}
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* captcha */}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  type="text"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                {/* TODO: make the button disabled for captcha */}
                <button
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <p>
              <small>
                New Here? <Link to="/signup"> Create an account</Link>
              </small>
              <SocialLogin></SocialLogin>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
