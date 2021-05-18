import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


function Traininglist() {
    const [trainings, setTrainings] = useState([]);
    useEffect(() => {
        fetchTrainings();
    }, []);


    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
            .then(response => response.json())
            .then(data => setTrainings(data))
            .catch(err => console.err(err))
    }


    const columns = [
        { headerName: 'Aktiviteetti', field: 'activity', sortable: true, filter: true },
        { headerName: 'Etunimi', field: 'customer.firstname', sortable: true, filter: true },
        { headerName: 'Sukunimi', field: 'customer.lastname', sortable: true, filter: true },
        { headerName: 'Aika', field: 'date', sortable: true, filter: true },
        { headerName: 'Kesto', field: 'duration', sortable: true, filter: true },
    ]

    return (
        <div>
            <div className="ag-theme-material" style={{ height: 500, width: '95%', margin: 'auto' }}>
                <AgGridReact
                    rowData={trainings}
                    columnDefs={columns}
                    pagination={true}
                    paginationPageSize={10}
                    floatingFilter={true}
                    suppressCellSelection={true}
                />
            </div>
        </div>

    )
}

export default Traininglist;