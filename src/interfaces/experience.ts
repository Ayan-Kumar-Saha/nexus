
export interface IDatePoint {
    month: number;
    year: number;
}

export interface IPosition {
    id: number;
    role: string;
    from: IDatePoint;
    to: IDatePoint;
    isActive: boolean;
    responsibilities: string[];
}

export interface IExperience {
    id: number;
    company: string;
    positions: IPosition[]
}
