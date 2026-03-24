import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <Container>
            <h1 className="mb-4">La ruta que intetas consultar no existe :/</h1>
            <Link to="/" className="btn btn-primary">Regresar al Home</Link>
        </Container>
    )
}

export default NotFound