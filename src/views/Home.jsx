// Componente de cabecera (banner o presentación)
import Header from "./Header";

// Hook para acceder a contexto global
import { useContext } from "react";

// Componente que representa cada pizza
import CardPizza from "../components/CardPizza";

// Contexto donde están las pizzas obtenidas desde la API
import { PizzaContext } from "../context/PizzaContext";

/**
 * Componente Home
 * Muestra la página principal con el listado de pizzas
 */
const Home = () => {

    // Obtenemos el listado de pizzas desde el contexto global
    const { pizzas } = useContext(PizzaContext)

    return (
        <main>
            <Header />
            {/* 
              Contenedor de las tarjetas de pizzas
              Usa flexbox para distribuirlas responsivamente
            */}

            <div className="d-flex gap-4 justify-content-center flex-wrap mt-4">
                {/* 
                  Recorre el array de pizzas y renderiza una CardPizza por cada una
                  Uso de optional chaining (?.) para evitar errores si pizzas aún no carga
                */}
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
