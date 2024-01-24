export const MultipleInputForm = () => {
    //1 Hacer formulario controlado
    //2 Hacer un método que al hacer submit imprima en pantalla el valor del formulario
    //3 Un solo método para controlar el formulario

    const [form, setform] = useState({
        email:'',
        password:'',
    })

    const {email,password} = form;

    const handleInputChange = (e) =>{
        console.log({name: e.target.name, value:e.target.value});
    }

    return (
        <>
            <h1 className="text-white text-center">Multiple Input Form</h1>
            <hr />

            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={handleInputChange}
                        type="email"
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        onChange={handleInputChange}
                        type="password"
                        value={password}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </>
    );
};
