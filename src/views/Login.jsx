// Hooks de React
import { useState, useContext } from "react"

// Contexto de usuario (autenticación)
import { UserContext } from "../context/UserContext"

// Hook para redireccionar programáticamente
import { useNavigate } from "react-router-dom";

/**
* Componente Login
* Maneja el formulario de inicio de sesión,
* validaciones y autenticación del usuario
*/
const Login = () => {

    // Función global para iniciar sesión
    const { login } = useContext(UserContext);

    // Permite redirigir a otra ruta
    const navigate = useNavigate();

    // Estados del formulario
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Estado para mostrar mensajes al usuario
    const [mensaje, setMensaje] = useState("")

    /**
     * Valida formato de email usando regex
     */
    const validarEmail = (correo) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(correo)
    }

    /**
     * Muestra un mensaje temporal (3 segundos)
     */
    const mostrarMensaje = (texto) => {
        setMensaje(texto)

        setTimeout(() => {
            setMensaje('')
        }, 3000)
    }

    /**
 * Valida los datos del formulario antes de enviar
 */
    const validarDatos = (e) => {
        e.preventDefault()

        // Validación: campos vacíos
        if (
            !email.trim() ||
            !password.trim()
        ) {
            mostrarMensaje("Todos los campos son obligatorios")
            return
        }

        // Validación: largo mínimo del password
        if (password.trim().length < 6) {
            mostrarMensaje("El password debe tener al menos 6 caracteres")
            return
        }

        // Limpieza del email
        const emailLimpio = email.trim()

        // Validación: formato de email
        if (!validarEmail(emailLimpio)) {
            mostrarMensaje("El email no es valido")
            return
        }

        mostrarMensaje("Formulario enviado con exito")

        // Simula login y redirección
        setTimeout(() => {
            login();
            navigate("/");
        }, 1000)

        // Limpia el formulario
        setEmail('')
        setPassword('')
    }

    return (
        <div className="container d-flex justify-content-center align-items-center flex-grow-1">
            <div className="card shadow p-4" style={{ width: "400px" }}>
                <h3 className="text-center mb-4">Iniciar Sesión</h3>

                {/* Mensaje dinámico (error o éxito) */}
                {mensaje && (
                    <div className={`alert ${mensaje === "Formulario enviado con exito"
                        ? "alert-success"
                        : "alert-danger"
                        }`}>
                        {mensaje}
                    </div>
                )}

                {/* Formulario */}
                <form onSubmit={validarDatos}>

                    {/* Campo email */}
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    {/* Campo password */}
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    {/* Botón de envío */}
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={
                            !validarEmail(email.trim())
                        }
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login