const Profile = () => {

    return (
        <main className="container d-flex justify-content-center align-items-center mt-5">
            <div className="card p-4 text-center" style={{ maxWidth: "400px" }}>
                <h3 className="mb-3">Perfil</h3>
                <p className="mb-4">Email: ejemplo@mail.com</p>
                <button className="btn btn-danger">
                    Cerrar sesión
                </button>
            </div>
        </main>
    );
};

export default Profile;