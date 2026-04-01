// Hooks de React
import { useContext, useEffect, useState } from "react";

// Hook para obtener parámetros de la URL
import { useParams } from "react-router-dom";

// Contexto del carrito
import { CartContext } from "../context/CartContext";

/**
 * Componente Pizza
 * Muestra el detalle de una pizza específica
 * según el id recibido desde la URL
 */
const Pizza = () => {

    // Obtenemos el id desde la ruta (/pizza/:id)
    const { id } = useParams()

    // Función para agregar productos al carrito
    const { addToCart } = useContext(CartContext)

    // Estado que almacena la pizza obtenida desde la API
    const [pizza, setPizza] = useState(null);

    /**
  * useEffect se ejecuta cuando cambia el id
  * Realiza una petición a la API para obtener la pizza específica
  */
    useEffect(() => {
        fetch(`http://localhost:5000/api/pizzas/${id}`)
            .then(res => res.json())
            // Guardamos la pizza en el estado
            .then(data => setPizza(data))
            // Manejo de errores
            .catch(err => console.error(err));
    }, [id]);

    /**
    * Mientras los datos no llegan, mostramos mensaje de carga
    */
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

                    <button
                        onClick={() => addToCart(pizza)}
                        className="btn btn-dark mt-2"
                    >
                        Añadir al carrito 🛒
                    </button>
                </div>

            </div>
        </main>
    );
}

export default Pizza