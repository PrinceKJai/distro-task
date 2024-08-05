// App.tsx
import React, { useState, useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import FilterPanel from "./components/FilterPanel";
import DataTable from "./components/DataTable";
import { FilterOptions, TableData } from "./utils/types";
import { rows as initialRows } from "./utils/data";
import SearchInput from "./components/SearchInput";

const initialFilterOptions: FilterOptions = {
  public: undefined,
  active: undefined,
  schoolLevel: [],
  subjectArea: [],
};

const App: React.FC = () => {
  const [filterOptions, setFilterOptions] =
    useState<FilterOptions>(initialFilterOptions);
  const [rows, setRows] = useState<TableData[]>(initialRows);
  const [filteredRows, setFilteredRows] = useState<TableData[]>(initialRows);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    let filtered = rows;

    if (filterOptions.public !== undefined) {
      filtered = filtered.filter((row) => row.public === filterOptions.public);
    }
    if (filterOptions.active !== undefined) {
      filtered = filtered.filter((row) => row.active === filterOptions.active);
    }
    if (filterOptions.schoolLevel.length > 0) {
      filtered = filtered.filter((row) =>
        row.regions.some((level) => filterOptions.schoolLevel.includes(level))
      );
    }
    if (filterOptions.subjectArea.length > 0) {
      filtered = filtered.filter((row) =>
        row.tags.some((tag) => filterOptions.subjectArea.includes(tag))
      );
    }

    setFilteredRows(filtered);

    // Update inputValue based on applied filters
    const filterStrings = [];

    if (filterOptions.public !== undefined) {
      filterStrings.push(`public:${filterOptions.public ? "true" : "false"}`);
    }
    if (filterOptions.active !== undefined) {
      filterStrings.push(`active:${filterOptions.active ? "true" : "false"}`);
    }
    if (filterOptions.schoolLevel.length > 0) {
      filterStrings.push(`schoolLevel:${filterOptions.schoolLevel.join(",")}`);
    }
    if (filterOptions.subjectArea.length > 0) {
      filterStrings.push(`subjectArea:${filterOptions.subjectArea.join(",")}`);
    }

    setInputValue(filterStrings.join(", "));
  }, [filterOptions, rows]);

  const resetFilters = () => {
    setFilterOptions(initialFilterOptions);
  };

  return (
    <Container style={{ margin: "40px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <FilterPanel
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
            resetFilters={resetFilters}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Box mb={2}>
            <SearchInput searchTerm={inputValue} />
          </Box>
          <Box>
            <DataTable rows={filteredRows} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
