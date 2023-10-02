import login from "../images/login.jpg";
import './login.css';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login(){
  
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
  
    const handleChange = ({ currentTarget: input }) => {
      setData({ ...data, [input.name]: input.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const url = "http://localhost:4000/admin/login";
        const { data: res } = await axios.post(url, data);
        localStorage.setItem("token", res.data);
        window.location = "/";
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    };
  
    return(
      <div class="bag">
        <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" >
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src={login}
                alt="login form" class="img-fluid"  />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleSubmit}>
    

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" ></i>
                    <span class="h1 fw-bold mb-0">Login Page</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3">Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" 
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required
      />
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    required
       />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                  <input class="btn btn-primary btn-lg" type="submit" value="Login"/>
                    
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2">Don't have an account? <a href="/register"
                      >Register here</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    )
};

export default Login;