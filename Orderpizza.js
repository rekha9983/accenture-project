import React ,{useState, useEffect } from "react";
import axios from "axios";
import "./Orderpizza.css"
function Orderpizza() {
    const [data, setMyData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/pizza").then((res) => setMyData(res.data));
    }, []);
    return (
        <>
            <div className="outline">
                <div className="grid">
                    {data.map((post) => {
                        const { id, type, price, name, image, description, ingredients, topping } = post;
                        return <div className="b" key={id}>
                            <div className="card">
                                <img src={image} alt='logo' />
                                <button className="btn btn-warning">Add to cart</button>
                            </div>
                            <div className="dish-details">
                                <h5>{name}</h5>
                                <h5>{type}</h5>
                                <h6>₹{price}.00</h6>
                                {/* <button style={{width:"20px",height:"20px"}} className={(type=='veg'? "btn btn-success": 'btn btn-danger')} type="button"></button> */}
                            </div>
                            <div className="recipies">
                                <h5>Description :</h5>
                                <p>{description}</p>
                                <h6>Ingredient : </h6>
                                <p>{ingredients}</p>
                                <h6>Topping :</h6>
                                <p>{topping}</p>
                            </div>
                        </div>
                    })}
                </div>
                <p className="txt">Copyrights @ 2017 Pizzeria. All rights reserved</p>
            </div>
        </>
    )
}
export default Orderpizza;

   
