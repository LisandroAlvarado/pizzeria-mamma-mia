import Button from "react-bootstrap/Button";

const Navbar = () => {
    const total = 25000;
    const token = false;

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
            <Button className="btn btn-light me-2">🍕 Home</Button>

            {token ? (
                <>
                    <Button className=" btn btn-light mx-1">🔓 Profile</Button>
                    <Button className=" btn btn-ligh mx-1">🔒 Logout</Button>
                </>
            ) : (
                <>
                    <Button className=" btn btn-light mx-1">🔐 Login</Button>
                    <Button className=" btn btn-light mx-1">🔐 Register</Button>
                </>
            )}

            <Button className="btn btn-info ms-auto">
                🛒 Total: ${total.toLocaleString()}
            </Button>
        </nav>
    );
};

export default Navbar;
