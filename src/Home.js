import React from "react";
import "./home.css";
import Product from "./Product";
// import Item from "item";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71cdb+hL6EL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="2021 Newest HP Envy x360 2-in-1 Flip Laptop, 15.6"
            price={1499}
            rating={5}
            image="https://m.media-amazon.com/images/I/61A84fO+myS._AC_SL1029_.jpg"
          />

          <div className="home__row"></div>
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71Xpt00HezL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71TNHPCjTNL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="4903850"
            title="
Oscar de la Renta, Daisy Cloque Short Sleeve Dress"
            price={32}
            rating={4}
            image="https://m.media-amazon.com/images/I/71U0gnwmk6L._AC_SL1500_.jpg"
          />

          <Product
            id="23445930"
            title="
Aquazzura, Nights Pump 95"
            price={1225}
            rating={5}
            image="https://m.media-amazon.com/images/I/61qBQT62gqS._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="
Missoni, Men's Long Sleeve Crewneck Sweater, Multicoloured"
            price={700.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81Zj8RO1-+L._AC_SL1500_.jpg"
          />
        </div>
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61Wp1DHSxJL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="4903850"
            title="8 Pack Ace Armor Shield for Amazon Halo View Watch 2021 Screen Protector Edge to Edge Coverage Scratch Resistant Shield"
            price={9}
            rating={4}
            image="https://m.media-amazon.com/images/I/61N1xp8kUML._AC_SL1000_.jpg"
          />

          <Product
            id="23445930"
            title="Citizen Men's Star Wars Eco-Drive Dress Watch with Stainless Steel Strap, Silver-Tone, 22 (Model: AW1140-51W)"
            price={225}
            rating={5}
            image="https://m.media-amazon.com/images/I/71WDeInQFNL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="APTRO Stylish Wool Trench Coat Top Coat Premium Winter Business Suits"
            price={94.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41lbcWXKp9L._AC_SR320,400_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
