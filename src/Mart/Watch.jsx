import watch1 from '../Assets/watch1.jpg'
import carousel2 from '../Assets/carousel2.jpg'
import watch3 from '../Assets/watch3.jpg'
import watch4 from '../Assets/watch4.jpg'
import watch5 from '../Assets/watch5.jpg'
import watch6 from '../Assets/watch6.jpg'
import watch7 from '../Assets/watch7.jpg'
import { Link } from 'react-router-dom'
import { setProductDetails } from '../redux/productSlice'
import { ADDCART } from '../redux/cartIcon'
import { ADDTOCART } from '../redux/cartSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
export const Watch = [
  
      {
        id: "02",
        productName: "Aviator Watch ",
        imgUrl: carousel2,
        category: "watch",
        price:" 253",
        discount:20,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        rating: 4.8,
        avgRating:<i class="bi bi-star-fill text-warning" ></i>,
      },
      {
        id: "08",
        productName: "Fitness Watch",
        imgUrl:watch3,
        category: "watch",
        price:" 89",
        discount:35,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        rating: 4.6,
        avgRating: <i class="bi bi-star-fill text-warning" ></i>,
      },
      {
        id: "09",
        productName: "Military Watch",
        imgUrl: watch4,
        category: "watch",
        price: "299",
        className:"mt-5",
        discount:35,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        rating: 4.6,
        avgRating: <i class="bi bi-star-fill text-warning"></i>,
      },
      {
        id: "12",
        productName: "Diving Watch",
        imgUrl: watch5,
        category: "watch",
        className:"mt-5",
        price: "599",
        discount:10,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        rating: 4.8,
        avgRating: <i class="bi bi-star-fill text-warning" ></i>,
      },
      {
        id: "13",
        productName: "Smart Watch",
        imgUrl: watch6,
        category: "watch",
        className:"mt-5",
        price: "799",
        discount:5,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        rating: 4.8,
        avgRating:<i class="bi bi-star-fill text-warning" ></i>,
      },
      {
        id: "13",
        productName: "Sports Watch",
        imgUrl: watch7,
        category: "watch",
        price: "799",
        discount:5,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        rating: 4.8,
        avgRating:<i class="bi bi-star-fill text-warning" ></i>,
      },
];
const WatchPage = () => {
    let {id}= useParams()
  console.log(id)
  
  let dispatch = useDispatch()
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
    
  
    return (
        <div className="Container" style={{ backgroundColor: "lightcyan", height: '1180px' }} >
        <div className="container mt-5 ">
          <center><h1>Big Discount</h1></center>
         <div className="row g-4 mt-2">
          {Watch.map((product) => (
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
                    className="card mt-5"
                    alt={product.productName}
                    style={{ height: "100px",marginTop:"100px" }}
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
                        <b>{product.price}</b>
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
                  onClick={() => handleAddCart(product)} 
                >
                  <span style={{ fontSize: "40px", marginBottom: "5px" }}>+</span>
                </button>
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>
    );
  };
  
  export default WatchPage;