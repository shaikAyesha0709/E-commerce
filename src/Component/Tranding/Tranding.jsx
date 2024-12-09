import React from 'react';
import "./Tranding.css";
import { addToCart } from '../../redux/cartActions'; 
import { useDispatch } from 'react-redux';

const Tranding = () => {
  const dispatch=useDispatch()


  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  }
  const trendingData = [
    {
      
      "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b7912dd18a34ac7aeecadde016751ae_9366/YEEZY_BOOST_700_Green_GZ2002_01_standard.jpg",
      "alt": "t1",
      "price": 1500,
      "name": "YEEZY BOOST 700",
      "discount": "10%"
    },
    {
      "src": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/698e41ae0196408eb16aa7fb008046ad_9366/Gazelle_Shoes_Blue_BB5478_01_standard.jpg",
      "alt": "t2",
      "price": 1250,
      "name": "Gazelle Shoes",
      "discount": "15%"
    },
    {
      "src": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/93d5cb72-ca67-4269-bbb8-44e3d4e3c735/JORDAN+TATUM+2+%28TD%29.png",
      "alt": "t3",
      "price": 900,
      "name": "Jordan Tatum 2",
      "discount": "5%"
    },
    {
      "src": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b4e97fe4-b5e8-4c5f-9d6c-74ec001f62aa/NIKE+DUNK+LOW+RETRO+SE.png",
      "alt": "t4",
      "price": 1750,
      "name": "Nike Dunk Low",
      "discount": "20%"
    },
    {
      "src": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379438/07/sv03/fnd/IND/fmt/png/Conduct-Pro-Unisex-Running-Shoes",
      "alt": "t5",
      "price": 1400,
      "name": "Puma Conduct Pro",
      "discount": "25%"
    }
  ];

  return (
    <div className="tranding">
      <div className="text"><p>Trending Now</p></div>
      <div className="images">
        {trendingData.map((item, index) => (
          <div className="image-container" key={index}>
            <img src={item.src} alt={item.alt} />
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
  );
}

export default Tranding;
