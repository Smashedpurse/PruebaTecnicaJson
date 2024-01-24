import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const SatoriTable = () => {
  const [commits, setCommits] = useState([]);

  const formatearFecha = (fechaString) => {
    const fecha = new Date(fechaString);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return fecha.toLocaleString('es-ES', options);
  };

  const columns = [
    { field: 'author_name', header: 'Desarrollador' },
    { field: 'message', header: 'Descripción' },
    {
      field: 'committed_date',
      header: 'Fecha',
      body: (rowData) => {
        const fechaFormateada = formatearFecha(rowData.committed_date);
        return <span>{fechaFormateada}</span>;
      },
    },    
  ];

  useEffect(() => {
    axios
      .get("https://gitlab.com/api/v4/projects/53662602/repository/commits", {
        headers: {
          'PRIVATE-TOKEN': 'glpat-b8t5FyH2G9-n2KyTki-q',
        },
      })
      .then((response) => setCommits(response.data))
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  }, []);

  return (
    <>
      <div className="card">
        <DataTable value={commits} tableStyle={{ minWidth: '50rem' }}>
          {columns.map((col, i) => (
            <Column
              key={col.field}
              field={col.field}
              header={col.header}
              body={col.body}
            />
          ))}
        </DataTable>
      </div>
    </>
  );
};