import Header from "./Header";
import CardPizza from "./CardPizza";

import FotoNapolitana from "../assets/img/pizza-napolitana.jpg";
import FotoPepperoni from "../assets/img/pizza-pepperoni.jpg";
import FotoEspanola from "../assets/img/pizza-espanola.jpg";

const Home = () => {
    return (
        <main className="flex-grow-1 pb-5">
            <Header />

            <div className="d-flex gap-4 justify-content-center flex-wrap mt-4 mb-1">
                <CardPizza
                    image={FotoNapolitana}
                    name="Napolitana"
                    price={5950}
                    ingredients={["Mozzarella", "tomates", "jamón", "orégano"]}
                />

                <CardPizza
                    image={FotoEspanola}
                    name="Española"
                    price={6950}
                    ingredients={["Mozzarella", "gorgonzola", "parmesano", "provolone"]}
                />

                <CardPizza
                    image={FotoPepperoni}
                    name="Pepperoni"
                    price={6950}
                    ingredients={["Mozzarella", "pepperoni", "orégano"]}
                />
            </div>
        </main>
    );
};

export default Home;
