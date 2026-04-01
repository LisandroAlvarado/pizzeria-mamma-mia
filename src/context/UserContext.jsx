import { createContext, useState } from "react";

// Creamos el contexto de usuario (autenticación)
export const UserContext = createContext();

/**
 * UserProvider
 * Maneja el estado de autenticación del usuario
 * (login, logout y token)
 */
const UserProvider = ({ children }) => {

    // Estado del token (simula usuario logueado)
    const [token, setToken] = useState(true);

    /**
        * Función para iniciar sesión
        * Cambia el estado a autenticado
        */
    const login = () => {
        setToken(true);
    };

    /**
     * Función para cerrar sesión
     * Cambia el estado a no autenticado
     */
    const logout = () => {
        setToken(false);
    };

    return (
        // Provee el estado y funciones a toda la app
        <UserContext.Provider value={{ token, logout, login }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;