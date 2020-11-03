export interface CreateSolutionBody {
    company: string;
    business: string;
    description?: string;
}

export interface UpdateSolutionBody {
    company?: string;
    business?: string;
    description?: string;
}
