import register from "../images/register.jpg";
import './user_register.css';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register(){

  const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://127.0.0.1:4000/admin/register";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
      
      <div class="back">

      <section class="vh-100" >
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card text-black">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-5 col-xl-5 order-2 order-lg-1">
    
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
    
                    <form class="mx-1 mx-md-4"
                    onSubmit={handleSubmit}>
    
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" class="form-control" 
                         placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
 />
                          <label class="form-label" for="form3Example1c"></label>
                        </div>
                      </div>
    
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" class="form-control"
                           placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
/>
                          <label class="form-label" for="form3Example3c"></label>
                        </div>
                      </div>
    
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" class="form-control" 
                           placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
 />
                          <label class="form-label" for="form3Example4c"></label>
                        </div>
                      </div>
    
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4cd" class="form-control"
                           placeholder="Repeat your password"
                           name="Repeat your password"
                           onChange={handleChange}
                           value={data.repeatyourpassword}
                            />
                          <label class="form-label" for="form3Example4cd"></label>
                        </div>
                      </div>
    
                      <div class="form-check d-flex justify-content-center mb-5">
                        <input class="form-check-input me-2" type="checkbox" id="form2Example3c" 
                        />
                        <label class="form-check-label" for="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>
    
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <input class="btn btn-primary btn-lg" type="submit" value="Register"/>
                        
                      </div>
    
                    </form>
    
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
    
                  <img src={register}
                      class="img-fluid" alt=""/>
    
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
}

export default Register;
