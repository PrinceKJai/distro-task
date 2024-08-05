export interface TableData {
    id:number;
    name:string;
    public:boolean;
    active:boolean;
    regions:string[];
    tags: string[];
};

export interface FilterOptions {
    public?: boolean;
    active?: boolean;
    schoolLevel: string[];
    subjectArea: string[];
} 