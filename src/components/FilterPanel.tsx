// FilterPanel.tsx
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FilterOptions } from "../utils/types";

interface FilterPanelProps {
  filterOptions: FilterOptions;
  setFilterOptions: (options: FilterOptions) => void;
  resetFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filterOptions,
  setFilterOptions,
  resetFilters,
}) => {
  const handlePublicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFilterOptions({
      ...filterOptions,
      public: checked ? value === "true" : undefined,
    });
  };

  const handleActiveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFilterOptions({
      ...filterOptions,
      active: checked ? value === "active" : undefined,
    });
  };

  const handleSchoolLevelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = event.target;
    const newSchoolLevels = checked
      ? [...filterOptions.schoolLevel, value]
      : filterOptions.schoolLevel.filter((level) => level !== value);
    setFilterOptions({ ...filterOptions, schoolLevel: newSchoolLevels });
  };

  const handleSubjectAreaChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = event.target;
    const newSubjectAreas = checked
      ? [...filterOptions.subjectArea, value]
      : filterOptions.subjectArea.filter((area) => area !== value);
    setFilterOptions({ ...filterOptions, subjectArea: newSubjectAreas });
  };

  //   const uniqueTags = Array.from(new Set(['science', 'math', 'literature', 'history'])); // Replace with actual tags if available

  return (
    <Box>
      <Box mb={2}>
        <Button variant="contained" onClick={resetFilters}>
          Reset Filters
        </Button>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Public</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterOptions.public === true}
                  onChange={handlePublicChange}
                  value="true"
                />
              }
              label="Public"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterOptions.public === false}
                  onChange={handlePublicChange}
                  value="false"
                />
              }
              label="Private"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Active</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterOptions.active === true}
                  onChange={handleActiveChange}
                  value="active"
                />
              }
              label="Active"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterOptions.active === false}
                  onChange={handleActiveChange}
                  value="inactive"
                />
              }
              label="Inactive"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>School Level</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterOptions.schoolLevel.includes("ES")}
                  onChange={handleSchoolLevelChange}
                  value="ES"
                />
              }
              label="ES"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterOptions.schoolLevel.includes("MS")}
                  onChange={handleSchoolLevelChange}
                  value="MS"
                />
              }
              label="MS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterOptions.schoolLevel.includes("HS")}
                  onChange={handleSchoolLevelChange}
                  value="HS"
                />
              }
              label="HS"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Subject Area</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              key="science"
              control={
                <Checkbox
                  checked={filterOptions.subjectArea.includes("science")}
                  onChange={handleSubjectAreaChange}
                  value="science"
                />
              }
              label="science"
            />
            <FormControlLabel
              key="math"
              control={
                <Checkbox
                  checked={filterOptions.subjectArea.includes("math")}
                  onChange={handleSubjectAreaChange}
                  value="math"
                />
              }
              label="math"
            />
            <FormControlLabel
              key="history"
              control={
                <Checkbox
                  checked={filterOptions.subjectArea.includes("history")}
                  onChange={handleSubjectAreaChange}
                  value="history"
                />
              }
              label="history"
            />
            <FormControlLabel
              key="literature"
              control={
                <Checkbox
                  checked={filterOptions.subjectArea.includes("literature")}
                  onChange={handleSubjectAreaChange}
                  value="literature"
                />
              }
              label="literature"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterPanel;
