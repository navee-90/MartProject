
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


export const Header = () => {
 
  let cartIcon = useSelector(state => state.cartIcon)
  return (
    <div className="Container" style={{position:"sticky",top:"0",zIndex:"1000",backgroundColor:"light"}}> 
      <nav class="navbar navbar-expand-sm navbar-dark bg-light ">
        <h2><i class="bi bi-bag-fill ms-5"></i></h2>
        <div class="container-fluid text-dark">
          <a class="navbar-brand text-dark" href="javascript:void(0)"><h2>Mart</h2></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <form class='me-5'>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active text-dark" aria-current="page" to="/"><h5>Home</h5></Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link active text-dark" aria-current="page" to="/Shop"><h5>Shop</h5></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text-dark" aria-current="page" to="/Cart"><h5>Cart</h5></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text-dark" aria-current="page" to="/SignUp"><h5><i class="bi bi-person-fill"></i></h5></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text-dark font" aria-current="page" to="/CartIcon"><h5><i class="bi bi-cart-fill "></i> <sup className='bg-danger p-1 rounded-square'>{cartIcon.length}</sup></h5></Link>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav >

    
  
</div>

  )
}
