import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BoxArrowInDown, BoxArrowInUp, Geo } from "react-bootstrap-icons";

const Dashboard = () => {

    const [count, setCount] = useState(0);

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const setting = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
      };

      const settinges = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 4000,
      };

    return (
        <section>
            <div id="dashboard">
                <div className="col-12 d-flex mb-5">
                    <div className="col-8">
                        <div className="dashboard-slider">
                            <Slider {...settings}>
                                <div className="dashboard-img">
                                    <img src="../../../../public/dash1.png" alt="dash1" />
                                </div>
                                <div className="dashboard-img">
                                    <img src="../../../../public/dash2.png" alt="dash2" />
                                </div>
                                <div className="dashboard-img">
                                    <img src="../../../../public/dash3.png" alt="dash3" />
                                </div>
                            </Slider>
                        </div>
                        <div className="category-slider col-12 mt-4">
                            <div className="category-sub">
                                <h6 className="m-0">Pizza</h6>
                            </div>
                            <Slider {...setting}>
                                <div className="col-4 category-img-main">
                                    <div className="category-img col-12">
                                        <div className="category-i-m d-flex justify-content-center">
                                            <img src="../../../../public/cupcake.png" alt="cupcake" />
                                        </div>
                                        <div className="category-subtext">
                                            <h6 className="text-center">Bakery</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 category-img-main">
                                    <div className="category-img col-12">
                                        <div className="category-i-m d-flex justify-content-center">
                                            <img src="../../../../public/burger.png" alt="burger" />
                                        </div>
                                        <div className="category-subtext">
                                            <h6 className="text-center">Burger</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 category-img-main">
                                    <div className="category-img col-12">
                                        <div className="category-i-m d-flex justify-content-center">
                                            <img src="../../../../public/soda.png" alt="soda" />
                                        </div>
                                        <div className="category-subtext">
                                            <h6 className="text-center">Beverage</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 category-img-main">
                                    <div className="category-img col-12">
                                        <div className="category-i-m d-flex justify-content-center">
                                            <img src="../../../../public/chicken-leg.png" alt="chicken-leg" />
                                        </div>
                                        <div className="category-subtext">
                                            <h6 className="text-center">Chicken</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 category-img-main">
                                    <div className="category-img col-12">
                                        <div className="category-i-m d-flex justify-content-center">
                                            <img src="../../../../public/pizza.png" alt="pizza" />
                                        </div>
                                        <div className="category-subtext">
                                            <h6 className="text-center">Pizza</h6>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="category-slider col-12 mt-4">
                            <div className="category-sub">
                                <h6 className="m-0">Recent Order</h6>
                            </div>
                            <Slider {...settinges}>
                                <div className="col-4 recent-img-main">
                                    <div className="recent-img col-12">
                                        <div className="recent-i-m d-flex justify-content-center">
                                            <img src="../../../../public/recent1.png" alt="recent1" />
                                        </div>
                                        <div className="category-subtext">
                                            <p className="category-star m-0 mb-1">
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span className="white-star">&#x2605;</span>
                                            </p>
                                            <h6 className="mb-2">Panner burger</h6>
                                            <h3 className="m-0">$5.59`</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 recent-img-main">
                                    <div className="recent-img col-12">
                                        <div className="recent-i-m d-flex justify-content-center">
                                            <img src="../../../../public/recent2.png" alt="recent2" />
                                        </div>
                                        <div className="category-subtext">
                                            <p className="category-star m-0 mb-1">
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span className="white-star">&#x2605;</span>
                                            </p>
                                            <h6 className="mb-2">Tandoori burger</h6>
                                            <h3 className="m-0">$5.59`</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 recent-img-main">
                                    <div className="recent-img col-12">
                                        <div className="recent-i-m d-flex justify-content-center">
                                            <img src="../../../../public/recent3.png" alt="recent3" />
                                        </div>
                                        <div className="category-subtext">
                                            <p className="category-star m-0 mb-1">
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span className="white-star">&#x2605;</span>
                                            </p>
                                            <h6 className="mb-2">Cheese burger</h6>
                                            <h3 className="m-0">$5.59`</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 recent-img-main">
                                    <div className="recent-img col-12">
                                        <div className="recent-i-m d-flex justify-content-center">
                                            <img src="../../../../public/recent1.png" alt="recent1" />
                                        </div>
                                        <div className="category-subtext">
                                            <p className="category-star m-0 mb-1">
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span className="white-star">&#x2605;</span>
                                            </p>
                                            <h6 className="mb-2">Panner burger</h6>
                                            <h3 className="m-0">$5.59`</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 recent-img-main">
                                    <div className="recent-img col-12">
                                        <div className="recent-i-m d-flex justify-content-center">
                                            <img src="../../../../public/recent2.png" alt="recent2" />
                                        </div>
                                        <div className="category-subtext">
                                            <p className="category-star m-0 mb-1">
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span className="white-star">&#x2605;</span>
                                            </p>
                                            <h6 className="mb-2">Tandoori burger</h6>
                                            <h3 className="m-0">$5.59`</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 recent-img-main">
                                    <div className="recent-img col-12">
                                        <div className="recent-i-m d-flex justify-content-center">
                                            <img src="../../../../public/recent3.png" alt="recent3" />
                                        </div>
                                        <div className="category-subtext">
                                            <p className="category-star m-0 mb-1">
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span className="white-star">&#x2605;</span>
                                            </p>
                                            <h6 className="mb-2">Cheese burger</h6>
                                            <h3 className="m-0">$5.59`</h3>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="category-slider col-12 mt-4">
                            <div className="category-sub">
                                <h6 className="m-0">Popular Dishes</h6>
                            </div>
                            <Slider {...settinges}>
                                <div className="col-4 recent-img-main">
                                    <div className="recent-img col-12">
                                        <div className="recent-i-m d-flex justify-content-center">
                                            <img src="../../../../public/pizza1.png" alt="pizza1" />
                                        </div>
                                        <div className="category-subtext">
                                            <p className="category-star m-0 mb-1">
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span className="white-star">&#x2605;</span>
                                            </p>
                                            <h6 className="mb-2">Pepperoni Pizza</h6>
                                            <h3 className="m-0">$5.59`</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 recent-img-main">
                                    <div className="recent-img col-12">
                                        <div className="recent-i-m d-flex justify-content-center">
                                            <img src="../../../../public/pizza2.png" alt="recent2" />
                                        </div>
                                        <div className="category-subtext">
                                            <p className="category-star m-0 mb-1">
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span className="white-star">&#x2605;</span>
                                            </p>
                                            <h6 className="mb-2">Japan Ramen</h6>
                                            <h3 className="m-0">$5.59`</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 recent-img-main">
                                    <div className="recent-img col-12">
                                        <div className="recent-i-m d-flex justify-content-center">
                                            <img src="../../../../public/pizza3.png" alt="pizza3" />
                                        </div>
                                        <div className="category-subtext">
                                            <p className="category-star m-0 mb-1">
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span className="white-star">&#x2605;</span>
                                            </p>
                                            <h6 className="mb-2">Fried Rice</h6>
                                            <h3 className="m-0">$5.59`</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 recent-img-main">
                                    <div className="recent-img col-12">
                                        <div className="recent-i-m d-flex justify-content-center">
                                            <img src="../../../../public/pizza1.png" alt="pizza1" />
                                        </div>
                                        <div className="category-subtext">
                                            <p className="category-star m-0 mb-1">
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span className="white-star">&#x2605;</span>
                                            </p>
                                            <h6 className="mb-2">Pepperoni Pizza</h6>
                                            <h3 className="m-0">$5.59`</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 recent-img-main">
                                    <div className="recent-img col-12">
                                        <div className="recent-i-m d-flex justify-content-center">
                                            <img src="../../../../public/pizza2.png" alt="recent2" />
                                        </div>
                                        <div className="category-subtext">
                                            <p className="category-star m-0 mb-1">
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span className="white-star">&#x2605;</span>
                                            </p>
                                            <h6 className="mb-2">Japan Ramen</h6>
                                            <h3 className="m-0">$5.59`</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 recent-img-main">
                                    <div className="recent-img col-12">
                                        <div className="recent-i-m d-flex justify-content-center">
                                            <img src="../../../../public/pizza3.png" alt="pizza3" />
                                        </div>
                                        <div className="category-subtext">
                                            <p className="category-star m-0 mb-1">
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span>&#x2605;</span>
                                                <span className="white-star">&#x2605;</span>
                                            </p>
                                            <h6 className="mb-2">Fried Rice</h6>
                                            <h3 className="m-0">$5.59`</h3>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="dashboard-contain-02">
                            <div className="dashboard-balance">
                                <h4>Your Balance</h4>
                                <div className="main-balance">
                                    <h4>Balance</h4>
                                    <h2>$12.000</h2>
                                    <div className="balance-box d-flex p-0 mt-3 mb-2">
                                        <div className="top-up d-flex align-items-center">
                                            <p className="m-0"><BoxArrowInDown/></p>
                                            Top Up
                                        </div>
                                        <div className="top-up d-flex align-items-center">
                                            <p className="m-0"><BoxArrowInUp/></p>
                                            Transfer
                                        </div>
                                    </div>
                                </div>
                                <div className="balance-contain">
                                    <p>Your Address</p>
                                    <div className="d-flex col-12">
                                        <div className="balance-location col-8 d-flex align-items-center">
                                            <div className="main-location d-flex align-items-center">
                                                <p className="m-0"><Geo/></p>
                                                <h4>Elm Street, 23</h4>
                                            </div>
                                        </div>
                                        <div className="col-4 addresh-change d-flex align-items-center justify-content-end">
                                            <a href="#" className="text-end">Change</a>
                                        </div>
                                    </div>
                                    <div className="subtext-balance">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div className="balance-box-main d-flex">
                                        <div className="balance-box">
                                            Add Details
                                        </div>
                                        <div className="balance-box">
                                            Add Note
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="addto-food-main col-12 mt-4">
                                    <div className="addto-food col-12 d-flex mb-3">
                                        <div className="col-3 addto-food-001">
                                            <img src="../../../../public/pizza1.png" alt="pizza1" />
                                        </div>
                                        <div className="col-5 addto-food-002">
                                            <a href="#">Pepperoni Pizza</a>
                                        </div>
                                        <div className="col-4 addto-food-003">
                                            <h4 className="text-end">+$5.59</h4>
                                            <div className="add-prodeuct d-flex justify-content-end">
                                                <button className="button-left" onClick={decrement}>-</button>
                                                <input type="text" value={count}/>
                                                <button className="button-right" onClick={increment}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="addto-food col-12 d-flex mb-3">
                                        <div className="col-3 addto-food-001">
                                            <img src="../../../../public/pizza2.png" alt="pizza2" />
                                        </div>
                                        <div className="col-5 addto-food-002">
                                            <a href="#">Pepperoni Pizza</a>
                                        </div>
                                        <div className="col-4 addto-food-003">
                                            <h4 className="text-end">+$5.59</h4>
                                            <div className="add-prodeuct d-flex justify-content-end">
                                                <button className="button-left" onClick={decrement}>-</button>
                                                <input type="text" value={count}/>
                                                <button className="button-right" onClick={increment}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="addto-food col-12 d-flex mb-3">
                                        <div className="col-3 addto-food-001">
                                            <img src="../../../../public/pizza3.png" alt="pizza3" />
                                        </div>
                                        <div className="col-5 addto-food-002">
                                            <a href="#">Pepperoni Pizza</a>
                                        </div>
                                        <div className="col-4 addto-food-003">
                                            <h4 className="text-end">+$5.59</h4>
                                            <div className="add-prodeuct d-flex justify-content-end">
                                                <button className="button-left" onClick={decrement}>-</button>
                                                <input type="text" value={count}/>
                                                <button className="button-right" onClick={increment}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="addto-food col-12 d-flex mb-3">
                                        <div className="col-3 addto-food-001">
                                            <img src="../../../../public/pizza1.png" alt="pizza1" />
                                        </div>
                                        <div className="col-5 addto-food-002">
                                            <a href="#">Pepperoni Pizza</a>
                                        </div>
                                        <div className="col-4 addto-food-003">
                                            <h4 className="text-end">+$5.59</h4>
                                            <div className="add-prodeuct d-flex justify-content-end">
                                                <button className="button-left" onClick={decrement}>-</button>
                                                <input type="text" value={count}/>
                                                <button className="button-right" onClick={increment}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="food-line col-12">
                                    </div>
                                    <div className="col-12 mt-3">
                                        <div className=".col-6 product-service d-flex">
                                            <p  className="col-6 m-0">Service</p>
                                            <h4 className="col-6 text-end">+$1.00</h4>
                                        </div>
                                        <div className=".col-6 product-total d-flex mt-3">
                                            <h4 className="col-6">Total</h4>
                                            <h3 className="col-6 text-end">$202.00</h3>
                                        </div>
                                        <div className="checkout-main mt-3">
                                            <p className="checkout m-0 text-center">Checkout</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 copyright">
                <p className="m-0 text-center">
                    Copyright © Designed & Developed by <a href="#">DexignLab</a> 2024
                </p>
            </div>
        </section>
    );
};

export default Dashboard;
