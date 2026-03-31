import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import "./Cart.css";

const Cart = () => {
    const { cart, sumaCantidad, restaCantidad } = useContext(CartContext)

    const { token } = useContext(UserContext);

    const total = cart.reduce(
        (total, pizza) => total + pizza.price * pizza.cantidad,
        0
    );

    if (cart.length === 0) {
        return <p>Carrito vacío</p>
    }

    return (
        <div className="cart-container">
            <h2>Detalles del pedido:</h2>

            {cart.map((pizza) => (
                <div className="cart-item" key={pizza.id}>
                    <img src={pizza.img} alt={pizza.name} className="pizza-img" />

                    <div className="pizza-name">
                        <h4>{pizza.name}</h4>
                    </div>

                    <p className="pizza-price">
                        ${pizza.price.toLocaleString("es-CL")}
                    </p>

                    <div className="pizza-controls">
                        <button onClick={() => restaCantidad(pizza.id)} className="btn-minus">-</button>
                        <span>{pizza.cantidad}</span>
                        <button onClick={() => sumaCantidad(pizza.id)} className="btn-plus">+</button>
                    </div>
                </div>
            ))}

            <h2 className="total">
                Total: ${total.toLocaleString("es-CL")}
            </h2>

            <button
                className={`btn-pay ${!token ? "disabled" : ""}`}
                disabled={!token}
            >
                Pagar
            </button>
        </div>
    );
};

export default Cart;