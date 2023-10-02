import jaipur from '../images/jaipur.jpg'
import goa from '../images/goa.jpg'


import manali from '../images/manali.jpg'
import kashmir from '../images/kashmir.jpg'
import './cards.css'
function Card(){
    return(

      <div class="bg">
      <b><h1 class ='text-center'>Packages</h1></b><br>
      </br>
      <br></br>
        <div class="container">
          <div class="row justify-content-between">

            <div class="col-3">
            <div class="card text-center">
        <img src={jaipur} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Jaipur</h5>
          <p class="card-text">3 Nights 4 Days</p>
          <p class="card-text">Hotel reservation</p>
          <p class="card-text">Sight-seeing</p>
          <p class="card-text">Food</p>
          <a href="/details" class="btn btn-primary"> INR 9999/-</a>
        </div>
      </div>
            </div>


            <div class="col-3">
            <div class="card text-center">
        <img src={goa} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Goa</h5>
          <p class="card-text">2 Nights 3 Days</p>
          <p class="card-text">Hotel reservation</p>
          <p class="card-text">Sight-seeing</p>
          <p class="card-text">Food</p>
          <a href="#" class="btn btn-primary">INR 5999/-</a>
        </div>
      </div>
            </div>


            <div class="col-3">
            <div class="card text-center">
        <img src={kashmir} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">kashmir</h5>
          <p class="card-text">4 Nights 5 Days</p>
          <p class="card-text">Hotel reservation</p>
          <p class="card-text">Sight-seeing</p>
          <p class="card-text">Food</p>
          <a href="#" class="btn btn-primary">INR 10800/-</a>
        </div>
      </div>
            </div>
            

            <div class="col-3">
            <div class="card text-center">
        <img src={manali} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Manali</h5>
          <p class="card-text">5 Nights 6 Days</p>
          <p class="card-text">Hotel reservation</p>
          <p class="card-text">Sight-seeing</p>
          <p class="card-text">Meals</p>
          <a href="/iternary" class="btn btn-primary">INR 12999/-</a>
        </div>
      </div>
            </div>
          
            


          </div>
        </div>
      </div>
)
};
   export default Card;
    
