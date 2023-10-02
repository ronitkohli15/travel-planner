
import './home.css';
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import Card from '../cards/cards';
import logo from '../images/logo.png'
function Home()
{
  return (
      <>
            <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={image1} class="d-block carousel-height" alt="..." />
      </div>
      <div class="carousel-item">
        <img src={image2} class="d-block carousel-height" alt="..." />
      </div>
      <div class="carousel-item">
        <img src={image3} class="d-block carousel-height" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    <Card/>
{/* <div class="container my-12"> */}
  <footer
          class="text-center text-lg-start text-white text-bg-dark p-3 mt-5"
          
          >
    
    <div class="container p-4 pb-0">
      
      <section class="">
    
        <div class="row">
          
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 " >
          <a class="navbar-brand" href="#">
       
    </a>
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Travel Planner
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          

          <hr class="w-100 clearfix d-md-none" />

      
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a class="text-white">Hotels</a>
            </p>
            <p>
              <a class="text-white">Packages</a>
            </p>
           
          </div>
          

          <hr class="w-100 clearfix d-md-none" />

      
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Navigation links
            </h6>
            <p>
              <a class="text-white" href="/Home">Home</a>
            </p>
           
            <p>
              <a class="text-white" href="/Register">Register</a>
            </p>
            <p>
              <a class="text-white" href="/Login">Login</a>
            </p>
            <p>
              <a class="text-white" href="/Contact">Contact Us</a>
            </p>
          </div>

  
          <hr class="w-100 clearfix d-md-none" />

      
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> India, New delhi-110059, delhi</p>
            <p><i class="fas fa-envelope mr-3"></i> kohlironit83@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> 8287400495</p>
            <p><i class="fas fa-print mr-3"></i> 9283932823</p>
          </div>
      
        </div>
    
      </section>
    

      <hr class="my-3"/>

      
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
        
          <div class="col-md-7 col-lg-8 text-center text-md-start">
        
            <div class="p-3">
              © 2020 Copyright:
              <a class="text-white" href="https://mdbootstrap.com/"
                 >MDBootstrap.com</a
                >
            </div>
      
          </div>
      
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
      
            <a
               class="btn btn-outline-light btn-floating m-1
               text-white"
               role="button"
               ><i class="fab fa-facebook-f"></i
              ></a>

            
            <a
               class="btn btn-outline-light btn-floating m-1
               text-white"
               role="button"
               ><i class="fab fa-twitter"></i
              ></a>

    
            <a
               class="btn btn-outline-light btn-floating m-1
               text-white"
               role="button"
               ><i class="fab fa-google"></i
              ></a>

      
            <a
               class="btn btn-outline-light btn-floating m-1
               text-white"
               role="button"
               ><i class="fab fa-instagram"></i
              ></a>
          </div>
        
        </div>
      </section>
    
    </div>
    
  </footer>
{/* </div> */}

    </>

  )
};

export default Home;