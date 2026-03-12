import { pizzaCart } from "../pizzas";
import { useState } from "react";
import "./Cart.css";

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const total = cart.reduce(
        (total, pizza) => total + pizza.price * pizza.count,
        0
    );

    return (
        <div className="cart-container">
            <h2>Detalles del pedido:</h2>

            {cart.map((pizza) => (
                <div className="cart-item" key={pizza.id}>
                    <img src={pizza.img} className="pizza-img" />

                    <div className="pizza-name">
                        <h4>{pizza.name}</h4>
                    </div>

                    <p className="pizza-price">
                        ${pizza.price.toLocaleString("es-CL")}
                    </p>

                    <div className="pizza-controls">
                        <button className="btn-minus">-</button>
                        <span>{pizza.count}</span>
                        <button className="btn-plus">+</button>
                    </div>
                </div>
            ))}

            <h2 className="total">
                Total: ${total.toLocaleString("es-CL")}
            </h2>

            <button className="btn-pay">Pagar</button>
        </div>
    );
};

export default Cart;