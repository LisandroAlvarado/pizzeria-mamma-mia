import Button from "react-bootstrap/Button"

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

import { Link } from "react-router-dom";


const Navbar = () => {

    const { getTotal } = useContext(CartContext)

    const { token, logout } = useContext(UserContext)

    return (
        <nav
            className="container-fluid d-flex align-items-center px-2"
            style={{
                backgroundColor: "#333",
                color: "white",
                minHeight: "4rem",
            }}
        >
            <h5 className="display-flex justify-content-center align-content-center p-2">¡Pizzeria Mamma Mia!</h5>
            <Button as={Link} to="/" className="mx-1 btn-light">
                🔐 Home
            </Button>

            {token ? (
                <>
                    <Button as={Link} to="/profile" className="mx-1 btn-light">
                        🔓 Profile
                    </Button>

                    <Button onClick={logout} className="btn btn-light mx-1">
                        🔒 Logout
                    </Button>
                </>
            ) : (
                <>
                    <Button as={Link} to="/login" className="mx-1">
                        🔐 Login
                    </Button>

                    <Button as={Link} to="/register" className="mx-1">
                        🔐 Register
                    </Button>
                </>
            )}

            <Button as={Link} to="/cart" className="btn btn-info ms-auto">
                🛒 Total: {getTotal().toLocaleString("es-CL")}
            </Button>
        </nav>
    );
};

export default Navbar;
