import * as React from "react";
import { TextField, Box } from "@mui/material";

interface SearchInputProps {
  searchTerm: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm }) => {
  return (
    <Box mb={2}>
      <TextField
        fullWidth
        variant="outlined"
        value={searchTerm}
        InputProps={{
          readOnly: true,
        }}
      />
    </Box>
  );
};

export default SearchInput;
