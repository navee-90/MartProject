import { useDispatch, useSelector } from "react-redux";
import { Header } from "./Header";
import { DecQuantity, IncQuantity, REMOVEFROMCART } from "../redux/cartSlice";
import { Footer } from "./Footer";

export let Cart = () => {
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-page">
      <Header />
      <div className="container mt-5">
        <h1 className="text-center mb-4 ">Cart Page</h1>

        <div className="row">
          
          <div className="col-md-8 ">
            {cart.length > 0 ? (
              cart.map((product) => (
                <div
                  key={product.id}
                  className="row align-items-center mb-4 p-3 bg-light rounded shadow-sm position-relative"
                >
                  <div className="col-md-3 text-center">
                    <img
                      src={product.imgUrl}
                      alt={product.productName}
                      className="img-fluid rounded"
                      style={{ maxHeight: "120px" }}
                    />
                  </div>
                  <div className="col-md-4">
                    <h5>{product.productName}</h5>

                   <div className="mt-4">

                    <span className="text-muted mt-5">
                      ${product.price} * {product.quantity}
                    </span>
                   
                   <b><span className="mx-2 ms-2">${product.price * product.quantity}</span></b> 
                    </div>
                  </div>
                  <div className="col-md-3 text-center mt-5">
                    <button
                      className="btn btn-outline-secondary mx-1"
                      onClick={() => dispatch(IncQuantity(product.id))}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-outline-secondary mx-1"
                      onClick={() => dispatch(DecQuantity(product.id))}
                    >
                      -
                    </button>


                  </div>
                  <div className="col-md-2 text-center position-absolute" style={{ top: '10px', right: '10px' }}>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(REMOVEFROMCART(product.id))}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h3 className="text-center text-danger">Your Cart is Empty</h3>
            )}
          </div>

         
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h4 className="card-title">Cart Summary</h4>
              <hr></hr>
              <div className="card-body">
                <p className="card-text">
                  Total Price:{" "}
                  </p>
                  <b className="">${totalPrice.toFixed(2)}</b>
              
              </div>
            </div>
          </div>
        </div>
      </div>

     <Footer/>
    </div>
  );
};
