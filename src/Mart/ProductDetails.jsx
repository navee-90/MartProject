
import { useSelector } from 'react-redux';
import { Header } from './Header';
import tableImage from '../Assets/table.jpg';
import { BigDiscount } from './BigDiscount';
import { Link } from 'react-router-dom';
import { BestSales } from './BestSales';
import { NewArrivals } from './NewArrivals';
import { Watch } from './Watch';
import { ADDCART } from '../redux/cartIcon';
import { REMOVEFROMCART } from '../redux/cartIcon';
import { Alerts } from './Alerts';
import { ADDTOCART } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Footer } from './Footer';
import { setProductDetails } from '../redux/productSlice';
export const ProductDetails = () => {
  
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

    let handleProductCart = (products)=>{
      dispatch(ADDCART({ ...products, quantity: 1 }));
      setAlertMessage("Product is added to the cart");
      
      setTimeout(() => {
        setAlertMessage("");  
      }, 3000);
    };
    
    
 
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  if (!selectedProduct) {
    return (
      <div className="container mt-5">
        <Header />
        <p className="text-center">Loading product details...</p>
      </div>
    );
  }
  const getRelatedProducts = (category) => {
    const relatedProducts = [
      ...BigDiscount.filter((product) => product.category === category),
      ...BestSales.filter((product) => product.category === category),
      ...NewArrivals.filter((product)=>product.category===category),
      ...Watch.filter((product)=>product.category===category)
    ];
    const uniqueRelatedProducts = [
      ...new Map(relatedProducts.map((product) => [product.productName, product])).values(),
    ];
  
    return uniqueRelatedProducts;
  };
  const relatedProducts = getRelatedProducts(selectedProduct.category);


  return (
    <div>
    <div className="container mt-5">
      <Header />
       <Alerts message={alertMessage} onClose={() => setAlertMessage("")} />
       <div className="position-relative" >
               <img src={tableImage} alt="table" className="col-12" />
       
               <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            pointerEvents: 'none',
          }}
        ></div>
        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center"
          style={{ fontSize: '24px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(222, 31, 31, 0.8)', }}
        >

          <h3>{selectedProduct.productName}</h3>
        </div>
      </div>


      <div className="row">
        <div className="col-md-6">
          
          <img
            src={selectedProduct.imgUrl}
            alt={selectedProduct.productName}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1 className=" me-5 mt-2">{selectedProduct.productName}</h1>

          <h3> <span className='text-warning'>{selectedProduct.avgRating}</span>
            <span className='text-warning'>{selectedProduct.avgRating}</span>
            <span className='text-warning'>{selectedProduct.avgRating}</span>
            <span className='text-warning'>{selectedProduct.avgRating}</span>
            <span className='text-warning'>{selectedProduct.avgRating}</span>
            <span className='ms-5'>{selectedProduct.rating}</span>
          </h3>
          <h2>
            <span> {selectedProduct.price}</span>
            <span className='fs-5 ms-5 me-5'>cateogry:{selectedProduct.category}
            </span></h2>
          <p>{selectedProduct.shortDesc}</p>
          <button className="btn btn-primary mt-2"  onClick={()=> {handleAddCart(selectedProduct);handleAddToCart(selectedProduct)}} >Add to Cart</button>
        </div>
        <h5><b>Description:</b> </h5>
        <p>{selectedProduct.description}</p>
      </div>
      <h3>You might also like</h3>
      <div className="row">
        {relatedProducts.map((product) => (
          <div className="col-md-3" key={product.id}>
           <div className="card h-100 position-relative" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
               <Link
                                to={`/product/${product.id}`}
                                style={{ textDecoration: "none" }}
                                onClick={() => dispatch(setProductDetails(product))}
                              >
              <img
                src={product.imgUrl}
                alt={product.productName}
                className="card-img-top"
              />
           
              <div className="card-body">
                <h5 className='text-dark'>{product.productName}</h5>

                <div style={{ display: 'flex', gap: '10px' }}>
                        <span className="card-text text-warning">{product.avgRating}</span>
                        <span className="card-text text-warning">{product.avgRating}</span>
                        <span className="card-text text-warning">{product.avgRating}</span>
                        <span className="card-text text-warning">{product.avgRating}</span>
                        <span className="card-text text-warning">{product.avgRating}</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h3 className="card-text text-dark"><b>{product.price}</b> </h3>
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
      <Footer/>
    </div>
  );
};
