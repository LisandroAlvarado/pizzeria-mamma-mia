// Componente de botón de Bootstrap
import Button from "react-bootstrap/Button"

// Hooks de React
import { useContext } from "react";

// Contextos globales
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

// Navegación entre rutas
import { Link } from "react-router-dom";

/**
 * Componente Navbar
 * Muestra la barra de navegación principal de la app
 * Incluye navegación, autenticación y resumen del carrito
 */
const Navbar = () => {

    // Obtiene el total acumulado del carrito
    const { getTotal } = useContext(CartContext)

    // Obtiene el estado de autenticación y función de logout
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
            {/* Nombre de la aplicación */}
            <h5 className="display-flex justify-content-center align-content-center p-2">
                ¡Pizzeria Mamma Mia!
            </h5>


            {/* Navegación al Home */}
            <Button as={Link} to="/" className="mx-1 btn-light">
                🔐 Home
            </Button>


            {/* 
              Render condicional según autenticación:
              Si hay token, usuario logueado
              Si no, usuario no autenticado
            */}
            {token ? (
                <>
                    {/* Acceso al perfil del usuario */}
                    <Button as={Link} to="/profile" className="mx-1 btn-light">
                        🔓 Profile
                    </Button>

                    {/* Cierra la sesión */}
                    <Button onClick={logout} className="btn btn-light mx-1">
                        🔒 Logout
                    </Button>
                </>
            ) : (
                <>
                    {/* Acceso al login */}
                    <Button as={Link} to="/login" className="mx-1">
                        🔐 Login
                    </Button>

                    {/* Acceso al registro */}
                    <Button as={Link} to="/register" className="mx-1">
                        🔐 Register
                    </Button>
                </>
            )}

            {/* 
              Botón del carrito:
              Muestra el total formateado y redirige al carrito
            */}
            <Button as={Link} to="/cart" className="btn btn-info ms-auto">
                🛒 Total: {getTotal().toLocaleString("es-CL")}
            </Button>
        </nav>
    );
};

export default Navbar;
