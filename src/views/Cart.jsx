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
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow p-4" style={{ width: "600px" }}>

                <h3 className="text-center mb-4">Detalles del pedido</h3>

                {cart.map((pizza) => (
                    <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2" key={pizza.id}>

                        <div className="d-flex align-items-center gap-3">
                            <img src={pizza.img} alt={pizza.name} width="60" />
                            <h5 className="mb-0">{pizza.name}</h5>
                        </div>

                        <p className="mb-0">
                            ${pizza.price.toLocaleString("es-CL")}
                        </p>

                        <div className="d-flex align-items-center gap-2">
                            <button onClick={() => restaCantidad(pizza.id)} className="btn btn-danger btn-sm">-</button>
                            <span>{pizza.cantidad}</span>
                            <button onClick={() => sumaCantidad(pizza.id)} className="btn btn-primary btn-sm">+</button>
                        </div>
                    </div>
                ))}

                <h4 className="text-end mt-3">
                    Total: ${total.toLocaleString("es-CL")}
                </h4>

                {mensaje && (
                    <div className="alert alert-success text-center mt-3">
                        {mensaje}
                    </div>
                )}

                <button
                    className="btn btn-success w-100 mt-3"
                    disabled={!token}
                    onClick={handleCheckout}
                >
                    Pagar
                </button>
            </div>
        </div>
    );
}

export default Cart;