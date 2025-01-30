export const Footer = ()=>{
    return(
      <div>
          <footer class="text-white text-lg-start mt-5" style={{ backgroundColor: "darkblue" }}>
        <div class="container p-4">
          <section class="">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 fs-6">
                <div className="d-flex mt-2">
                  <h3><i class="bi bi-bag-fill me-2"></i></h3>
                  <h3>Mart</h3>
                </div>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit totam ex non dolores, dicta blanditiis voluptate eum rerum saepe delectus! Molestias nam incidunt delectus saepe provident accusamus unde qui sit!</p>
              </div>

              <div class="col-lg-3 col-md-6 mb-4  mt-2 fs-5 ">
                <h3>About Us</h3>
                <ul class="list-unstyled mb-0 mt-2"  >
                  <li class="text-white">Careers</li>
                  <li class="text-white">Our Stores</li>
                  <li class="text-white">Our Cares</li>
                  <li class="text-white">Terms & Conditions</li>
                  <li class="text-white">Privacy Policy</li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4  mt-2 fs-5">
                <h3>Customer Care</h3>
                <ul class="list-unstyled mb-0 mt-2"  >
                  <li class="text-white">Help Center</li>
                  <li class="text-white">How to Buy</li>
                  <li class="text-white">Track Your Order</li>
                  <li class="text-white">Corporate & Bulk</li>
                  <li class="text-white">Purchasing</li>
                  <li class="text-white">Returns & Refunds</li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4  mt-2 fs-5 ">
                <h3>Contact Us</h3>
                <ul class="list-unstyled mb-0 mt-2" style={{color:"lightcyan"}} >
                  <p>   70 Washington Square   South, New York,NY 10012, United States</p>
                  <li class="text-white">Email:example@gmail.com</li>
                  <li class="text-white">Phone: +1 1123456780</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </footer>
      </div>  
        

    )
}