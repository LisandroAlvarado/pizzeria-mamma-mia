import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Pizza = () => {

    const { addToCart } = useContext(CartContext)

    const [pizza, setPizza] = useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas/")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPizza(data)
            })
    }, [])

    if (!pizza) return <p>Cargando...</p>

    return (
        <main className="container mt-4">
            <div className="card mx-auto" style={{ maxWidth: "600px" }}>

                <img src={pizza.img} className="card-img-top" alt={pizza.name} />

                <div className="card-body">
                    <h2 className="card-title">{pizza.name}</h2>

                    <p className="card-text">{pizza.desc}</p>

                    <h4>Ingredientes:</h4>
                    <ul>
                        {pizza.ingredients.map((ing, index) => (
                            <li key={index}>{ing}</li>
                        ))}
                    </ul>

                    <button onClick={() => addToCart(pizza)}
                        className="btn btn-dark mt-2">
                        Añadir al carrito 🛒
                    </button>
                </div>

            </div>
        </main>
    );
}

export default Pizza