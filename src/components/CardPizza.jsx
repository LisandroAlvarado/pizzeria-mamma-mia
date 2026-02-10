import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardPizza = ({ image, name, price, ingredients }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={image}
                className="card-img-fixed"
            />

            <Card.Body className="d-flex flex-column">

                <div>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <strong>Ingredientes:</strong><br />
                        🍕 {ingredients.join(", ")}
                    </Card.Text>
                </div>

                <h5 className="fw-bold mt-auto mb-3">
                    ${price.toLocaleString("es-CL")}
                </h5>

                <div className="d-flex justify-content-between">
                    <Button variant="outline-dark">Ver más</Button>
                    <Button variant="dark">Añadir</Button>
                </div>

            </Card.Body>
        </Card>
    );
};

export default CardPizza;
