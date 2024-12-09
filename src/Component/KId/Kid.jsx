import React ,{useState} from 'react'
import "./Kid.css"
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../redux/wishlistActions';
import { addToCart } from '../../redux/cartActions'; 
import { CiHeart } from "react-icons/ci";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Kid = () => {
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
                    "id":"21",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "id":"22",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "id":"23",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "id":"24",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "id":"25",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "id":"26",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "id":"27",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "id":"28",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "id":"29",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "id":"30",
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },
                  {
                    "src": "https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg",
                    "alt": "t1",
                    "price": 1000,
                    "name": "Puma",
                    "discount": "50%"
                  },

                  
      ]
  return (
    <div>
      <Navbar></Navbar>
      <div className='Kid'>
            <div className="Kid-quote">
                  <h1>KID'S SNEAKERS</h1>
                  <p>Let your little ones step into fun with our vibrant kids' shoes collection. Combining playful designs with unmatched comfort and durability, these shoes are perfect for every adventure, big or small. From the playground to the classroom, our shoes are crafted to keep up with their energy while keeping them stylish. Find the perfect pair that sparks joy in every step.</p>
            </div>
      <div className="Kid-images">
        {data.map((item, index) => (
          <div className="Kid-container" key={index}>
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

export default Kid