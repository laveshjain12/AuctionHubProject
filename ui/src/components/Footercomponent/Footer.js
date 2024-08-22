import './Footer.css';

function Footer (){
  return (  <>
  {/* info section */}
  <section class="info_section ">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="info_logo">
                <a class="navbar-brand" href="index.html">
                  <span>
                    E-Auction
                  </span>
                </a>
                <p>
                  Your trusted platform for online auctions. Bid, buy, and sell with confidence.
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info_links">
                <h5>
                  Useful Links
                </h5>
                <ul>
                  <li>
                    <a href="about.html">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="auctions.html">
                      Current Auctions
                    </a>
                  </li>
                  <li>
                    <a href="faq.html">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      Contact Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info_info">
                <h5>
                  Contact Us
                </h5>
              </div>
              <div class="info_contact">
                <a href="https://www.google.com/maps/place/Your+Address" class="">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>
                    123 Auction St, E-City, CA 98765
                  </span>
                </a>
                <a href="tel:+011234567890" class="">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>
                    Call : +01 1234567890
                  </span>
                </a>
                <a href="mailto:support@eauction.com" class="">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>
                    support@eauction.com
                  </span>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info_form ">
                <h5>
                  Newsletter
                </h5>
                <form action="#">
                  <input type="email" placeholder="Enter your email" />
                  <button>
                    Subscribe
                  </button>
                </form>
                <div class="social_box">
                  <a href="https://www.facebook.com/eauction">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.twitter.com/eauction">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.youtube.com/eauction">
                    <i class="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.instagram.com/eauction">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end info_section */}




      {/* footer section */}
      <footer class="container-fluid footer_section">
        <p>
          &copy; <span id="currentYear"></span> All Rights Reserved. Design by
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </footer>
      {/* footer section */}

  </>
);
}
export default Footer;