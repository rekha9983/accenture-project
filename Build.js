import axios from "axios";
import React from "react";
import "./Build.css"
import { useState, useEffect } from "react";
function Ingredients() {
    const [info, setInfo] = useState();
    const [price, setprice] = useState(0);
    const handleChange = (checked, newPrice) => {
        checked ? setprice((oldPrice) => oldPrice + newPrice) : setprice((oldPrice) => oldPrice - newPrice)




    };
    useEffect(() => {
        axios.get("http://localhost:5000/ingredients").then((res) => {
            const infodata = res.data;
            setInfo(infodata);
        });
    }, []);
    return (
        <div className="c1">

            <div className="mycontainer">
                <table className="table table-striped">
                    <tbody>
                        {info?.map((datas) => {
                            return (
                                <tr key={datas.id}>
                                    <td>
                                        <img src={datas.image} height={100} width={150} alt="" />
                                    </td>
                                    <td className="fw-bold">
                                        {datas.tname} ₹{datas.price}
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id={datas.id}

                                                onChange={(e) => handleChange(e.target.checked, datas.price)}
                                            />
                                            <label className="form-check-label text-warning" htmlFor="flexCheckDefault">
                                                Add
                                            </label>
                                        </div>
                                    </td>
                                </tr>

                            );

                        })}

                    </tbody>

                </table>
                <h1 className="pricecount">
                    Total Price : ={price}
                    </h1>

            </div>
        </div>

    );

}



export default Ingredients;