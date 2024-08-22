import './Client.css';

function Client() {

  return (
    <>
    {/* client section */}

    <section class="client_section layout_padding">
        <div class="container ">
          <div class="heading_container heading_center">
            <h2>
              What Our Users Say
            </h2>
          </div>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="box">
                  <div class="img-box">
                    <img src="assests/images/t1.jpg" alt="User Image" />
                  </div>
                  <div class="detail-box">
                    <h4>
                      John Doe
                    </h4>
                    <p>
                      "I had an amazing experience using this e-auction platform. The bidding process was seamless and I got a great deal on a vintage watch!"
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="box">
                  <div class="img-box">
                    <img src="assests/images/t2.jpg" alt="User Image" />
                  </div>
                  <div class="detail-box">
                    <h4>
                      Jane Smith
                    </h4>
                    <p>
                      "This e-auction site is fantastic! I was able to sell my antique furniture quickly and for a great price. Highly recommend!"
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="box">
                  <div class="img-box">
                    <img src="assests/images/t3.jpg" alt="User Image" />
                  </div>
                  <div class="detail-box">
                    <h4>
                      Michael Brown
                    </h4>
                    <p>
                      "The customer service is top-notch. They helped me every step of the way and ensured my transactions were secure and easy."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel_btn-box">
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* end client section */}

    </>
  );
}
export default Client;