import Header from "./Header";
import CardPizza from "../components/CardPizza";
import { useState, useEffect } from "react";

const Home = () => {

    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas")
            .then(response => response.json())
            .then(data => setPizzas(data))
    }, [])

    return (
        <main>
            <Header />

            <div className="d-flex gap-4 justify-content-center flex-wrap mt-4">
                {pizzas.map(pizza => (
                    <CardPizza
                        key={pizza.id}
                        name={pizza.name}
                        price={pizza.price}
                        img={pizza.img}
                        ingredients={pizza.ingredients}
                    />
                ))}
            </div>

        </main>
    )

};

export default Home;
