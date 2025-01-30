
import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { BigDiscount } from "./BigDiscount";
import { NewArrivals } from "./NewArrivals";
import { BestSales } from "./BestSales";
import { Watch } from "./Watch";
import { ADDTOCART } from "../redux/cartSlice";
import { ADDCART } from "../redux/cartIcon";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Alerts } from "./Alerts";
import tableImage  from '../Assets/table.jpg'
import { Link } from "react-router-dom";
import { setProductDetails } from "../redux/productSlice";
import { Footer } from "./Footer";
export let Shop = () => {
   
  let {id}= useParams()
  console.log(id)
  
  let dispatch = useDispatch()
  let [alertMessage, setAlertMessage] = useState("");
  let handleAddToCart = (product) => {
    dispatch(ADDTOCART({ ...product, quantity: 1 }));
    setAlertMessage("Product is added to the Cart");
    
    
    setTimeout(() => {
      setAlertMessage("");  
    }, 3000);
  };
  let handleAddCart = (product) => {
    dispatch(ADDCART({ ...product, quantity: 1 }));
    setAlertMessage("Product is added to the Cart");
    
    
    setTimeout(() => {
      setAlertMessage("");  
    }, 3000);
  };
  let [filteredProducts, setFilteredProducts] = useState([]);
  let [allProducts, setAllProducts] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  let [selectedCategory, setSelectedCategory] = useState("sofa"); 

  let categories = ["sofa", "chair", "mobile", "wireless","watch","none"];

  useEffect(() => {
    let products = [...BigDiscount, ...NewArrivals, ...BestSales,...Watch];
    setAllProducts(products);

    
    let defaultFiltered = products.filter(
      (product) => product.category === "sofa"
    );
    setFilteredProducts(defaultFiltered);
  }, []);

  
  let handleCategoryChange = (category) => {
    setSelectedCategory(category);

    
    let filtered = allProducts.filter(
      (product) =>
        product.category === category &&
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  
  let handleSearch = (term) => {
    setSearchTerm(term);

   
    let filtered = allProducts.filter(
      (product) =>
        product.category === selectedCategory &&
        product.productName.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="shop">
      <Header />
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
       
                 <h3>product</h3>
               </div>
             </div>
       <Alerts message={alertMessage} onClose={() => setAlertMessage("")} />
      
      <div className="d-flex ms-5" style={{ marginLeft: "20px" }}>
       
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle mt-5"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Find By Category
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`dropdown-item ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="ms-5 col-9">
          <form className="mt-5">
            <div
              className="d-flex"
              style={{ position: "relative", marginLeft: "170px" }}
            >
              <input
                type="search"
                className="form-control rounded-pill"
                style={{
                  backgroundColor: "lightgray",
                  paddingRight: "40px",
                }}
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                aria-label="Search"
              />
              <i
                className="bi bi-search"
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </form>
        </div>
      </div>

      
      <div className="products mt-5 ms-3 me-3 ">
        {filteredProducts.length > 0 ? (
          <div className="row g-3">
            {[...new Map(filteredProducts.map(product => [product.productName, product])).values()]
  .map((product) => (
    <div key={product.id} className="col-md-4 product-card">
      <div
        className="card position-relative"
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none" }}
          onClick={() => dispatch(setProductDetails(product))}
        >
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
          onClick={() => {handleAddCart(product);handleAddToCart(product) }}
        >
          <span style={{ fontSize: "40px", marginBottom: "5px" }}>+</span>
        </button>
      </div>
    </div>
  ))}
          </div>
        ) : (
          <p className="text-center mt-5">No products found for this category</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};
