import React from 'react'
import "./Body.css"
import Navbar from '../Navbar/Navbar'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Footer/Footer';
import Tranding from '../Tranding/Tranding';
import { IoIosPricetags } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import { MdHighQuality } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";

const images = [
    "https://wallpaperaccess.com/full/1252149.jpg",
    "https://c4.wallpaperflare.com/wallpaper/816/770/388/jordan-fly-wade-nike-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/263/922/433/shoes-jumpman-wallpaper-preview.jpg",
    "https://wallpaperaccess.com/full/4511138.jpg",
    "https://wallpaperaccess.com/full/8496547.jpg",
    "https://wallpaperaccess.com/full/5379742.jpg"
];

const Body = () => {

      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
        };

  return (
    <div>
        <Navbar></Navbar>
      
      <div className="slider-container">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`slide-${index}`} className="slider-image" />
                    </div>
                ))}
            </Slider>
        </div>
        <div className="line"></div>
        <div className="info-slider">
                <div className="info-items">
                    <div className="info-item">Best Price <IoIosPricetags /></div>
                    <div className="info-item">Best Discount <RiDiscountPercentFill /></div>
                    <div className="info-item">Best Quality <MdHighQuality /></div>
                    <div className="info-item">Free Delivery <TbTruckDelivery /></div>
                    <div className="info-item">Customer Support <RiCustomerService2Fill /></div>
                </div>
            </div>
            <div className="line"></div>
        <Tranding></Tranding>
        <Footer></Footer>
    </div>
  )
}

export default Body