// Hooks de React para estado, efectos y contexto
import { useState, useEffect, createContext } from "react";

// Creamos el contexto para compartir las pizzas globalmente
export const PizzaContext = createContext()

/**
 * PizzaProvider
 * Se encarga de obtener las pizzas desde una API
 * y compartirlas en toda la aplicación
 */
const PizzaProvider = ({ children }) => {

    // Estado que almacena el listado de pizzas
    const [pizzas, setPizzas] = useState([])

    /**
 * useEffect se ejecuta una sola vez al montar el componente
 * Aquí se realiza la petición a la API para obtener las pizzas
 */
    useEffect(() => {
        // Llamada a la API
        fetch("http://localhost:5000/api/pizzas")
            .then(response => response.json())
            // Guardamos los datos en el estado global
            .then(data => setPizzas(data))
    }, [])

    return (
        // Provee el listado de pizzas a toda la aplicación
        <PizzaContext.Provider value={{ pizzas }}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider