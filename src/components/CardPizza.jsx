import { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardPizza = ({ pizza }) => {

    const { addToCart } = useContext(CartContext)

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={pizza.img}
                className="card-img-fixed"
            />

            <Card.Body className="d-flex flex-column">

                <div>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        <ul>
                            {pizza.ingredients.map(ingredient => (
                                <li key={ingredient}>{ingredient}</li>
                            ))}
                        </ul>
                    </Card.Text>
                </div>

                <h5 className="fw-bold mt-auto mb-3">
                    ${pizza.price.toLocaleString("es-CL")}
                </h5>

                <div className="d-flex justify-content-between">
                    <Button variant="outline-dark">Ver más</Button>
                    <Button onClick={() => addToCart(pizza)} variant="dark">Añadir</Button>
                </div>

            </Card.Body>
        </Card>
    );
};

export default CardPizza;
