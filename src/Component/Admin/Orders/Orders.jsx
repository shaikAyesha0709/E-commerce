import React from 'react'
import Nav from '../Nav/Nav'
import "./Orders.css"

const Orders = () => {
      const orders=[
            {
              "orderId": "1",
              "customerName": "Raman",
              "itemName": "Sneaker X",
              "quantity": 2,
              "totalPrice": "$200"
            },
            {
              "orderId": "2",
              "customerName": "Raghav",
              "itemName": "Sneaker Y",
              "quantity": 1,
              "totalPrice": "$120"
            }
          ]
          
  return (
    <div>
      <Nav></Nav>
      <div className="view-orders">
      <h2>View Customer Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.itemName}</td>
              <td>{order.quantity}</td>
              <td>{order.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Orders