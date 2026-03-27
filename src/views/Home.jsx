import Header from "./Header";
import { useContext } from "react";
import CardPizza from "../components/CardPizza";
import { PizzaContext } from "../context/PizzaContext";

const Home = () => {

    const { pizzas } = useContext(PizzaContext)

    return (
        <main>
            <Header />
            <div className="d-flex gap-4 justify-content-center flex-wrap mt-4">
                {pizzas?.map(pizza => (
                    <CardPizza
                        key={pizza.id}
                        pizza={pizza}
                    />
                ))}
            </div>
        </main>
    )
};

export default Home;
