// Herramientas de React para crear contexto y manejar estado
import { createContext, useState } from 'react'

// Creamos el contexto del carrito
export const CartContext = createContext();

/**
 * CartProvider
 * Maneja el estado global del carrito de compras
 * y provee funciones para modificarlo
 */
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    /**
  * Aumenta en 1 la cantidad de un producto según su id
  */
    const sumaCantidad = (id) => {
        setCart(
            cart.map(item => {
                // Si encontramos el producto, aumentamos su cantidad
                if (item.id === id) {
                    return { ...item, cantidad: item.cantidad + 1 }
                }
                return item
            })
        )
    }

    /**
   * Disminuye en 1 la cantidad de un producto
   * Si la cantidad llega a 0, se elimina del carrito
   */
    const restaCantidad = (id) => {
        setCart(
            cart
                .map(item => {
                    if (item.id === id) {
                        // Reducimos la cantidad del producto
                        return { ...item, cantidad: item.cantidad - 1 }
                    }
                    return item
                })
                // Eliminamos productos con cantidad 0
                .filter(item => item.cantidad > 0)
        )
    }

    /**
   * Agrega un producto al carrito
   * - Si ya existe, aumenta la cantidad
   * - Si no existe, lo agrega con cantidad 1
   */
    const addToCart = (product) => {

        // Verificamos si el producto ya está en el carrito
        const stockProducto = cart.find(item => item.id === product.id)

        if (stockProducto) {
            // Si existe, aumentamos la cantidad
            setCart(
                cart.map(item => {
                    if (item.id === product.id) {
                        return { ...item, cantidad: item.cantidad + 1 }
                    }
                    return item
                })
            )
        } else {
            // Si no existe, lo agregamos con cantidad inicial 1
            setCart([...cart,
            { ...product, cantidad: 1 }
            ])
        }
    }

    /**
  * Calcula el total a pagar del carrito
  * sumando precio * cantidad de cada producto
  */
    const getTotal = () => {
        return cart.reduce((acumulador, item) => {
            return acumulador + (item.price * item.cantidad)
        }, 0)
    }

    return (
        // Provee el estado y funciones a toda la aplicación
        <CartContext.Provider value={{
            cart,
            addToCart,
            sumaCantidad,
            restaCantidad,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider