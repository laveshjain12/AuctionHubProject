import './About.css';

function About (){
  return (  <>
 {/* About section */}

 <section class="about_section layout_padding">
 <div class="container">
   <div class="row">
     <div class="col-md-6 px-0">
       <div class="img_container">
         <div class="img-box">
           <img src="assests/images/hero.png" alt="" />
         </div>
       </div>
     </div>
     <div class="col-md-6 px-0">
       <div class="detail-box">
         <div class="heading_container ">
           <h2>
             Who Are We?
           </h2>
         </div>
         <p>
           Welcome to About E-Auction the premier destination for online auctions. We connect buyers and sellers from around the world, providing a secure and dynamic platform for bidding on a wide range of products. Whether you're looking for rare collectibles, electronics, or fashion items, our auctions offer something for everyone.
         </p>
         <p>
           Our mission is to make online auctions accessible, transparent, and enjoyable. With advanced bidding systems, real-time updates, and secure payment gateways, we ensure a seamless auction experience for all our users.
         </p>

         <div class="btn-box">
           <a href="">
             Read More
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
</section>

{/* end about section */}

      

  </>
  );

}
 export  default About;