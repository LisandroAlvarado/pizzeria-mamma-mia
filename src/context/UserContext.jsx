import { createContext, useState } from "react";

// 1. Crear el contexto
export const UserContext = createContext();

// 2. Crear el provider
const UserProvider = ({ children }) => {

    // Estado del token (simula usuario logueado)
    const [token, setToken] = useState(true);

    // Funcion login
    const login = () => {
        setToken(true);
    };

    // Función logout
    const logout = () => {
        setToken(false);
    };

    return (
        <UserContext.Provider value={{ token, logout, login }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;