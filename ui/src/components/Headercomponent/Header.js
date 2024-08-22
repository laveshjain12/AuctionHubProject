import './Header.css';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import Auth from '../Authcomponent/Auth.js';

function Header() {

  const [ HeaderContent , setHeaderContent ] = useState();
  
  useEffect(()=>{
    if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")    
    {
        setHeaderContent(<>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <a class="nav-item nav-link active"><Link style={{"color":"white"}}to="/admin">Admin Home</Link></a>
                    <a class="nav-item nav-link"><Link style={{"color":"white"}} to="/manageusers">Manageusers</Link></a>
                    <div class="">
                        {/* <a href="#" class=""  style={{"color":"#f95c37"}}>Settings</a> */}
                        <div class=" rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a class=""><Link style={{"color":"white"}}  to="/cpadmin">Change Password</Link></a>
                            <br />
                            
                            <a class=""><Link style={{"color":"white"}} to="/epadmin">Edit Profile</Link></a>
                        </div>
                    </div>
                    <div class="">
                        {/* <a href="#"  style={{"color":"#f95c37"}}>Manage Category</a> */}
                        <div class="rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a class=""><Link  style={{"color":"white"}} to="/addcategory">Add Category</Link></a>
                            <br />
                            
                        
                            <a class=""><Link  style={{"color":"white"}} to="/addsubcategory">Add SubCategory</Link></a>
                        </div>
                    </div>
                </div>
                <a class="btn btn-primary rounded-pill px-3 d-none d-lg-block" ><Link to="/logout" style={{"color":"white"}} >Logout</Link><i class="fa fa-arrow-right ms-3"></i></a>
            </div>
        </>);
      }
      else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")    
      {
          setHeaderContent(<>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                  <div class="navbar-nav mx-auto">
                      <a class="nav-item nav-link active"><Link to="/user">User Home</Link></a>
                      <a class="nav-item nav-link"><Link to="/viewpc">View Product</Link></a>
                      <a class="nav-item nav-link"><Link to="/addproduct">Add Product</Link></a>
                      <a class="nav-item nav-link"><Link to="/viewbidp">View Bid Product</Link></a>
                  </div>
                  <a class="btn btn-primary rounded-pill px-3 d-none d-lg-block" ><Link to="/logout" style={{"color":"white"}} >Logout</Link><i class="fa fa-arrow-right ms-3"></i></a>
              </div>
          </>);
      }
      else
      { 
      setHeaderContent(<><div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
      <ul class="navbar-nav  ">
        <li class="nav-item active">
          <a class="nav-link">
          
            <span class="sr-only">(current)</span>
            <Link to="/">Home</Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"> <Link to="/about">About</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to="/Service">Services</Link> </a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" ><Link to="/Register">Register</Link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to="/contact">Contact us</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to="/login">login</Link> </a>
        </li>
      </ul>
    </div></>); 
    }
  })

  return (
    <>
      <div class="hero_area">
        {/* header section strats */}
        <div class="hero_bg_box">
          <div class="img-box">
            <img src="assests/images/looo.jpg" width="500" />

          </div>
        </div>

        <header class="header_section">
          <div class="header_top">
            <div class="container-fluid">
              <div class="contact_link-container">
                <a href="" class="contact_link1">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>
                    Abhay Prashal
                  </span>
                </a>
                <a href="" class="contact_link2">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>
                    Call : +01 1234567890
                  </span>
                </a>
                <a href="" class="contact_link3">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>
                    support@eauction.com
                  </span>
                </a>
              </div>
            </div>
          </div>



          <div class="header_bottom">
            <div class="container-fluid">
              <nav class="navbar navbar-expand-lg custom_nav-container">
                <a class="navbar-brand" href="index.html">
                  <span style={{
                    color: 'white',
                    fontSize: '36px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      backgroundColor: 'rgb(98, 53, 53)',
                      padding: '8px 8px',
                      borderRadius: '8px',
                      marginRight: '5px'
                    }}>
                      <img src="assests/images/biding.jpg" alt="E-auction Logo" style={{ width: '100px', height: 'auto' }} />
                    </span>
                    <span id="eAuctionText" style={{
                      color: '#c0ffee',
                      cursor: 'pointer',
                      padding: '8px 8px',
                      borderRadius: '8px'
                    }} onmouseover="this.style.backgroundColor='black'; this.style.color='white'" onmouseout="this.style.backgroundColor='rgb(98, 53, 53)'; this.style.color='#c0ffee'">E-auction</span>
                  </span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class=""></span>
                </button>
                {HeaderContent}

                
              </nav>
            </div>
          </div>
        </header>
        {/* end header section */}
        {/* slider section */}
        <section class=" slider_section ">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="row">
                    <div class="col-md-7">
                      <div class="detail-box">
                        <h1>
                           Welcome to Exclusive Online Bid for <br />
                          <span>
                            Unbeatable Deals!

                          </span>
                        </h1>
                        <p>
                          Participate in bid and get hottest gadgets on your Ticket Cost.
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn-1"> SignUp Now </a>
                          <a href="" class="btn-2">View Auction</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container">
                  <div class="row">
                    <div class="col-md-7">
                      <div class="detail-box">
                        <h1>
                        Welcome to  Exclusive Online Bid for <br />
                          <span>
                            Unbeatable Deals!

                          </span>
                        </h1>
                        <p>
                          Participate in bid and get hottest gadgets on your Ticket Cost.
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn-1"> SignUp Now</a>
                          <a href="" class="btn-2">View Auction</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container">
                  <div class="row">
                    <div class="col-md-7">
                      <div class="detail-box">
                        <h1>
                        Welcome to Exclusive Online Bid for <br />
                          <span>
                            Unbeatable Deals!

                          </span>
                        </h1>
                        <p>
                          Participate in bid and get hottest gadgets on your Ticket Cost.</p>
                        <div class="btn-box">
                          <a href="" class="btn-1"> SignUp Now </a>
                          <a href="" class="btn-2">View Auction</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container idicator_container">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>

    </>
  );
}

export default Header;