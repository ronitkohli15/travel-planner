import room1 from '../images/room1.jpg';
import room2 from '../images/room2.jpg';
import room3 from '../images/room3.jpeg';
import payment from '../payments/payment';
function Rooms(){


    return(

        <div class="container">
          <div class="row justify-content-between">

            <div class="col-3">
            <div class="card text-center">
        <img src={room1}class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Standard King Room</h5>
          <p class="card-text">1 Double Bed</p>
          <p class="card-text">Flat-screen TV</p>
          <p class="card-text">Balcony</p>
       
          <a href="payment" class="btn btn-primary"> INR 11999/-</a>
        </div>
      </div>
            </div>
            
            
            <div class="col-3">
            <div class="card text-center">
        <img src={room2}class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Deluxe Room</h5>
          <p class="card-text">1 extra-large Double Bed </p>
          <p class="card-text">Flat-screen TV</p>
          <p class="card-text">Ensuite bathroom</p>
          <p class="card-text">Terrace</p>
       
          <a href="payment" class="btn btn-primary"> INR 11999/-</a>
        </div>
      </div>
      
            </div>
            <div class="col-3">
            <div class="card text-center">
        <img src={room3}class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Deluxe Room</h5>
          <p class="card-text">1 queen Double Bed </p>
          <p class="card-text">Flat-screen TV</p>
          <p class="card-text">Ensuite bathroom</p>
          
       
          <a href="payment" class="btn btn-primary"> INR 12999/-</a>
        </div>
      </div>
      
            </div>
            </div>
            </div>
            
    )
    }

export default Rooms;