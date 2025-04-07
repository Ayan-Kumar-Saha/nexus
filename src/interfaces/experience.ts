
export interface IPosition {
    id: number;
    role: string;
    from: number;
    to: number;
    isActive: boolean;
    responsibilities: string[];
}

export interface IExperience {
    id: number;
    company: string;
    positions: IPosition[]
}