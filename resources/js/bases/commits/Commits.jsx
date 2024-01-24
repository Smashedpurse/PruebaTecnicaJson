import axios from "axios";
import { useState, useEffect } from "react";

export const Commits = () => {
    const [first, setfirst] = useState("");

    useEffect(() => {
        console.log('Entrando al UseEffect')
        axios
            .get(
                "https://gitlab.com/api/v4/projects/53662602/repository/commits", {
                    headers: {
                        'PRIVATE-TOKEN': 'glpat-b8t5FyH2G9-n2KyTki-q',
                    },
                }
            )
            .then((response) => {
                console.log("response", response);
            })
            .catch((error) => {
                console.error("Error en la solicitud:", error);
            });
    }, []);



    return (
        <>
            <div className="text-white">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Desarrollador</th>
                            <th scope="col">Fecha de creación</th>
                            <th scope="col">Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark Otto</td>
                            <td>2012-04-23T18:25:43.511Z</td>
                            <td>Descripción del commit</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
