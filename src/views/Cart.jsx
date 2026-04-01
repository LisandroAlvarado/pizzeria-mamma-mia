// Hook para acceder a contextos globales
import { useContext } from "react";

// Contextos
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

// Estilos del componente
import "./Cart.css";

/**
 * Componente Cart
 * Muestra los productos del carrito,
 * permite modificar cantidades y calcula el total
 */
const Cart = () => {
    // Estado global del carrito y funciones para modificarlo
    const { cart, sumaCantidad, restaCantidad } = useContext(CartContext)

    // Estado de autenticación del usuario
    const { token } = useContext(UserContext);

    /**
   * Calcula el total a pagar
   * sumando precio * cantidad de cada pizza
   */
    const total = cart.reduce(
        (total, pizza) => total + pizza.price * pizza.cantidad,
        0
    );

    /**
  * Si el carrito está vacío, mostramos mensaje
  * y evitamos renderizar el resto del componente
  */
    if (cart.length === 0) {
        return <p>Carrito vacío</p>
    }

    return (
        <div className="cart-container">
            <h2>Detalles del pedido:</h2>

            {/* Recorre los productos del carrito */}
            {cart.map((pizza) => (
                <div className="cart-item" key={pizza.id}>

                    {/* Imagen del producto */}
                    <img src={pizza.img} alt={pizza.name} className="pizza-img" />

                    {/* Nombre de la pizza */}
                    <div className="pizza-name">
                        <h4>{pizza.name}</h4>
                    </div>

                    {/* Precio formateado */}
                    <p className="pizza-price">
                        ${pizza.price.toLocaleString("es-CL")}
                    </p>

                    {/* Controles para modificar cantidad */}
                    <div className="pizza-controls">
                        <button onClick={() => restaCantidad(pizza.id)} className="btn-minus">-</button>
                        <span>{pizza.cantidad}</span>
                        <button onClick={() => sumaCantidad(pizza.id)} className="btn-plus">+</button>
                    </div>
                </div>
            ))}

            {/* Total final */}
            <h2 className="total">
                Total: ${total.toLocaleString("es-CL")}
            </h2>

            {/* 
              Botón de pago:
              - Se deshabilita si el usuario NO está logueado
              - Cambia estilo visual con clase "disabled"
            */}
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