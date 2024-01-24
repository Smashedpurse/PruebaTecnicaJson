import "./Login.css";

export const Login = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="col-8 bg-Form h-100 rounded p-4">
                            <h1 className="text-center text-white">
                                Satori-Watch
                            </h1>

                            <div className="d-flex justify-content-center">
                                <img
                                    src="assets/satoritech.png"
                                    alt="satoritech.png"
                                    className="w-25"
                                />
                            </div>

                            <form className="loginSatori">
                                <div class="mb-3">
                                    <label
                                        for="exampleInputEmail1"
                                        className="form-label text-white"
                                    >
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        for="exampleInputPassword1"
                                        className="form-label text-white"
                                    >
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                    />
                                </div>
                                <div className="d-flex justify-content-center mt-5">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Ingresa
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
