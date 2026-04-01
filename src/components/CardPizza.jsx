// Hook para acceder al contexto global
import { useContext } from 'react';

// Contexto del carrito (manejo de productos)
import { CartContext } from "../context/CartContext";

// Componentes de UI (React Bootstrap)
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Para navegación entre rutas
import { Link } from 'react-router-dom';

/**
 * Componente CardPizza
 * Muestra la información de una pizza en formato tarjeta
 * y permite ver el detalle o agregarla al carrito
 */
const CardPizza = ({ pizza }) => {

    // Función global para agregar productos al carrito
    const { addToCart } = useContext(CartContext)

    return (
        <Card style={{ width: "18rem" }}>
            {/* Imagen de la pizza */}
            <Card.Img
                variant="top"
                src={pizza.img}
                className="card-img-fixed"
            />

            <Card.Body className="d-flex flex-column">

                <div>
                    {/* Nombre de la pizza */}
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        <ul>
                            {/* Lista de ingredientes */}
                            {pizza.ingredients.map(ingredient => (
                                <li key={ingredient}>{ingredient}</li>
                            ))}
                        </ul>
                    </Card.Text>
                </div>

                {/* Precio formateado en moneda chilena */}
                <h5 className="fw-bold mt-auto mb-3">
                    ${pizza.price.toLocaleString("es-CL")}
                </h5>

                <div className="d-flex justify-content-between">
                    {/* Navega al detalle de la pizza usando su id */}
                    <Link to={`/pizza/${pizza.id}`}>
                        <Button variant="outline-dark">Ver más</Button>
                    </Link>

                    {/* Agrega la pizza al carrito */}
                    <Button onClick={() => addToCart(pizza)} variant="dark">
                        Añadir
                    </Button>
                </div>

            </Card.Body>
        </Card>
    );
};

export default CardPizza;
