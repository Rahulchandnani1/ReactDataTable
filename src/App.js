import React from "react";
import DataTable from "react-data-table-component";
import "./App.css";
const columns = [
  {
    name: "ID",
    selector: row => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: row => row.name,
    sortable: true,
  },
  {
    name: "Age",
    selector: row => row.age,
    sortable: true,
  },
];

const data = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Doe", age: 25 },
];

const App = () => {
  return (
    <div className="App">
      <p className="text1">React Data Table Component</p>
      <DataTable
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
};

export default App;
