import { useContext } from "react";
import { UserContext } from "../context/UserContext";

// Componente Profile
// Muestra la información del usuario autenticado
const Profile = () => {

    // Obtenemos el email del usuario y la función logout desde el contexto global
    const { email, logout } = useContext(UserContext)


    return (
        <main className="container d-flex justify-content-center align-items-center mt-5">
            {/* Tarjeta que contiene la información del perfil */}
            <div className="card p-4 text-center" style={{ maxWidth: "400px" }}>
                <h3 className="mb-3">Perfil</h3>
                <p className="mb-4">Email: {email}</p>

                {/* Botón para cerrar sesión */}
                {/* Al hacer click ejecuta la función logout del contexto */}
                <button className="btn btn-danger" onClick={logout}>
                    Cerrar sesión
                </button>
            </div>
        </main>
    );
};

export default Profile;