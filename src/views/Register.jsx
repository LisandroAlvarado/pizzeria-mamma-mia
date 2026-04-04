// Hook para manejar estado en formularios
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


/**
 * Componente Register
 * Maneja el formulario de registro de usuario
 * con validaciones y feedback al usuario
 */
const Register = () => {

    // Estados de los inputs
    const { register } = useContext(UserContext)
    const navigate = useNavigate()

    // Estados del formulario
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    // Estado para mensajes de error o éxito
    const [mensaje, setMensaje] = useState("")

    /**
 * Valida el formato del email usando regex
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
    * Valida los datos del formulario antes de registrar
    */
    const validarDatos = async (e) => {
        e.preventDefault()

        // Validación: campos vacíos
        if (!email.trim() ||
            !password.trim() ||
            !confirmPassword.trim()) {
            mostrarMensaje("Todos los campos son obligatorios")
            return
        }

        const emailLimpio = email.trim()

        // Validación: formato email
        if (!validarEmail(emailLimpio)) {
            mostrarMensaje("El formato del email no es valido")
            return
        }

        // Validación: largo mínimo password
        if (password.length < 6) {
            mostrarMensaje("El password debe tener al menos 6 caracteres")
            return
        }

        // Validación: contraseñas coinciden
        if (password !== confirmPassword) {
            mostrarMensaje("Las contraseñas no coinciden")
            return
        }

        try {
            await register(emailLimpio, password)

            // Si todo está correcto
            setMensaje("Registro exitoso")
            // Solo despues si el registro fue exitoso
            navigate("/");

            // Limpia el formulario solo si fue exitoso
            setEmail("")
            setPassword("")
            setConfirmPassword("")

        } catch (error) {
            mostrarMensaje("Error en el registro")
        }
    }

    return (

        <div className="container d-flex justify-content-center align-items-center flex-grow-1">
            <div className="card shadow p-4" style={{ width: "400px" }}>
                <h3 className="text-center mb-4">Registro</h3>

                {/* Mensaje dinámico */}
                {mensaje && (
                    <div className={`alert ${mensaje === "Registro exitoso" ? "alert-success" : "alert-danger"
                        }`}>
                        {mensaje}
                    </div>
                )}

                {/* Formulario */}
                <form className="formulario" onSubmit={validarDatos}>

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
                    <div className="mb-3">
                        <label className="form-label">Confirmar
                            Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={
                            !password.trim() ||
                            !confirmPassword.trim() ||
                            password.length < 6
                        }
                    >
                        Registrar
                    </button>
                </form >
            </div>
        </div>
    )
}

export default Register