import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Product from "./Product";
import Products from "./Products";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Adjust speed as needed
        slidesToShow: 3, // Show three slides at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000, // Adjust autoplay speed as needed
        fade: true, // Enable fade effect
        cssEase: 'linear', // Use linear easing for smoother transition
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div className="card bg-white text-white border-0">
                        <img src={require('./home.png')} className="card-img" alt="Background" height="300px" />
                        <div className="card-img-overlay d-flex flex-column justify-content-center">
                            <div className="container">
                            <h6 className="card-title display-3 fw-bolder mb-0" style={{ color: 'black' }}>NEW STORE</h6>
                            <br></br>

                                <p className="card-text lead fs-2"style={{ color: 'white' }}>CHECK OUT ALL TRENDS  ....</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={require('./home1.jpg')} className="card-img" alt="Background" height="300px" />
                </div>
                <div>
                    <img src={require('./home2.jpg')} className="card-img" alt="Background" height="300px" />
                </div>
                <div>
                    <img src={require('./home3.jpg')} className="card-img" alt="Background" height="300px" />
                </div>
                {/* Add more slides here if needed */}
            </Slider>
            <div style={{ flex: 1, backgroundColor: 'LightGray' }}>{/* Adjust the margin top as needed */}
                <Products />
            </div>
        </div>
    );
}

export default Home;
