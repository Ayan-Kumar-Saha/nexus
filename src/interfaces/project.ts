export interface IProject {
    id: number;
    imagePath?: string
    name: string;
    description: string;
    tags: string[];
    isCodeAvailable: boolean;
    codebaseUrl: string;
    isDemoAvailable: boolean;
    demoUrl: string;
    isFeatured: boolean;
    isActive: boolean;
    isDetailsAvailable: boolean;
    longDescription: string;
    features: string[];
    contributions: string[];
}