export interface IProject {
    id: number;
    name: string;
    description: string;
    tags: string[];
    isCodeAvailable: boolean;
    codebaseLink: string;
    isDemoAvailable: boolean;
    demoLink: string;
}