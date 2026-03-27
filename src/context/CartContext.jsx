import { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const sumaCantidad = (id) => {
        setCart(
            cart.map(item => {
                if (item.id === id) {
                    return { ...item, cantidad: item.cantidad + 1 }
                }
                return item
            })
        )
    }

    const restaCantidad = (id) => {
        setCart(
            cart
                .map(item => {
                    if (item.id === id) {
                        return { ...item, cantidad: item.cantidad - 1 }
                    }
                    return item
                })
                .filter(item => item.cantidad > 0)
        )
    }

    const addToCart = (product) => {
        const stockProducto = cart.find(item => item.id === product.id)

        if (stockProducto) {
            setCart(
                cart.map(item => {
                    if (item.id === product.id) {
                        return { ...item, cantidad: item.cantidad + 1 }
                    }
                    return item
                })
            )
        } else {
            setCart([...cart,
            { ...product, cantidad: 1 }
            ])
        }
    }

    const getTotal = () => {
        return cart.reduce((acumulador, item) => {
            return acumulador + (item.price * item.cantidad)
        }, 0)
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, sumaCantidad, restaCantidad, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider