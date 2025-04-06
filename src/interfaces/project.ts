export interface IProject {
    id: number;
    image?: string
    name: string;
    description: string;
    tags: string[];
    isCodeAvailable: boolean;
    codebaseUrl: string;
    isDemoAvailable: boolean;
    demoUrl: string;
}