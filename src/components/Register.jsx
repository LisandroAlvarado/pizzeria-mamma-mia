import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [mensaje, setMensaje] = useState("")

    const validarEmail = (correo) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(correo)
    }

    const mostrarMensaje = (texto) => {
        setMensaje(texto)

        setTimeout(() => {
            setMensaje('')
        }, 3000)
    }

    const validarDatos = (e) => {
        e.preventDefault()

        if (!email.trim() ||
            !password.trim() ||
            !confirmPassword.trim()) {
            mostrarMensaje("Todos los campos son obligatorios")
            return
        }

        const emailLimpio = email.trim()

        if (!validarEmail(emailLimpio)) {
            mostrarMensaje("El formato del email no es valido")
            return
        }

        if (password.length < 6) {
            mostrarMensaje("El password debe tener al menos 6 caracteres")
            return
        }

        if (password !== confirmPassword) {
            mostrarMensaje("Las contraseñas no coinciden")
            return
        }

        setMensaje("Registro exitoso")
        setEmail("")
        setPassword("")
        setConfirmPassword("")

    }
    return (

        <div className="container d-flex justify-content-center align-items-center flex-grow-1">
            <div className="card shadow p-4" style={{ width: "400px" }}>
                <h3 className="text-center mb-4">Registro</h3>

                {mensaje && (
                    <div className={`alert ${mensaje === "Registro exitoso" ? "alert-success" : "alert-danger"
                        }`}>
                        {mensaje}
                    </div>
                )}

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
                        <label className="form-label">Confirmar Password</label>
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