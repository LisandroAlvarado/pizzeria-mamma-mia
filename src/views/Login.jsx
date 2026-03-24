import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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

        if (
            !email.trim() ||
            !password.trim()
        ) {
            mostrarMensaje("Todos los campos son obligatorios")
            return
        }

        if (password.trim().length < 6) {
            mostrarMensaje("El password debe tener al menos 6 caracteres")
            return
        }


        const emailLimpio = email.trim()

        if (!validarEmail(emailLimpio)) {
            mostrarMensaje("El email no es valido")
            return
        }


        mostrarMensaje("Formulario enviado con exito")
        setEmail('')
        setPassword('')
    }

    return (
        <div className="container d-flex justify-content-center align-items-center flex-grow-1">
            <div className="card shadow p-4" style={{ width: "400px" }}>
                <h3 className="text-center mb-4">Iniciar Sesión</h3>

                {mensaje && (
                    <div className={`alert ${mensaje === "Formulario enviado con exito"
                        ? "alert-success"
                        : "alert-danger"
                        }`}>
                        {mensaje}
                    </div>
                )}

                <form onSubmit={validarDatos}>
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