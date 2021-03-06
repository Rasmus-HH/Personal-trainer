import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


function Customerlist() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
            .catch(err => console.err(err))
    }

    const columns = [
        { headerName: 'Etunimi', field: 'firstname', sortable: true, filter: true },
        { headerName: 'Sukunimi', field: 'lastname', sortable: true, filter: true },
        { headerName: 'Sähköposti', field: 'email', sortable: true, filter: true },
        { headerName: 'Puhelin', field: 'phone', sortable: true, filter: true },
        { headerName: 'Postinumero', field: 'postcode', sortable: true, filter: true },
        { headerName: 'Osoite', field: 'streetaddress', sortable: true, filter: true },
        { headerName: 'Kaupunki', field: 'city', sortable: true, filter: true }
    ]

    return (
            <div className="ag-theme-material" style={{ height: 600, width: '95%', margin: 'auto' }}>
                <AgGridReact
                    rowData={customers}
                    columnDefs={columns}
                    pagination={true}
                    paginationPageSize={10}
                    floatingFilter={true}
                    suppressCellSelection={true}
                />
            </div>
    )
}

export default Customerlist;