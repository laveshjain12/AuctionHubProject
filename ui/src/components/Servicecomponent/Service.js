import './Service.css';
function Service() {

  return (
    <>
    {/* service section */}

    <section class="service_section layout_padding">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>
            Our Services
          </h2>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <div class="img-box">
                <img src="assests/images/biding.jpg" height="70" alt="Online Bidding" />
              </div>
              <div class="detail-box">
                <h6>
                  Online Bidding
                </h6>
                <p>
                  Participate in real-time online auctions and place your bids from the comfort of your home.
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="img-box">
                <img src="assests/images/product.png" height="70" alt="Product Listings" />
              </div>
              <div class="detail-box">
                <h6>
                  Product Listings
                </h6>
                <p>
                  Browse through a comprehensive catalog of products available for auction across various categories.
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="img-box">
                <img src="assests/images/secure.png" height="70" alt="Secure Payments" />
              </div>
              <div class="detail-box">
                <h6>
                  Secure Payments
                </h6>
                <p>
                  Enjoy secure and reliable payment options for all your transactions on our platform.
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
     {/* end service section */}
           
    
          
          
       </>
    );
   }
export default Service;
