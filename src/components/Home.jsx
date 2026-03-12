import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";


const Home = () => {
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
