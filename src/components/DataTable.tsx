import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container, Box } from "@mui/material";
import { rows, columns } from "../utils/data";
import { TableData } from "../utils/types";

// Define the type for the row data
interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number | null;
}

interface DataTableProps {
  rows: TableData[];
}

const DataTable: React.FC<DataTableProps> = ({ rows }) => {
  return (
    <Container>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Box>
    </Container>
  );
};

export default DataTable;
