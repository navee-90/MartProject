import { Header } from "./Header"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import carousel1 from '../Assets/carousel1.jpg'
import carousel2 from '../Assets/carousel2.jpg'
import carousel3 from '../Assets/carousel3.jpg'
import carousel4 from '../Assets/carousel4.jpg'
import { BigDiscount } from "./BigDiscount";
import { useDispatch } from "react-redux";
import { NewArrivals } from "./NewArrivals";
import { BestSales } from "./BestSales";
import { setProductDetails } from "../redux/productSlice";
import { ADDTOCART } from "../redux/cartSlice";
import { ADDCART } from "../redux/cartIcon";
import {Alerts} from './Alerts'
import { useParams } from "react-router-dom";
import { REMOVEFROMCART } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { Footer } from "./Footer";


export const Home = () => {

 
  let {id}= useParams()
  console.log(id)
  
  let dispatch = useDispatch()
  
 

  useEffect(() => {
    const carouselElement = document.getElementById("headerCarousel");
    if (carouselElement && window.bootstrap) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 3000,
        ride: "carousel",
      });
    }
  }, []);
 
 
   
  let [alertMessage, setAlertMessage] = useState("");

  let handleAddToCart = (product) => {
    dispatch(ADDTOCART({ ...product, quantity: 1 }));
    setAlertMessage("Product is added to the cart");
    setTimeout(() => {
      setAlertMessage("");  
    }, 3000);
  }
  let handleAddCart = (product) => {
    dispatch(ADDCART({ ...product, quantity: 1 }));
    setAlertMessage("Product is added to the cart");
    
    
    setTimeout(() => {
      setAlertMessage("");  
    }, 3000);
  };
  
let handleRemoveCart = (product) => {
  dispatch(REMOVEFROMCART(product.id));
};
  return (
    <div>
      <Header />
      <Alerts message={alertMessage} onClose={() => setAlertMessage("")} />
    
      <div id="headerCarousel" className="carousel slide mt-2 bg-light" data-bs-ride="carousel" data-bs-interval="3000" style={{ height: '400px' }}>
        <div className="carousel-inner">
          {/* Carousel Item 1 */}
          <div className="carousel-item active">
            <div className="d-flex align-items-center justify-content-between me-5">
              <div className="text-container p-5 mt-1 mb-5">
                <h1 className="fw-bold ms-5">50 % off on Your First Shopping</h1>
                <p className="fs-5 ms-5 md-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, maiores autem! Repellat molestias tempore cupiditate.

                </p>
                <Link to="/Shop" className="btn btn-primary ms-5">
                  Visit Collections
                </Link>
              </div>
              <div className="image-container mt-5" style={{ height: '450px', width: '500px' }} >
                <img
                  src={carousel1}
                  className="d-block w-100 "
                  alt="carousel1"
                />
              </div>
            </div>
          </div>

          {/* Carousel Item 2 */}
          <div className="carousel-item">
            <div className="d-flex align-items-center justify-content-between me-5">
              <div className="text-container p-5 mt-3">
                <h2 className="fw-bold ms-5">50 % off on Your First Shopping</h2>
                <p className="fs-5 ms-5 md-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, maiores autem! Repellat molestias tempore cupiditate.
                </p>
                <Link to="/Cart" className="btn btn-secondary ms-5">
                  Visit Collections
                </Link>
              </div>
              <div className="image-container mt-3" style={{ height: '300px', width: '380px' }}>
                <img
                  src={carousel2}
                  className="d-block w-100 me-5"
                  alt="carousel2"
                />
              </div>
            </div>
          </div>

          {/* Carousel Item 3 */}
          <div className="carousel-item">
            <div className="d-flex align-items-center justify-content-between me-5">
              <div className="text-container p-5 mt-3">
                <h2 className="fw-bold ms-5">50 % off on Your First Shopping</h2>
                <p className="fs-5 ms-5 md-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, maiores autem! Repellat molestias tempore cupiditate.

                </p>
                <Link to="/SignUp" className="btn btn-success ms-5">
                  Visit Collections
                </Link>
              </div>
              <div className="image-container mt-3" style={{ height: '300px', width: '350px' }} >
                <img
                  src={carousel3}
                  className="d-block w-100 me-5"
                  alt="carousel3"
                />
              </div>
            </div>
          </div>
          {/* carousel item 4 */}
          <div className="carousel-item">
            <div className="d-flex align-items-center justify-content-between me-5">
              <div className="text-container p-5 mt-3">
                <h2 className="fw-bold ms-5">50 % off on Your First Shopping</h2>
                <p className="fs-5 ms-5 md-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, maiores autem! Repellat molestias tempore cupiditate.

                </p>
                <Link to="/Cart" className="btn btn-secondary ms-5 ">
                  Visit Collections
                </Link>
              </div>
              <div className="image-container mt-3 " style={{ height: '300px', width: '350px' }} >
                <img
                  src={carousel4}
                  className="d-block w-100 me-5"
                  alt="carousel4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row g-4 ">
          <div class="col-md-3">
            <div class="card h-100 text-center border-0" style={{ backgroundColor: 'pink' }}>
              <div class="d-flex align-items-center justify-content-center rounded-circle bg-light mx-auto mt-4" style={{ width: "80px", height: "80px" }}>
                <i class="bi bi-car-front-fill fs-1 "></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Free Shipping</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>


          <div class="col-md-3" >
            <div className="card h-100 text-center border-0" style={{ backgroundColor: 'skyblue' }}>
              <div class="d-flex align-items-center justify-content-center rounded-circle bg-light mx-auto mt-4" style={{ width: "80px", height: "80px" }}>
                <i class="bi bi-credit-card-fill fs-1"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Safe Payment</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>


          <div class="col-md-3">
            <div class="card h-100 text-center border-0" style={{ backgroundColor: 'lightgreen' }}>
              <div class="d-flex align-items-center justify-content-center rounded-circle bg-light mx-auto mt-4" style={{ width: "80px", height: "80px" }}>
                <i class="bi bi-shield-shaded fs-1 "></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Secure Payment</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>


          <div class="col-md-3">
            <div class="card h-100 text-center border-0" style={{ backgroundColor: 'lightblue' }}>
              <div class="d-flex align-items-center justify-content-center rounded-circle bg-light mx-auto mt-4" style={{ width: "80px", height: "80px" }}>
                <i class="bi bi-headphones fs-1"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Back Guarantee</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Container" style={{ backgroundColor: "lightcyan", height: '1180px' }} >
        <div className="container mt-5 ">
          <center><h1>Big Discount</h1></center>
         <div className="row g-4 mt-2">
          {BigDiscount.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card h-100 position-relative" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => dispatch(setProductDetails(product))}
                >
                  <p className="position-absolute top-0 start-0 bg-primary text-white fw-bold px-2 py-1 rounded-pill mt-2 ms-1">
                    {product.discount}% OFF
                  </p>

                  <img
                    src={product.imgUrl}
                    className="card-img-top mt-5"
                    alt={product.productName}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h2 className="card-title text-dark">{product.productName}</h2>

                    <div style={{ display: "flex", gap: "10px" }}>
                      <span className="card-text text-warning">{product.avgRating}</span>
                      <span className="card-text text-warning">{product.avgRating}</span>
                      <span className="card-text text-warning">{product.avgRating}</span>
                      <span className="card-text text-warning">{product.avgRating}</span>
                      <span className="card-text text-warning">{product.avgRating}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h3 className="card-text text-dark mt-3">
                        <b>${product.price}</b>
                      </h3>
                    </div>
                  </div>
                </Link>
                <button
                  className="btn btn-light btn-outline-primary d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    position: "absolute",
                    bottom: "10px", 
                    right: "10px", 
                    width: "50px",
                    height: "50px",
                    zIndex: 1, 
                  }}
                  onClick={() => {handleAddCart(product);handleAddToCart(product)}} 
                >
                  <span style={{ fontSize: "40px", marginBottom: "5px" }}>+</span>
                </button>
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>


      <div className="Container" style={{ backgroundColor: "light" }}>
        <div className="container mt-5 ">
          <center><h1>New Arrivals</h1></center>
          <div className="row g-4">
            {NewArrivals.map((product, index) => (
              <div className={`col-md-4 ${index === NewArrivals.length - 1 ? "mx-auto" : ""}`} key={product.id}>
               <div className="card h-100 position-relative" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => dispatch(setProductDetails(product))}
                >
                  <p className="position-absolute top-0 start-0 bg-primary text-white fw-bold px-2 py-1 rounded-pill mt-2 ms-1">
                    {product.discount}% OFF
                  </p>

                  <img
                    src={product.imgUrl}
                    className="card-img-top mt-5"
                    alt={product.productName}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h2 className="card-title text-dark">{product.productName}</h2>

                    <div style={{ display: "flex", gap: "10px" }}>
                      <span className="card-text text-warning">{product.avgRating}</span>
                      <span className="card-text text-warning">{product.avgRating}</span>
                      <span className="card-text text-warning">{product.avgRating}</span>
                      <span className="card-text text-warning">{product.avgRating}</span>
                      <span className="card-text text-warning">{product.avgRating}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h3 className="card-text text-dark">
                        <b>${product.price}</b>
                      </h3>
                    </div>
                  </div>
                </Link>

                
                <button
                  className="btn btn-light btn-outline-primary d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    position: "absolute",
                    bottom: "10px", 
                    right: "10px", 
                    width: "50px",
                    height: "50px",
                    zIndex: 1, 
                  }}
                  onClick={() => {handleAddCart(product);handleAddToCart(product)}} 
                >
                  <span style={{ fontSize: "40px", marginBottom: "5px" }}>+</span>
                </button>
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>

      <div className="Container" style={{ backgroundColor: "lightcyan" }}>
        <div className="container mt-5 ">
          <center><h1>Best Sales</h1></center>
          <div className="row g-4">
            {BestSales.map((product) => (
              <div className="col-md-4" key={product.id}>
                  <div className="card h-100 position-relative" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => dispatch(setProductDetails(product))}
                >
                  <p className="position-absolute top-0 start-0 bg-primary text-white fw-bold px-2 py-1 rounded-pill mt-2 ms-1">
                    {product.discount}% OFF
                  </p>

                  <img
                    src={product.imgUrl}
                    className="card-img-top mt-5"
                    alt={product.productName}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h2 className="card-title text-dark">{product.productName}</h2>

                    <div style={{ display: "flex", gap: "10px" }}>
                      <span className="card-text text-warning">{product.avgRating}</span>
                      <span className="card-text text-warning">{product.avgRating}</span>
                      <span className="card-text text-warning">{product.avgRating}</span>
                      <span className="card-text text-warning">{product.avgRating}</span>
                      <span className="card-text text-warning">{product.avgRating}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h3 className="card-text text-dark">
                        <b>${product.price}</b>
                      </h3>
                    </div>
                  </div>
                </Link>
                <button
                  className="btn btn-light btn-outline-primary d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    position: "absolute",
                    bottom: "10px", 
                    right: "10px", 
                    width: "50px",
                    height: "50px",
                    zIndex: 1, 
                  }}
                  onClick={() => {handleAddCart(product);handleAddToCart(product)}} 
                >
                  <span style={{ fontSize: "40px", marginBottom: "5px" }}>+</span>
                </button>
              </div>
            </div>
            ))}
            
          </div>
          
        </div>
      </div>

     
      <Footer/>
    </div>


  )
}