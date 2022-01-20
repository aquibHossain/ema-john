import React from 'react';

const Footer = () => {
    return (
        <div style={{backgroundColor:"black" ,color:'white'}}>
            <div className="container-fluid px-5">
        <div  className="row py-5">
           <div className="col-sm-12 col-md-6 col-lg-3  text-center text-lg-start">
               <h2 className="fw-bold">Ema John</h2>
               <p className="lh-lg fw-light">We make interiors infused with the spirit of contemporary design and minimalist philosophies.</p>
               <h4 className="mt-4"><i className="fab fa-facebook me-3"></i>
<i className="fab fa-twitter me-3"></i>
<i className="fab fa-youtube me-3"></i>
<i className="fab fa-instagram "></i></h4>
            </div> 
             
            
           <div className="col-sm-12 col-md-6 col-lg-3 text-center ">
           <h4>CONTACT US</h4>
            <p className="lh-lg fw-light">No: 58 A, East Madison Street,<br/>Baltimore, MD,<br/>USA 4508.<br/><i class="fas fa-phone-alt"></i> +880-1908661817 <br /> <i class="far fa-envelope"></i>  support@somemail.com</p>
            </div> 
           
            <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                <h4>SUPPORT</h4>
                    <p className="fw-light">24/7 support</p>
                    <p className="fw-light">Shopify Help Center</p>
                    <p className="fw-light">Shopify Community</p>
                    <p className="fw-light">API documentation</p>
                    <p className="fw-light">Free tools</p>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 ">
                <img className="img-fluid" src="https://www.nicepng.com/png/full/87-870350_credit-cards-all-credit-card-logos.png" alt="" />
            
            </div>
            
        </div>
        </div>
        <div  className=" container border-top text-center ">
            <p className="p-3 ">© 2021 Qode Interactive, All Rights Reserved</p>
        </div>
        
        </div>
    );
};

export default Footer;