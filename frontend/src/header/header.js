import logo from '../images/logo.png'
function Header(){
    return(
        <div className="header">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <nav class="navbar navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src={logo}height="40" 
        loading="lazy" />
    </a>
  </div>
</nav>
    <a class="navbar-brand" href="#"><b>Travel Planner</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Home"><b>Home</b></a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>About</b>
          </a>
          <ul class="dropdown-menu">
            
            <li><a class="dropdown-item" href="/card">Packages</a></li>
            
            <li><a class="dropdown-item" href="/login">Login </a></li>
            <li><a class="dropdown-item" href="/Hotels">Hotels </a></li>
            
           
          </ul>
        </li>

        
      
        
        <li class="nav-item">
          <a class="nav-link" href="/register"><b>Register</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login"><b>Log In</b></a>
        </li>
       
        
       
      </ul>
      
      
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    


<a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          
            <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
            class="rounded-circle"
            height="44"
            alt=".."
            loading="lazy"
          />

          </a>
          <ul class="dropdown-menu">
            
            <li><a class="dropdown-item" href="/Login">My Profile</a></li>
            <li><a class="dropdown-item" href="#">My Trips</a></li>
            
            
            <li><a class="dropdown-item" href="#">Logout</a></li>
            
           
          </ul>


  </div>
</nav>




    
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header;