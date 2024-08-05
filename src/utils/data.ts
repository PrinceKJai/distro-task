import { GridColDef } from "@mui/x-data-grid";
import { TableData } from "./types";

export const rows:TableData[] = [
  {
    id: 1,
    name: "Biology",
    public: true,
    active: true,
    regions: ["HS", "MS", "ES"],
    tags: ["science"],
  },
  {
    id: 2,
    name: "Chemistry",
    public: true,
    active: true,
    regions: ["HS", "MS"],
    tags: ["science"],
  },
  {
    id: 3,
    name: "Physics",
    public: false,
    active: false,
    regions: ["HS"],
    tags: ["science", "math"],
  },
  {
    id: 4,
    name: "Algebra",
    public: false,
    active: true,
    regions: ["HS", "MS"],
    tags: ["math"],
  },
  {
    id: 5,

    name: "Geometry",
    public: true,
    active: true,
    regions: ["HS", "MS"],
    tags: ["math"],
  },
  {
    id: 6,

    name: "English",
    public: false,
    active: true,
    regions: ["HS", "MS", "ES"],
    tags: ["literature"],
  },
  {
    id: 7,

    name: "World History",
    public: true,
    active: true,
    regions: ["HS"],
    tags: ["history"],
  },
  {
    id: 8,

    name: "American Literature",
    public: true,
    active: true,
    regions: ["HS"],
    tags: ["literature"],
  },
  {
    id: 9,

    name: "Calculus",
    public: true,
    active: false,
    regions: ["HS"],
    tags: ["math"],
  },
  {
    id: 10,

    name: "Earth Science",
    public: false,
    active: true,
    regions: ["MS", "ES"],
    tags: ["science"],
  },
  {
    id: 11,

    name: "Creative Writing",
    public: false,
    active: true,
    regions: ["HS", "MS"],
    tags: ["literature"],
  },
  {
    id: 12,

    name: "Ancient Civilizations",
    public: true,
    active: true,
    regions: ["MS"],
    tags: ["history"],
  },
];

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "regions",
    headerName: "Regions",
    width: 150,
    editable: true,
  },
  {
    field: "tags",
    headerName: "Tags",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "active",
    headerName: "Active",
    width: 160,
  },
  {
    field: "public",
    headerName: "Public",
    width: 160,
  },
];
