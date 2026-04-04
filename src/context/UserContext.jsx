import { createContext, useState } from "react";

// Creamos el contexto de usuario (autenticación)
export const UserContext = createContext();

/**
 * UserProvider
 * Maneja el estado de autenticación del usuario
 * (login, logout y token)
 */
const UserProvider = ({ children }) => {

    // Estado del token
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

    /**
        * Función para iniciar sesión
        */
    const login = async (email, password) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            setToken(data.token);
            setEmail(data.email);

        } catch (error) {
            console.error("Error en login:", error);
        }
    };

    /**
            * Función para iniciar sesión
            */
    const register = async (email, password) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            setToken(data.token);
            setEmail(data.email);

        } catch (error) {
            console.error("Error en register:", error);
        }
    };

    /**
     * Función para cerrar sesión
     * localStorage, simula sesión “recordada”
     */
    const logout = () => {
        setToken(null);
        setEmail(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };
    return (
        // Provee el estado y funciones a toda la app
        <UserContext.Provider value={{ token, email, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;