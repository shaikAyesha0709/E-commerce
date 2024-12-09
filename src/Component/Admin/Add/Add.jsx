import React from 'react'
import Nav from '../Nav/Nav'
import "./Add.css"
import { useState } from 'react';

const Add= ({ onAddItem }) => {
            const [item, setItem] = useState({
              image: '',
              brand: '',
              name: '',
              category: '',
              price: '',
              discount: '',
            });
          
            const handleChange = (e) => {
              setItem({ ...item, [e.target.name]: e.target.value });
            };
          
            const handleFileChange = (e) => {
              setItem({ ...item, image: URL.createObjectURL(e.target.files[0]) });
            };
          
            const handleSubmit = (e) => {
              e.preventDefault();
              onAddItem(item);
              setItem({ image: '', brand: '', name: '', category: '', price: '', discount: '' });
            };
      
  return (
    <div>
      <Nav></Nav>
      <form className="add-item-form" onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
      <input type="file" name="image" onChange={handleFileChange} required />
      <input type="text" name="brand" placeholder="Brand" value={item.brand} onChange={handleChange} required />
      <input type="text" name="name" placeholder="Name" value={item.name} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={item.category} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={item.price} onChange={handleChange} required />
      <input type="number" name="discount" placeholder="Discount" value={item.discount} onChange={handleChange} />
      <button type="submit">Add Item</button>
    </form>
    </div>
  )
}

export default Add