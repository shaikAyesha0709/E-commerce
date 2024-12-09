import React from 'react'
import Nav from '../Nav/Nav'
import "./View.css"

const View = () => {

      const items = [
            {
              image: 'https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg',
              brand: 'Nike',
              name: 'Air Max 90',
              category: 'Men',
              price: 120,
              discount: 10
            },
            {
              image: 'https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg',
              brand: 'Adidas',
              name: 'Ultraboost',
              category: 'Women',
              price: 180,
              discount: 15
            },
            {
              image: 'https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg',
              brand: 'Puma',
              name: 'RS-X',
              category: 'Kids',
              price: 70,
              discount: 5
            },
            {
              image: 'https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg',
              brand: 'Puma',
              name: 'RS-X',
              category: 'Kids',
              price: 70,
              discount: 5
            },
            {
              image: 'https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg',
              brand: 'Puma',
              name: 'RS-X',
              category: 'Kids',
              price: 70,
              discount: 5
            },
            {
            image: 'https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg',
            brand: 'Puma',
            name: 'RS-X',
            category: 'Kids',
            price: 70,
            discount: 5
          },
          {
            image: 'https://assets.ajio.com/medias/sys_master/root/20240713/dRaA/6691d80d1d763220fa780c81/-1117Wx1400H-700188302-black-MODEL.jpg',
            brand: 'Puma',
            name: 'RS-X',
            category: 'Kids',
            price: 70,
            discount: 5
          }
          ];
        
  return (
     
    <div> 
      <Nav></Nav>
      <div className="view-items">
      <h2>View Items</h2>
      <table>
        <thead className='head '>
          <tr>
            <th>Image</th>
            <th>Brand</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td><img src={item.image} alt={item.name} width="50" /></td>
              <td>{item.brand}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.discount}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default View