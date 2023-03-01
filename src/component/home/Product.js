import React,{useState, useEffect} from 'react'
import './Product.css'
import starImage from '../assets/Star.png'

import {useDispatch} from 'react-redux'
import {inNum} from '../../Action/index'

function Product() {

const dispatch = useDispatch();

const [user, setUser] = useState([]);
const productArray = [];

const getUser = async () => {
    console.log(user);
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        for (const prod in data) {
          productArray.push({
            id: data[prod].id,
            img: data[prod].productImage,
            name: data[prod].productName,
            oldPrice: data[prod].oldPrice,
            newPrice: data[prod].newPrice,
          });
        }
        console.log(productArray);
        setUser(productArray);
        
      });
  };
  useEffect(() => {
    getUser();
  }, []);



  return (
    <div className="product-container">
      <div className="product-heading">Products</div>

      <div className="product-list">
        {user &&
          user.map((item) => (
            <div key={item.id} className="product-item">
              <img className="product-image" src={item.img} alt={item.name} />
              <div className="item-body">
                <p className="phoneName">{item.name}</p>
                <div className="star-price-container">
                  <div className="start">
                    <img src={starImage} alt="star" />
                    <img src={starImage} alt="star" />
                    <img src={starImage} alt="star" />
                    <img src={starImage} alt="star" />
                    <img src={starImage} alt="star" />
                   
                  </div>
                  <div className="price">
                    <p className="oldPrice">₹{item.oldPrice}/-</p>
                    <p className="newPrice">₹ {item.newPrice}/-</p>
                  </div>
                </div>
                
                <button className="addToCart" onClick={()=>dispatch(inNum())} > Add to Cart</button>
              </div>             
            </div>
            
            
          ))}
      </div>
    </div>
  )
}

export default Product