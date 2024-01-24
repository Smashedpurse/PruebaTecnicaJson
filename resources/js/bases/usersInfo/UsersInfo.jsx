import React from "react";

export const UsersInfo = () => {
    let conected = true;
    let noConected = false;
    return (
        <>
        <div className="text-white">
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Posición</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td> {conected ? "🟢" : "No conectado"}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td> {conected ? "🟢" : "No conectado"}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td> {conected ? "🟢" : "No conectado"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
};

