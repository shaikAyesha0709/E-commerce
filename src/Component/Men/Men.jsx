import React ,{useState} from 'react'
import "./Men.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartActions'; 
import { addToWishlist } from '../../redux/wishlistActions';
import { CiHeart } from "react-icons/ci";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Men = () => {
      const [liked, setLiked] = useState(new Array(20).fill(false));
      const dispatch=useDispatch()

       const handleLikeClick = (index, item) => {
        const newLiked = [...liked];
        newLiked[index] = !newLiked[index];
        setLiked(newLiked);

        if (!liked[index]) {
            dispatch(addToWishlist(item));
        }

      
    };
    const handleAddToCart = (item) => {
      dispatch(addToCart(item));  
  };
      const data=[
                  {
                    "id":"1",
                    "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                    "alt": "t1",
                    "price": 944,
                    "name": "YEEZY BOOST 700",
                    "discount": "5%"
                  },
                  {
                    "id":"2",
                    "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                    "alt": "t2",
                    "price": 1263,
                    "name": "Gazelle Shoes",
                    "discount": "25%"
                  },
                  {
                    "id":"3",
                    "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                    "alt": "t3",
                    "price": 965,
                    "name": "Jordan Tatum 2",
                    "discount": "10%"
                  },
                  {
                    "id":"4",
                    "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                    "alt": "t4",
                    "price": 973,
                    "name": "Nike Dunk Low",
                    "discount": "20%"
                  },
                  {
                    "id":"5",
                    "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                    "alt": "t5",
                    "price": 916,
                    "name": "Puma Conduct Pro",
                    "discount": "10%"
                  },
                  {
                    "id":"6",
                    "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                    "alt": "t6",
                    "price": 1589,
                    "name": "Air Jordan 1",
                    "discount": "30%"
                  },
                  {
                    "id":"7",
                    "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                    "alt": "t7",
                    "price": 1243,
                    "name": "Adidas UltraBoost",
                    "discount": "10%"
                  },{
                    "id":"8",
                        "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                        "alt": "t7",
                        "price": 1243,
                        "name": "Adidas UltraBoost",
                        "discount": "10%"
                      },{
                        "id":"9",
                        "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                        "alt": "t7",
                        "price": 1243,
                        "name": "Adidas UltraBoost",
                        "discount": "10%"
                      },{
                        "id":"10",
                        "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                        "alt": "t7",
                        "price": 1243,
                        "name": "Adidas UltraBoost",
                        "discount": "10%"
                      },{
                        "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                        "alt": "t7",
                        "price": 1243,
                        "name": "Adidas UltraBoost",
                        "discount": "10%"
                      },{
                        "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                        "alt": "t7",
                        "price": 1243,
                        "name": "Adidas UltraBoost",
                        "discount": "10%"
                      },{
                        "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                        "alt": "t7",
                        "price": 1243,
                        "name": "Adidas UltraBoost",
                        "discount": "10%"
                      },{
                        "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                        "alt": "t7",
                        "price": 1243,
                        "name": "Adidas UltraBoost",
                        "discount": "10%"
                      },{
                        "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                        "alt": "t7",
                        "price": 1243,
                        "name": "Adidas UltraBoost",
                        "discount": "10%"
                      },{
                        "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
                        "alt": "t7",
                        "price": 1243,
                        "name": "Adidas UltraBoost",
                        "discount": "10%"
                      },
                  
      ]
  return (
    <div>
      <Navbar></Navbar>
      <div className='Men'>
            <div className="Men-quote">
                  <h1>MEN'S SNEAKERS</h1>
                  <p>Step into style with our exclusive men's sneakers collection. Elevate your everyday look with the perfect blend of comfort, performance, and cutting-edge design. Whether you're hitting the streets or the gym, our sneakers are crafted to keep you ahead in both fashion and function. Discover the pair that defines your stride and makes every step count.</p>
            </div>
      <div className="Men-images">
        {data.map((item, index) => (
          <div className="Men-container" key={index}>
            <img src={item.src} alt={item.alt} />
            <button
                className={`like ${liked[index] ? 'liked' : ''}`}
                onClick={() => handleLikeClick(index,item)}
              >
                <CiHeart />
              </button>
            <div className="details">
              <div className="name">{item.name}</div>
              <div className="price">&#8377;{item.price}</div>
              <div className="discount">Discount: {item.discount}</div>
            </div>
            <button 
            className='add-to-cart'
            onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
          
        ))}
      </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Men