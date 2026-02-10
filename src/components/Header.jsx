import HeaderBackground from "../assets/img/Header.jpg";
import FotoHeader from "../assets/img/Header.jpg"

const Header = () => {
    return (
        <div className="container-fluid p-4"

            style={{
                backgroundImage: `url(${FotoHeader})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white",
                padding: "2rem",
                textAlign: "center",
                opacity: 0.8,
            }}
        >

            <h1>¡Pizzería Mamma Mia!</h1>
            <p>Tenemos las mejores pizzas que podrás encontrar</p>
        </div>
    );
};

export default Header;

