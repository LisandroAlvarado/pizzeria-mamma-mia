// Hook para acceder a contextos globales
import { useContext, useState } from "react";

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

    // Estado para el mesaje
    const [mensaje, setMensaje] = useState("");

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

    // Función para realizar el checkout (compra del carrito)
    const handleCheckout = async () => {
        try {
            // Realiza una petición POST al backend para procesar la compra
            const response = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST", // Método HTTP para enviar datos

                headers: {
                    // Indica que el cuerpo de la petición está en formato JSON
                    "Content-Type": "application/json",

                    // Envía el token JWT para autenticar al usuario
                    Authorization: `Bearer ${token}`
                },

                // Se envía el carrito en el body convertido a JSON
                body: JSON.stringify({
                    cart: cart
                })
            });

            // Verifica si la respuesta del servidor es correcta (status 200-299)
            if (!response.ok) {
                // Si hay un error en la respuesta, se lanza una excepción
                throw new Error("Error en la compra");
            }

            // Si todo sale bien, se muestra un mensaje de éxito al usuario
            setMensaje("Compra realizada con éxito 🎉");

        } catch (error) {
            // Si ocurre cualquier error (red, backend, token, etc.)
            // se muestra un mensaje de error al usuario
            setMensaje("Error al procesar la compra ❌");
        }
    };

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

            {mensaje && <p className="mensaje">{mensaje}</p>}

            {/* 
              Botón de pago:
              - Se deshabilita si el usuario NO está logueado
              - Cambia estilo visual con clase "disabled"
            */}
            <button
                className={`btn-pay ${!token ? "disabled" : ""}`}
                disabled={!token}
                onClick={handleCheckout}
            >
                Pagar
            </button>
        </div>
    );
};

export default Cart;