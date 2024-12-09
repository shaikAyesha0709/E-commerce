import React ,{useState} from 'react'
import "./Women.css"
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../redux/wishlistActions';
import { addToCart } from '../../redux/cartActions'; 
import { CiHeart } from "react-icons/ci";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Women = () => {
      const [liked, setLiked] = useState(new Array(20).fill(false));
      const dispatch=useDispatch()

       const handleLikeClick = (index, item) => {
        const newLiked = [...liked];
        newLiked[index] = !newLiked[index];
        setLiked(newLiked);

        if (!liked[index]) {
            dispatch(addToWishlist(item));
        }
      }
      const handleAddToCart = (item) => {
        dispatch(addToCart(item));  // Dispatching the action to add the item to the cart
    };
      const data=[
                  {
                    "id":"11",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "id":"12",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {"id":"13",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "id":"14",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "id":"15",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "id":"16",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "id":"17",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "id":"18",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "id":"19",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "id":"20",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },
                  {
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240715/qJQj/669550011d763220fab6427b/-473Wx593H-700198539-beige-MODEL.jpg",
                    "alt": "t1",
                    "price": 3000,
                    "name": "Nike",
                    "discount": "25%"
                  },

                  
      ]
  return (
    <div>
      <Navbar></Navbar>
      <div className='Women'>
            <div className="Women-quote">
                  <h1>WOMEN'S SNEAKERS</h1>
                  <p>Stride confidently with our exclusive women's sneakers collection. Elevate your everyday ensemble with a perfect fusion of elegance, comfort, and top-tier design. Whether you're conquering the city streets or powering through a workout, our sneakers are crafted to keep you stylish and strong. Find the pair that complements your pace and makes every step a statement.</p>
            </div>
      <div className="Women-images">
        {data.map((item, index) => (
          <div className="Women-container" key={index}>
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

export default Women