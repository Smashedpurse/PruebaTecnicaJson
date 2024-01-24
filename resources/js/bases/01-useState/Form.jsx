import { useState } from "react";

export const Form = () => {
    const [search, setSearch] = useState("");

    /*const handleSubmit = (e) =>{
        e.preventDefault();
        setSearch(e.target.search.value);
    }
    */

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    if (search == "bulbasor") setSearch("Capturado");

    return (
        <>
            <h2 className="text-white text-center">Form</h2>
            <div className="d-flex justify-content-center">
                <form
                    className="d-flex justify-content-center"
                    onChange={handleInputChange}
                >
                    <input
                        type="text"
                        name="search"
                        autoComplete="off"
                        className="form-control mb-3 me-3"
                        value={search}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary mb-3">
                        Buscar
                    </button>

                    <p>Busqueda de Pokemon: {search}</p>
                </form>
            </div>
            <hr className="border border-white"/>
        </>
    );
};

export default Form;
